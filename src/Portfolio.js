import PortfolioCard from "./PortfolioCard";

function Portfolio() {
  const projects = [
    {
      src: "/images/productiv.gif",
      title: "Prøductïv",
      description: "Prøductïv is a frontend application that allows users to stay organized and create a list of todos based on priority."
    },
    {
      src: "/images/jobly.gif",
      title: "Jobly",
      description: "Jobly is a full stack application that allows users to find their dream company and their job openings."
    },
    {
      src: "/images/warbler.gif",
      title: "Warbler",
      description: "Warbler is a full stack application that allows users to follow other users, post messages about their day, and like other posts."
    },
    {
      src: "",
      title: "Friender",
      description: "Friender is a full stack application that allows users to find a potential friend. Users will have the ability to match with each other and send private messages (work in progress)."
    }
  ];

  return (
    <div>
      {projects.map((project, i) => (
        <PortfolioCard
          key={i}
          src={project.src}
          title={project.title}
          description={project.description} />
      ))}
    </div>
  );
};

export default Portfolio;