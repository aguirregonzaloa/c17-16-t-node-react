import React from "react";
import Banner from "../Banner/Banner";
import About from "../About/About";
import ImgDog from "../../assets/img/Dog1.png";
import ImgCat from "../../assets/img/Cat1.png";
import Functioning from "../Functioning/Functioning";
import TopCaregivers from "../TopCaregivers/TopCaregivers";
import RatesHome from "../RatesHome/RatesHome";
import Review from "../Review/Review";


export default function Home() {
  return (
    <main id="home">
      <Banner />
      <About
        iconAnimal={ImgDog}
        text="Somos el intermediario que se encarga de reunirte con el mejor cuidado para tu mascota."
        title="Nuestros Servicios"
        order={1}
        textButton="Más de nosotros"
      />
      <About
        iconAnimal={ImgCat}
        text="Todos nuestros paseadores tienen un certificado de cuidador."
        title="Certificado de cuidador"
        order={2}
        textButton="Más sobre esto"
      />
      <Functioning />
      <TopCaregivers />
      <RatesHome/>
      <Functioning />
      <Review/>
    </main>
  );
}
