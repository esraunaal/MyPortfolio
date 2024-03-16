import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
         
            <p className="home-about-body">
            In my software development journey,
            <br/> I've found success in creating front-end designs using <strong className="plum">React.</strong>
            <br/> My experiences in internships and jobs show this clearly.
            <br/> I also have a keen interest in <strong className="plum">Data Science,</strong>
            <br/> which has led me to work on personal projects. 
            <br/> On this website, you can explore the technologies I use and the projects I've been involved in.
            </p>  
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
