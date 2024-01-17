import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import ticketing from "../../Assets/Projects/ticketing.PNG";
import designaut from "../../Assets/Projects/designaut.PNG";
import dashboard from "../../Assets/Projects/dashboard.PNG";
import hubs from "../../Assets/Projects/hubs.PNG";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ticketing}
              isBlog={false}
              title="Query Ticketing"
              description=" Ticketing system for query resolving build on React.js and Node.js"
              ghLink="https://github.com/CodeVijay53/query-app-frontend"
              demoLink="https://stupendous-phoenix-e12632.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={designaut}
              isBlog={false}
              title="Design Automation"
              description="The Autodesk design automation build on Forge, Node.js"
              ghLink="https://github.com/CodeVijay53/APS-Design-Automation"
              demoLink="https://aps-design-automation.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dashboard}
              isBlog={false}
              title="APS Dashboard"
              description="The Autodesk dashboard build on Forge, Node.js"
              ghLink="https://github.com/CodeVijay53/APS-Dashboard"
              demoLink="https://aps-dashboard.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hubs}
              isBlog={false}
              title="APS Hubs"
              description="The Autodesk Hubs build on Forge, Node.js'"
              ghLink="https://github.com/CodeVijay53/APS-Hubs-Browser"
              demoLink="https://aps-hubs-browser.onrender.com/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
