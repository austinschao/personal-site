import { Card, CardImg, CardBody, CardTitle } from "reactstrap";
import "./About.css";


function About() {
  return (
    <div>
      <Card>
        <CardImg className="about-image" src="/pic.jpeg"></CardImg>
      </Card>
      <h1>
        Hi! My name is Austin Chao and I am recent graduate of Rithm School, a 16 week immersive full stack coding bootcamp.
      </h1>
    </div>
  );
}

export default About;