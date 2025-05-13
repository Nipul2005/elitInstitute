import React, { use, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import Cards from "../components/Cards";
import EnquiryForm from "../components/EnquiryForm";
import CourseCards from "../components/CourseCards";
import { modulerJSON } from "../JSON/courseJSON";
import HeroSection from "../design/HeroSection";
import Heading from "../design/Heading";
import Feature from "../components/Feature";

function Home() {
  const [indx, setIndx] = useState(0);
  const maxIndx = modulerJSON.length - 1 - 5;

  function right() {
    if (indx < maxIndx) {
      setIndx((prev) => prev + 1);
    }
  }

  function left() {
    if (indx > 0) {
      setIndx((prev) => prev - 1);
    }
  }

  return (
    <>
      <Helmet>
        <title>Elite Computer Institute | Best IT Courses in Delhi</title>
        <meta
          name="description"
          content="Join Elite Computer Institute for expert-led training in Web Development, MS Office, and more."
        />
        <meta property="og:title" content="Elite Computer Institute" />
        <meta property="og:description" content="Best IT Courses in Delhi." />
        <meta property="og:image" content="/og-image.jpg" />
        <meta property="og:url" content="https://www.elitecomputers.in/" />
        <meta name="twitter:card" content="summary_large_image" />
        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              "name": "Elite Computer Institute",
              "url": "https://www.elitecomputers.in",
              "logo": "https://www.elitecomputers.in/logo.png",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "123 Main Road",
                "addressLocality": "Delhi",
                "addressRegion": "Delhi",
                "postalCode": "110001",
                "addressCountry": "IN"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-9876543210",
                "contactType": "Customer Service"
              }
            }
          `}
        </script>
      </Helmet>

      <HeroSection
        img={"/1.jpeg"}
        text={"Unlock Your Learning Potential"}
        spanText={"Today! With"}
      />
      <section className="w-full sm:py-18 py-7 px-4 sm:container sm:mx-auto flex flex-col justify-center items-center">
        <p className="sm:text-center sm:max-w-2/3 sm:leading-10 sm:text-2xl text-lg">
          At{" "}
          <span className="underline decoration-secondary decoration-1 underline-offset-2 text-primary">
            {" "}
            Elite Computer Institute
          </span>
          , we provide comprehensive computer training to help you succeed in
          today’s digital world. Join our courses and transform your career.
        </p>
        <EnquiryForm />
      </section>
      <section className="w-full sm:pb-18 sm:py-0 pb-7 sm:container sm:mx-auto flex flex-col lg:flex-row">
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
            <Heading text="Our Mission and Team" />
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
              , we are dedicated to delivering exceptional computer training
              that empowers students with essential skills for their careers.
              Established in 2010, we uphold values of excellence, integrity,
              and innovation in education.
            </p>
          </div>
          <Cards />
        </div>
      </section>
      <section className="w-full h-auto sm:py-18 py-7 sm:mx-auto bg-black/5 relative px-4">
        <Heading text="Our Courses" />
        <CourseCards indx={indx} />
        {indx !== 0 && (
          <i
            className="ri-arrow-left-double-fill absolute top-1/2 left-16 transform -translate-y-1/2 bg-white w-8 h-8 sm:flex justify-center items-center rounded-full cursor-pointer hidden"
            onClick={() => left()}
          ></i>
        )}

        {indx < modulerJSON.length - maxIndx - 3 && (
          <i
            className="ri-arrow-right-double-fill absolute top-1/2 right-15 transform -translate-y-1/2 bg-white w-8 h-8 sm:flex justify-center items-center rounded-full cursor-pointer hidden"
            onClick={() => right()}
          ></i>
        )}
      </section>
      <Feature />
      <div
        className="elfsight-app-8828fcc1-9b3c-4ea7-9961-9fc3401e4152 w-full bg-black/5 sm:py-18 py-7 sm:mx-auto px-4"
        data-elfsight-app-lazy
      ></div>
    </>
  );
}

export default Home;
