import React from "react";

const Projects = () => {
  document.title = "Projects";
  return (
    <div className="Text1">
      You can see three of my projects below - click on the project image to
      view the website and click on the github logo to see view the code. My
      plan is to turn Leyendo into a real side project so stay tuned!
      <br></br>
      <br></br>
      <div className="footer"></div>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://cocky-easley-edf596.netlify.app/"
      >
        <img
          className="projectImage"
          src="/Leyendo_v2.png"
          alt=""
          width="715"
          height="382"
        />
      </a>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/danroche10/Leyendo_v2_client"
      >
        <img src="/GitHub-Mark-64px.png" alt="" width="50" height="50" />
      </a>
      <span></span> Client
      <br></br>
      <br></br>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/danroche10/Leyendo_v2_server"
      >
        <img src="/GitHub-Mark-64px.png" alt="" width="50" height="50" />
      </a>
      <span></span> Server
      <br></br>
      <br></br>
      <b>Overview</b>
      <br></br>
      <br></br>
      <ul>
        <li>
          This is <b>version 2</b> of my side project, Leyendo. Leyendo aims to
          provide readers with access to the best writing across the internet.
          Authenticated users are able to like and comment on pieces that they
          enjoy.
        </li>
        <li>
          In version 3 I plan to implement user reading lists, increase the
          number of authors/essays, join datbases with GraphQL and improve UX.
        </li>
      </ul>
      <b>Client: </b>React
      <br></br>
      <br></br>
      <b>Server: </b>MongoDB, Node.js, GraphQL, Apollo
      <br></br>
      <br></br>
      <div className="footer"></div>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://goodreads-api-search.herokuapp.com/"
      >
        <img
          className="projectImage"
          src="/goodreads.png"
          alt=""
          width="715"
          height="382"
        />
      </a>
      <br></br>
      <br></br>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/danroche10/goodreads-api-search"
      >
        <img src="/GitHub-Mark-64px.png" alt="" width="50" height="50" />
      </a>
      <br></br>
      <br></br>
      <b>Overview</b>
      <br></br>
      <br></br>
      <ul>
        <li>
          This project consisted of building a front end search functionality
          using the{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.goodreads.com/api"
          >
            Goodreads API
          </a>
          .
        </li>
        <li>
          I accessed two different APIs. The first query used the author name
          searched by the user. The second query used authorID which was found
          in the first API.
        </li>
      </ul>
      <div>
        <b>Client: </b>React
      </div>
      <br></br>
      <br></br>
      <div className="footer"></div>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="http://leyendo.herokuapp.com/"
      >
        <img
          className="projectImage"
          src="/Leyendo.png"
          alt=""
          width="715"
          height="382"
        />
      </a>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/danroche10/leyendo"
      >
        <img src="/GitHub-Mark-64px.png" alt="" width="50" height="50" />
      </a>
      <span></span>
      <br></br>
      <br></br>
      <b>Overview</b>
      <br></br>
      <br></br>
      <ul>
        <li>
          The first version of Leyendo enabled me to build a full stack web
          application for the first time. I built the database from scratch and
          utilised CRUD. I also became familiar with React functional components
          and state management using Hooks. Rather than use Redux I used the
          useContext hook which seems more intuitive.
        </li>
      </ul>
      <b>Client: </b>React
      <br></br>
      <br></br>
      <b>Server: </b>MongoDB, Node.js, Express
      <br></br>
      <br></br>
    </div>
  );
};

export default Projects;
