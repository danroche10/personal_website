import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  document.title = "About";
  return (
    <div className="Text1">
      <img src="/profile.jpg" alt="" width="120" height="139" />
      <br></br>
      <br></br>I am a full stack software developer based in London. I
      previously studied Economics at Bath University and have four years of
      experience in Operations Management.
      <br></br>
      <br></br>
      Check out my
      <Link to="/contact"> contact </Link>
      page if you want to get in touch!
      <br></br>
      <br></br>
      <div className="try">Interests</div>
      <br></br>I try to read a book each week and plan to write about some of
      the best things I've read. You can see the books I have read{" "}
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.goodreads.com/review/list/60295249?shelf=read&sort=date_read"
      >
        here.
      </a>
      <br></br>
      <br></br>
      As of fairly recently, I am a big fan of chess! You can challenge me to a
      game{" "}
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.chess.com/member/danroche10"
      >
        here
      </a>
      ...
      <br></br>
      <br></br>
      Have a read of my <Link to="/blog"> blog </Link> and let me know your
      thoughts!
      <br></br>
      <br></br>
    </div>
  );
};

export default Home;
