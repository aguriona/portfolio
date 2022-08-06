import React from "react";
import CardWork from "../components/cards/CardWork";
import Skills from "./Skills";
import 'animate.css';

export default function Work() {
  return (
    
    <div className="bg-bglight min-h-screen sm:pt-10 md:pt-20 lg:pt-20 xl:pt-20">
      <div className="max-w-screen-2xl mx-auto">
      <div className="font-paragraph text-colortitle font-bold pl-9 lg:pt-8 md:pt-8 pt-8 sm:pt-12 text-3xl">
        <h1 className="text-center animate__animated animate__fadeInLeft">My Recent Projects</h1>
      </div>
      <CardWork />
      <Skills />
      </div>
    </div>
  );
}
