import React from "react";
import { Link } from "react-router-dom";

const Blog = () => {
  document.title = "Blog";
  return (
    <div className="Text1">
      I thought I’d start a blog to practice my writing and explore some topics
      that interest me. If anyone finds it useful then that’s a bonus. You can
      also find my blog on<span> </span>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://danroche.substack.com/"
      >
        substack.
      </a>
      <br></br>
      <br></br>
      <ul>
        <li>
          <Link to="/establishment">
            How Technology is Changing The Establishment
          </Link>
        </li>
        <br></br>
        <li>
          <Link to="/mayweather">Business Lessons from Floyd Mayweather</Link>
        </li>
        <br></br>
        <li>
          <Link to="/meaning">The Meaning of Meaning</Link>
        </li>
      </ul>
    </div>
  );
};

export default Blog;
