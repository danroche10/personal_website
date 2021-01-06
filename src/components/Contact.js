import React from "react";

const Contact = () => {
  document.title = "Contact";
  return (
    <div className="Text1">
      Click on the icons to connect or send an e-mail to
      danielroche10@gmail.com!
      <br></br>
      <br></br>{" "}
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/danroche10"
      >
        <img
          className="contactImage"
          src="/GitHub-Mark-64px.png"
          alt=""
          width="50"
          height="50"
        />
      </a>{" "}
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://twitter.com/DanRoche01"
      >
        <img
          className="contactImage"
          src="/twitter.png"
          alt=""
          width="50"
          height="50"
        />
      </a>{" "}
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.linkedin.com/in/dan-roche-3765214a/"
      >
        <img
          className="contactImage"
          src="/linkedin.png"
          alt=""
          width="50"
          height="50"
        />
      </a>{" "}
      <br></br>
      <br></br>
    </div>
  );
};

export default Contact;
