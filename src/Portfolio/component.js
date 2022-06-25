import PortfolioCard from "./PortfolioCard/component";
import { Container, Row, Col } from "reactstrap";
import "./styles.css";

function Portfolio() {
  const projects = [
    {
      src: "/videos/productiv.mp4",
      title: "Prøductïv",
      description: "Prøductïv is a frontend application that allows users to stay organized and create a list of todos based on priority.",
      url: "https://github.com/austinschao/react-productiv",
      img: "/images/productiv.png"
    },
    {
      src: "/videos/jobly.mp4",
      title: "Jobly",
      description: "Jobly is a full stack application that allows users to find their dream company and their job openings.",
      url: "https://github.com/austinschao/react-jobly",
      img: "/images/jobly.png"

    },
    {
      src: "/videos/warbler.mp4",
      title: "Warbler",
      description: "Warbler is a full stack application that allows users to follow other users, post messages about their day, and like other posts.",
      url: "https://github.com/austinschao/warbler",
      img: "/images/warbler.png"

    },
    {
      src: "",
      title: "Friender",
      description: "Friender is a full stack application that allows users to find a potential friend. Users will have the ability to match with each other and send private messages (work in progress).",
      url: "https://github.com/austinschao/friender-frontend",
      img: "/images/friender.png"
    }
  ];

  return (
    <div>
      <Container fluid className="portfolio-container">
        <Row xs="2">
          {projects.map((project, i) => (
            <Col key={i}>
              <PortfolioCard
                key={i}
                src={project.src}
                title={project.title}
                description={project.description}
                img={project.img}
              />
            </Col>
          ))}
        </Row>
      </Container>

    </div>
  );
};

export default Portfolio;