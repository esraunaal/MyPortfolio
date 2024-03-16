import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
      <Col md="2" className="footer-copywright">
          <h3>Copyright © {year} EU</h3>
        </Col>
        <Col md="7" className="footer-copywright">
        </Col>
        <Col md="3" className="footer-copywright">
          <h3>Designed and Developed by Esra Ünal</h3>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
