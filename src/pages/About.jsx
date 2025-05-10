import React from "react";
import { Helmet } from "react-helmet-async";
import HeroSection from "../design/HeroSection";
import Heading from "../design/Heading";
import Cards from "../components/Cards";

function About() {
  return (
    <>
      <Helmet>
        <title>Elite Computer Institute | About</title>
      </Helmet>
      <HeroSection
        text={"Know more about"}
        img={"/about.webp"}
        spanText={"The"}
      />
      <section className="w-full sm:py-18 py-7 sm:container sm:mx-auto flex flex-col lg:flex-row">
        <div className="flex-1">
          <img
            src="/intro_img.webp"
            alt="Mr. Arun Giri"
            className="w-full h-full sm:rounded-lg"
            loading="lazy"
            title="Mr. Arun Giri"
          />
        </div>
        <div className="w-full h-full flex-1 lg:p-4 sm:p-0 sm:pt-4 pt-6 px-4">
          <div className="w-full space-y-5">
            <Heading text="Our Mission and Vision" />
            <p className="text-lg text-black">
              At{" "}
              <span
                className="underline
              decoration-secondary
              decoration-1
              underline-offset-2
              text-primary"
              >
                Elite Computer Institute
              </span>
              , our mission is to empower individuals through high-quality,
              accessible, and practical computer education. Since our inception
              in 2010, we have been committed to bridging the gap between
              traditional education and the rapidly evolving demands of the
              digital world. We aim to nurture a generation of skilled
              professionals who are not only technically proficient but also
              confident, creative, and prepared for real-world challenges. We
              believe in learning by doing, which is why our training programs
              focus on hands-on experiences, industry-relevant projects, and
              personalized guidance from expert instructors. Our goal is to
              ensure every student gains the confidence and competence required
              to succeed in today’s technology-driven job market. Our vision is
              to become a leading institution in IT education, recognized for
              innovation, quality, and a student-centered approach. We strive to
              create an inclusive learning environment that encourages
              curiosity, fosters lifelong learning, and supports career
              development across all age groups and backgrounds. At Elite
              Computer Institute, we uphold the values of excellence, integrity,
              and innovation. These core principles guide our curriculum, our
              faculty, and our interactions with every learner. We are not just
              building skills—we are building futures.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
