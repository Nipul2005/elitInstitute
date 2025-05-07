import React from "react";
function Footer() {
  return (
    <footer className="w-full py-5 bg-black/5 text-center px-5 flex justify-center items-center gap-2 select-none">
        <img src="/eliteicon.png" alt="Elite Computer Institute" className="w-10 h-10 aspect-square" loading="lazy"/>
        <p className="text-sm text-black/80">Copyright &copy; {new Date().getFullYear()} <span className="font-semibold text-primary underline decoration-secondary">Elite Computer Institute</span></p>
    </footer>
  );
}

export default Footer;
