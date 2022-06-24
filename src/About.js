import { Card, CardImg, CardBody, CardTitle, Container, Row, Col } from "reactstrap";
import "./About.css";


function About() {
  return (
    <div>
      <Container fluid="sm" className="about-container">
        <Row>
          <Col>
            <Card className="about-card">
              <CardImg className="about-image" src="/pic.jpeg"></CardImg>
            </Card>
          </Col>
          <Col>
            <h1 className="about-h1">
              Hi! My name is Austin Chao and I am recent graduate of Rithm School, a 16 week immersive full stack coding bootcamp.
            </h1>

            <div className="about-skills">
              <h2>Skills</h2>
              <h4>JavaScript | Python | React | Node.js | Express | Flask</h4>
              <h4>SQL | Postgres | GraphQL | HTML | CSS | jQuery</h4>
              <h4>Jest | React Testing Library | unittest</h4>
            </div>
          </Col>
        </Row>
      </Container>
    </div >
  );
}

export default About;