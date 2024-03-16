import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/working2.png";
import Tilt from "react-parallax-tilt";
import { ImPointRight } from "react-icons/im";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            {/* <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="plum"> INTRODUCE </span> MYSELF
            </h1> */}
              <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Who <strong className="plum">Am I</strong>
            </h1>
             <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="plum">Esra Ünal </span>
            <br />
            I graduated Electrical and Electronics Engineering at Istanbul University.
            <br />
            While evaluating <span className="plum">new opportunities, </span>
            <br/>I am working on personal projects focused on increasing my knowledge in <span className="plum">Data Science and Software Development.</span>
            <br />
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight className="plum"/> Analog camera and photography
            </li>
            <li className="about-activity">
              <ImPointRight className="plum"/> Writing Agenda and Dairy
            </li>
            <li className="about-activity">
              <ImPointRight className="plum"/> Cooking
            </li>
          </ul>
        </blockquote>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="plum">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/esraunaal"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              {/* <li className="social-icons">
                <a
                  href="https://twitter.com/Soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li> */}
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/esraunaal/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/esraunaal/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
