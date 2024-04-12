const admin = require('firebase-admin');
const functions = require("firebase-functions");
const cors  = require('cors');
const express  = require('express');
const firebase = require("firebase/app");
const {getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword} = require("firebase/auth");
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

const validateFirebaseIdToken = async (req, res, next) => {
    console.log("Check if request is authorized with Firebase ID token");
  
    if (
      (!req.headers.authorization ||
        !req.headers.authorization.startsWith("Bearer ")) &&
      !(req.cookies && req.cookies.__session)
    ) {
      console.error(
        "No Firebase ID token was passed as a Bearer token in the Authorization header.",
        "Make sure you authorize your request by providing the following HTTP header:",
        "Authorization: Bearer <Firebase ID Token>",
        'or by passing a "__session" cookie.'
      );
      res.status(403).send("Unauthorized");
      return;
    }
  
    let idToken;
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer ")
    ) {
      console.log('Found "Authorization" header');
      // Read the ID Token from the Authorization header.
      idToken = req.headers.authorization.split("Bearer ")[1];
    } else if (req.cookies) {
      console.log('Found "__session" cookie');
      // Read the ID Token from cookie.
      idToken = req.cookies.__session;
    } else {
      // No cookie
      res.status(403).send("Unauthorized");
      return;
    }
  
    try {
      const decodedIdToken = await admin.auth().verifyIdToken(idToken);
      console.log("ID Token correctly decoded", decodedIdToken);
      req.user = decodedIdToken;
      next();
      return;
    } catch (error) {
      console.error("Error while verifying Firebase ID token:", error);
      res.status(403).send("Unauthorized");
      return;
    }
  };
app.use(validateFirebaseIdToken);

//#region Endpoins Privados

exports.app = functions.https.onRequest(app);

//#region Endpoins Publicos

 // Registro de Usuario
appPublic.post("/registro", async (req, res) => {
  const { nombre, correo, contraseña } = req.body;

  // Validar la entrada
  if (!nombre || !correo || !contraseña) {
    return res.status(400).send("Faltan datos obligatorios");
  }

  // Crear el usuario en Firebase
  try {
    
    const userCredential = await createUserWithEmailAndPassword(auth, correo, contraseña);
    const docRef = await firestore
      .collection("users")
      .doc(userCredential.user.uid)
      .set({
        nombre: nombre,
        correo: correo,
      });

    // Enviar respuesta de éxito
    res.status(201).send({ message: "Usuario registrado correctamente", status: true, token: userCredential.user.accessToken });

  } catch (error) {
    // Manejar errores de Firebase
    console.error("Error al registrar usuario:", error);
    res.status(400).send({ message: "Error al registrar usuario", status: false });
  }
});

// Login de Usuario
appPublic.post("/login", async (req, res) => {
  const { correo, contraseña } = req.body;

  // Validate input
  if (!correo || !contraseña) {
    return res.status(400).send({ message: "Faltan datos obligatorios (correo y contraseña)", status: false });
  }

  try {
    // Sign in user with email and password
    const userCredential = await signInWithEmailAndPassword(auth, correo, contraseña);
  
    // You can send additional information like user ID or a custom token in the response
    res.status(200).send({ message: "Usuario autenticado correctamente", status: true, token: userCredential.user.accessToken });
  } catch (error) {
    console.error("Error al iniciar sesión:", error);
    res.status(401).send({ message: "Correo o contraseña incorrecta", status: false}); // Adjust error message as needed
  }
});

exports.appPublic = functions.https.onRequest(appPublic);