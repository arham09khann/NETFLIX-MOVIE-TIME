import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
const handleClick = () => {
  window.location.href = "https://www.linkedin.com/in/arham09/";
};
const Footer = () => {
  return (
    <div className="bg-black p-8 text-center text-white">
      <h1 className="">Made with 💗 - Mohd Arham Khan (c)</h1>
      <h1 className="cursor-pointer m-4" onClick={handleClick}>
        Contact me : <LinkedInIcon />
      </h1>
    </div>
  );
};

export default Footer;
