import React from 'react'
import { Link } from 'react-router-dom';

function Logo() {
  return (
    <Link to="/">
      <img
        src="/eliteLogo.png"
        alt="Elite Computer Institute"
        className="sm:w-54 w-40"
        loading="lazy"
        title="Elite Computer Institute"
      />
    </Link>
  );
}

export default Logo
