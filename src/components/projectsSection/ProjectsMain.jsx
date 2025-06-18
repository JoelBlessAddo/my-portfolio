import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const projects = [
  {
    name: "Food Bank UI/UX",
    year: "June2025",
    align: "right",
    image: "../../public/images/website-img-1.jpg",
    link: "https://www.figma.com/design/hbx7bRtEWqoGQgRvWn4dHc/Food-Bank-project-1?node-id=0-1&t=cD9H4hqQB7bxyuax-1",
  },
  {
    name: "Moola App",
    year: "Sept2022",
    align: "left",
    image: "../../public/images/website-img-2.webp",
    link: "#",
  },
  {
    name: "Tourzania",
    year: "Jan2023",
    align: "right",
    image: "../../public/images/website-img-3.jpg",
    link: "#",
  },
  {
    name: "Bank of Luck",
    year: "May2024",
    align: "left",
    image: "../../public/images/website-img-4.jpg",
    link: "#",
  },
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => {
          return (
            <SingleProject
              key={index}
              name={project.name}
              year={project.year}
              align={project.align}
              image={project.image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;
