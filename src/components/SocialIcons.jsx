import React from "react";

function SocialIcons() {
  return (
    <span className="flex gap-2 place-self-end ">
      <i className="ri-linkedin-line w-8 h-8 border border-white/60 flex justify-center items-center text-sm hover:border-white transition-all duration-200 ease-in-out cursor-pointer rounded-full hover:border-2"></i>
      <i className="ri-facebook-line w-8 h-8 border border-white/60 flex justify-center items-center text-sm hover:border-white transition-all duration-200 ease-in-out cursor-pointer rounded-full hover:border-2"></i>
      <i className="ri-instagram-line w-8 h-8 border border-white/60 flex justify-center items-center text-sm hover:border-white transition-all duration-200 ease-in-out cursor-pointer rounded-full hover:border-2"></i>
    </span>
  );
}

export default SocialIcons;
