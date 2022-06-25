import { Card, CardImg, Button } from "reactstrap";
import "./styles.css";

function Resume() {
  return (
    <div>
      <Card className="resume-card">
        <Button href="./images/resume.pdf">
          Download
        </Button>
        <CardImg
          alt="resume"
          src="./images/resume.jpg"
        />
      </Card>
    </div>
  );
}

export default Resume;