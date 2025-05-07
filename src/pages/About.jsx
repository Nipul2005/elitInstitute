import React from "react";
import { Helmet } from "react-helmet-async";
import HeroSection from "../design/HeroSection";

function About() {
  return <>
  <Helmet><title>Elite Computer Institute | About</title></Helmet>
  <HeroSection text={"Know more about"} img={"/about.webp"} spanText={"The"}/>
  </>;
}

export default About;
