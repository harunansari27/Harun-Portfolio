import React from "react";
import {
  FaInstagram,
  FaXTwitter,
  FaLinkedin,
  FaGithub,
  FaYoutube,
  FaTelegram,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="w-full py-6 bg-black text-white flex flex-col items-center gap-4">
      <div className="flex gap-6">
        <a
          href="https://www.instagram.com/codetogethers/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram size={24} />
        </a>
        <a
          href="https://x.com/harunansaru051"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
        >
          <FaXTwitter size={24} />
        </a>
        <a
          href="https://www.linkedin.com/in/harun-/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin size={24} />
        </a>
        <a
          href="https://github.com/harunansari27"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub size={24} />
        </a>
        <a
          href="https://youtube.com/@CodeTogethers"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="YouTube"
        >
          <FaYoutube size={24} />
        </a>
    
      </div>
      <p className="text-sm text-gray-400">
        © {new Date().getFullYear()} Harun Ansari. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
