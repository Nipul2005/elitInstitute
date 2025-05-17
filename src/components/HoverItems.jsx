import React, { useState } from "react";

function HoverItems() {
  const [show, setShow] = useState(false);
  return (
    <div
      className="fixed top-1/2 bg-primary z-20 p-2 text-white flex justify-start items-center gap-x-3 rounded-tl-full rounded-bl-full hover:right-0 transition-all duration-300 ease-in-out cursor-pointer"
      onClick={() => setShow((prev) => !prev)}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      style={{ right: show ? "0px" : "-6.25rem" }}
    >
      <i className="ri-arrow-left-double-line text-xl border-r w-6 h-6 flex justify-center items-center pr-2"></i>
      <a href="tel:9205470224" title="call us">
        <i className="ri-phone-line text-xl"></i>
      </a>
      <a href="mailto:pnipul7678@gmail.com" title="email us">
        <i className="ri-mail-line text-xl"></i>
      </a>
      <a
        href="https://wa.me/9205470224"
        target="_blank"
        title="chat on Whatsapp"
      >
        <i className="ri-whatsapp-line text-xl"></i>
      </a>
      
    </div>
  );
}

export default HoverItems;
