import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>
        Coded by{" "}
        <a
          href="https://github.com/savi-creates"
          target="_blank"
          rel="noopener noreferrer"
        >
          Savannah Andresson
        </a>{" "}
        and{" "}
        <a
          href="https://github.com/savi-creates/login-signup-form"
          target="_blank"
          rel="noopener noreferrer"
        >
          is open-sourced on GitHub
        </a>
        .
      </p>
    </footer>
  );
};

export default Footer;
