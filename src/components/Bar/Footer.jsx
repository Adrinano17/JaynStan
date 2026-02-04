import React from "react";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-base-200 border-t border-base-content/10 py-4">
      <div className="mx-auto max-w-7xl flex justify-between items-center text-sm text-base-content/70 px-4">
        <div className="flex gap-6">
          <Link to={"/"} className="block h-full">
            JayStan Espire Enclave
          </Link>
        </div>
        <div>
          <p> © {new Date().getFullYear()}. All rights reserved.</p>
        </div>
        <div className="flex gap-4">
          <Link to={"/privacy"} className="block h-full">
            Privacy
          </Link>
          <Link to={"/terms"} className="block h-full">
            Terms
          </Link>
          <Link to={"/contact"} className="block h-full">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
