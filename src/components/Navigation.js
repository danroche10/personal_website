import React from "react";
import { Link } from "react-router-dom";
import { Row } from "react-bootstrap";

const Navigation = () => {
  return (
    <Row className="hello">
      <ul className="nav nav-pills pull-right">
        <li className="try">
          <Link to="/">About</Link>
        </li>
        <li>
          <Link to="/Projects">Projects</Link>
        </li>
        <li>
          <Link to="/Contact">Contact</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
      </ul>
    </Row>
  );
};

export default Navigation;

/*
  <ul className="nav nav-pills pull-left">
        <li className="hidey">
          <Link to="/">DR</Link>
        </li>
      </ul>


      */
