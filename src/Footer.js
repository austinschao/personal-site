import { Container, Row, Col, CardFooter, Card } from "reactstrap";
import "./Footer.css";
function Footer() {
  return (
    <Container className="footer-container">
      <CardFooter className="footer-card-footer">
        <Row xs="3">
          <Col>
            <a href="mailto:austinschao@gmail.com" target="_blank" rel="noreferrer"><i className="fa-solid fa-envelope footer-email"></i></a>
          </Col>
          <Col>
            <a href="https://www.linkedin.com/in/austinschao/" target="_blank" rel="noreferrer"><i className="fa-brands fa-linkedin footer-linkedin"></i></a>
          </Col>
          <Col>
            <a href="https://github.com/austinschao" target="_blank" rel="noreferrer"><i className="fa-brands fa-github footer-github"></i></a>
          </Col>
        </Row>
      </CardFooter>
    </Container >
  );
};

export default Footer;