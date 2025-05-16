import React from "react";

function SocialIcons() {
  return (
    <span className="flex gap-2 place-self-end ">
      <i className="ri-linkedin-line w-8 h-8 border border-white/20 flex justify-center items-center text-md hover:border-white transition-all ease cursor-pointer duration-200 hover:rounded-sm" title="Linkedin"></i>
      <a
        href="https://www.facebook.com/ElitecomputerinstituteMadhuVihar/"
        target="_blank"
        title="Facebook"
      >
        <i className="ri-facebook-line w-8 h-8 border border-white/20 flex justify-center items-center text-md hover:border-white transition-all ease cursor-pointer duration-200 hover:rounded-sm"></i>
      </a> 
      <a href="https://www.instagram.com/elite_institute/" target="_blank" title="Instagram">
        <i className="ri-instagram-line w-8 h-8 border border-white/20 flex justify-center items-center text-md hover:border-white transition-all ease cursor-pointer duration-200 hover:rounded-sm"></i>
      </a>
    </span>
  );
}

export default SocialIcons;
