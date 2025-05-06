import React from 'react'

function EnquiryForm() {
  return (
    <form className="w-full flex flex-col sm:flex-row gap-4 sm:mt-10 mt-5 justify-center items-center">
      <div className="lg:w-2/6 md:w-3/6 w-full border border-gray-300 rounded-full flex justify-between items-center p-1">
        <input
          type="text"
          placeholder="Enter your Mobile Number"
          className="flex-1 outline-none transition duration-200 ease-in-out px-3"
        />
        <button className="bg-primary text-white px-6 py-2 rounded-full cursor-pointer">
          Enquiry Now
        </button>
      </div>
    </form>
  );
}

export default EnquiryForm
