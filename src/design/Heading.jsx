import React from 'react'

function Heading({text}) {
  return (
    <h2 className="sm:text-4xl text-3xl mb-5 text-white bg-gradient-to-r from-65% from-primary to-white p-2 pl-4 sm:container sm:mx-auto">
      {text}
    </h2>
  );
}

export default Heading
