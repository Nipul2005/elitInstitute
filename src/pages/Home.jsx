import React from "react";
import { Helmet } from "react-helmet-async";

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
          <h1 className="md:text-[4rem] sm:text-[3rem] text-3xl text-center flex flex-col px-10 sm:py-30  py-20 text-black bg-white/60 container mx-auto rounded-full">
            Unlock Your Learning Potential <span>Today! With</span>
            <span className="underline decoration-secondary decoration-2 underline-offset-8 text-primary">
              Elite Computer Institute
            </span>
          </h1>
        </div>
        <div className="w-full sm:py-20 py-7 sm:px-0 px-4 sm:container sm:mx-auto flex flex-col justify-center items-center">
          <p className="sm:text-center sm:max-w-2/3 sm:leading-10 sm:text-2xl text-lg">
            At{" "}
            <span className="underline decoration-secondary decoration-1 underline-offset-2 text-primary">
              {" "}
              Elite Computer Institute
            </span>
            , we provide comprehensive computer training to help you succeed in
            today’s digital world. Join our courses and transform your career.
          </p>
          <form className="w-full flex flex-col sm:flex-row gap-4 sm:mt-10 mt-5 justify-center items-center">
            <input
              type="text"
              placeholder="Enter your Mobile Number"
              className="border border-gray-300 px-4 py-2 rounded-full sm:w-2/6 outline-primary transition duration-200 ease-in-out focus:border-primary w-full"
            />
            <button className="bg-primary text-white px-6 py-2 rounded-full cursor-pointer">
              Enquiry Now
            </button>
          </form>
        </div>
      </main>
    </>
  );
}

export default Home;
