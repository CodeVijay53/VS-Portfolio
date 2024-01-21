import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Vijay Shankar </span>
            from <span className="purple"> Chennai, India.</span>
            <br />
            I am an Engineer with Web development in MERN stack Web development.
            <br />
            I have completed Full Stack Web Development Bootcamp in GUVI, India
            and learning each day also devveloping application on my own.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> 3D Modelling
            </li>

            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>
                        <p style={{ color: "rgb(155 126 172)" }}>
            "Failure will never overtake me if my definition to succeed is strong enough"{" "}
          </p>
          <footer className="blockquote-footer">A.P.J Abdul kalam
</footer>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Disrupt the industry with inexperience!"{" "}
          </p>
          <footer className="blockquote-footer">Vijay Shankar</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
