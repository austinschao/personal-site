import { Modal, ModalBody, ModalFooter, Card, CardBody, CardTitle, CardText, CardImg, Button } from "reactstrap";
import { useState } from "react";
import "./styles.css";

function PortfolioCard({ src, title, description, url, img }) {
  const [isOpen, setIsOpen] = useState(false);

  function toggle() {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  }

  return (
    <div>
      <Card className="portfolio-card-card">
        <CardBody className="portfolio-card-body">
          <CardTitle>
            <h4>{title}</h4>
          </CardTitle>
          <CardText>
            <em>{description}</em>
          </CardText>
          <CardImg className="portfolio-card-img"
            src={img} />
          <div>
            <Button onClick={toggle} className="portfolio-card-button">
              Demo
            </Button>
            <Button className="portfolio-card-button">
              <a href={url} target="_blank" rel="noreferrer" style={{ textDecorationLine: "none", color: "white" }}>GitHub</a>
            </Button>
            <Modal
              isOpen={isOpen}
              fullscreen="xl"
              size="xl">
              <ModalBody>
                <video width="100%" height="100%" controls>
                  <source src={src} type="video/mp4" />
                </video>
              </ModalBody>
              <ModalFooter>
                <Button onClick={toggle}>
                  End Demo
                </Button>
              </ModalFooter>
            </Modal>
          </div>
        </CardBody>
      </Card>
    </div >
  );
}

export default PortfolioCard;