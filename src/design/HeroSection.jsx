import React from 'react'

function HeroSection({text, img, spanText}) {
  return (
    <section className="bg-center bg-cover sm:p-10 p-5" style={{ backgroundImage: `url(${img})` }} >
      <h1 className="md:text-[4rem] sm:text-[3rem] text-3xl text-center flex flex-col px-10 sm:py-30  py-20 text-black bg-white/70 container mx-auto rounded-full">
        {text} <span>{spanText}</span>
        <span className="underline decoration-secondary decoration-2 underline-offset-8 text-primary">
          Elite Computer Institute
        </span>
      </h1>
    </section>
  );
}

export default HeroSection
