const admin = require('firebase-admin');
const functions = require("firebase-functions");
const cors = require('cors');
const express = require('express');
const firebase = require("firebase/app");
const { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } = require("firebase/auth");
const { getFirestore } = require("firebase-admin/firestore");
require('dotenv').config();

const app = express();
const appPublic = express();

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGIN_SENDERID,
  appId: process.env.APP_ID
};

// Initialize Firebase app at the top (for client-side interactions)
firebase.initializeApp(firebaseConfig);

// Initialize Firebase Admin app at the top (for server-side interactions)
const serviceAccount = {
  type: process.env.SERVICE_ACCOUNT_TYPE,
  project_id: process.env.PROJECT_ID,
  private_key_id: process.env.PRIVATE_KEY_ID,
  private_key: process.env.PRIVATE_KEY.replace(/\\n/g, '\n'),
  client_email: process.env.CLIENT_EMAIL,
  client_id: process.env.CLIENT_ID,
  auth_uri: process.env.AUTH_URI,
  token_uri: process.env.TOKEN_URI,
  auth_provider_x509_cert_url: process.env.AUTH_PROVIDER_X509_CERT_URL,
  client_x509_cert_url: process.env.CLIENT_X509_CERT_URL,
  universe_domain: process.env.UNIVERSE_DOMAIN
};

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const auth = getAuth()
const firestore = getFirestore();

app.use(cors({ origin: true }));
appPublic.use(cors({ origin: true }));

// const validateFirebaseIdToken = async (req, res, next) => {
//     console.log("Check if request is authorized with Firebase ID token");

//     if (
//       (!req.headers.authorization ||
//         !req.headers.authorization.startsWith("Bearer ")) &&
//       !(req.cookies && req.cookies.__session)
//     ) {
//       console.error(
//         "No Firebase ID token was passed as a Bearer token in the Authorization header.",
//         "Make sure you authorize your request by providing the following HTTP header:",
//         "Authorization: Bearer <Firebase ID Token>",
//         'or by passing a "__session" cookie.'
//       );
//       res.status(403).send("Unauthorized");
//       return;
//     }

//     let idToken;
//     if (
//       req.headers.authorization &&
//       req.headers.authorization.startsWith("Bearer ")
//     ) {
//       console.log('Found "Authorization" header');
//       // Read the ID Token from the Authorization header.
//       idToken = req.headers.authorization.split("Bearer ")[1];
//     } else if (req.cookies) {
//       console.log('Found "__session" cookie');
//       // Read the ID Token from cookie.
//       idToken = req.cookies.__session;
//     } else {
//       // No cookie
//       res.status(403).send("Unauthorized");
//       return;
//     }

//     try {
//       const decodedIdToken = await admin.auth().verifyIdToken(idToken);
//       console.log("ID Token correctly decoded", decodedIdToken);
//       req.user = decodedIdToken;
//       next();
//       return;
//     } catch (error) {
//       console.error("Error while verifying Firebase ID token:", error);
//       res.status(403).send("Unauthorized");
//       return;
//     }
//   };
// app.use(validateFirebaseIdToken);

// Registro

app.post("/registro", async (req, res) => {
  const { nombre, correo, contraseña } = req.body;

  // Validar la entrada
  if (!nombre || !correo || !contraseña) {
    return res.status(400).send("Faltan datos obligatorios");
  }

  // Crear el usuario en Firebase
  try {

    // const signInMethods = await auth.fetchSignInMethodsForEmail(correo);
    // if (signInMethods.length > 0) {
    //   throw new Error("El correo electrónico ya está registrado");
    // }

    const userCredential = await createUserWithEmailAndPassword(auth, correo, contraseña);
    const docRef = await firestore
      .collection("users")
      .doc(userCredential.user.uid)
      .set({
        nombre: nombre,
        correo: correo,
      });
    console.log(docRef)
    // Enviar respuesta de éxito
    res.status(201).send({ message: "Usuario registrado correctamente", status: true });

  } catch (error) {
    // Manejar errores de Firebase
    console.error("Error al registrar usuario:", error);
    res.status(400).send(error.message);
  }
});

// Login
app.post("/login", async (req, res) => {
  const { correo, contraseña } = req.body;

  // Validate input
  if (!correo || !contraseña) {
    return res.status(400).send("Faltan datos obligatorios (correo y contraseña)");
  }

  try {
    // Sign in user with email and password
    const userCredential = await signInWithEmailAndPassword(auth, correo, contraseña);

    // You can send additional information like user ID or a custom token in the response
    res.status(200).send({ message: "Usuario autenticado correctamente", status: true });
  } catch (error) {
    console.error("Error al iniciar sesión:", error);
    res.status(401).send("Correo o contraseña incorrectos"); // Adjust error message as needed
  }
});

app.post("/pets", async (req, res) => {
  // verificacion de mascota
  const { nombre, especie, edad } = req.body;
  if (!nombre || !especie || !edad) {
    return res.status(400).json({ error: "Faltan datos obligatorios" });
  }
  //obtener referencia a la coleccion de mascota en firestore
  try {
    const db = getFirestore();
    mascotasRef = collection(db, "mascotas");
    //crea un nuevo doc con los datos proporcionados
    const nuevaMascota = addDoc(mascotasRef, {
      nombre: nombre,
      especie: especie,
      edad: edad
    })
    //respuesta de exito al crear tu mascota
    res.status(201).json({ message: "Felicitaciones, tu mascota se ha registrado exitosamente", id: nuevaMascota.id })
  } catch (error) {
    console.error("Error al crear tu mascota", error);
    res.status(500).json({error: "Ocurrio un error al crear tu mascota"});
  }
})

app.get("/pets", async (req, res) => {
  const userId = req.user.uid;
try {
  const userMascotas = collection(firestore.doc(`users/${userId}`), "mascotas");
const mascotasSnapshot = await getDocs(userMascotas)
const mascotas = [];
mascotasSnapshot.forEach((doc) => {
  mascotas.push({id: doc.id, ...doc.data() })
});
res.status(200).json(mascotas);
}
catch (error){
  console.error("Error al obtener mascotas", error);
  res.status(500).json({error: "Ocurrio un error al obtener las mascotas del usuario"});
}
});
exports.app = functions.https.onRequest(app);