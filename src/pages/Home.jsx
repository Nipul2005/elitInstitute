import React from "react";
import { Helmet } from "react-helmet-async";
import Header from "../components/Header";
import { Link } from "react-router-dom";

function Home() {
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

      <main className="w-full h-full">
        <div className="bg-[url(/1.jpeg)] bg-center bg-cover sm:p-10 p-5"> 
          <h1 className="md:text-[5rem] sm:text-[3rem] text-3xl text-center flex flex-col p-10 py-30 text-black bg-white/60 container mx-auto rounded-full">
            Unlock Your Learning Potential <span>Today! With</span>
            <span className="underline decoration-secondary decoration-2 underline-offset-8 text-primary">Elite Computer Institute</span>
          </h1>
        </div>
      </main>
    </>
  );
}

export default Home;
