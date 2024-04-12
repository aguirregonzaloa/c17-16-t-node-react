import React from "react";
import Banner from "../Banner/Banner";
import InfoSection from "../InfoSection/InfoSection";
import ImgDog from "../../assets/img/Dog1.png";
import ImgCat from "../../assets/img/Cat1.png";

export default function Home() {
  return (
    <>
      <Banner />
      <InfoSection
        iconAnimal={ImgDog}
        text="Somos el intermediario que se encarga de reunirte con el mejor cuidado para tu mascota."
        title="Nuestros Servicios"
        order={1}
        textButton="Más de nosotros"
      />
      <InfoSection
        iconAnimal={ImgCat}
        text="Todos nuestros paseadores tienen un certificado de cuidador."
        title="Certificado de cuidador"
        order={2}
        textButton="Más sobre esto"
      />
    </>
  );
}
