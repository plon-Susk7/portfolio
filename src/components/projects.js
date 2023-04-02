import React from "react";
import { Card, Button } from "antd";

const { Meta } = Card;

const Projects = () => {
  const projects = [
    {
      title: "Tank Wars",
      description:
        "I developed a game using the LibGdx framework in Java. The game is inspired by the mechanics of Pocket Tanks, and heavily utilizes the principles of object-oriented programming. Throughout the development process, I applied my knowledge of programming concepts to create a fully functional game. I am proud of this project as it showcases my ability to develop complex software applications using advanced programming techniques.",
      link: "https://github.com/plon-Susk7/TankWars"
    },
    {
      title: "Linux Shell",
      description: "I have created a Linux shell from scratch using the C programming language. The shell includes several internal commands such as pwd, echo, cd, and external commands such as ls, mkdir, date, cat, and rm, all of which were built from the ground up. This project is an excellent demonstration of the use of various Linux system calls, and it showcases my expertise in system programming and low-level software development. I am proud of this project because it was challenging to build, and it required me to have a deep understanding of the Linux operating system and its internals. The Linux shell project is an excellent addition to my portfolio as it highlights my programming skills and knowledge of system programming.",
      link: "https://github.com/plon-Susk7/Linux-Shell"
    },
    {
      title: "MNIST Recognition",
      description: "I developed a handwritten digit recognition model from scratch using neural networks. This project involved implementing a neural network architecture that could accurately classify handwritten digits. I used Python programming language and libraries such as NumPy and Pandas to preprocess the data, build the model, and train it on a dataset of handwritten digits. The project also involved testing the model's accuracy and fine-tuning the parameters to improve its performance. I am proud of this project because it demonstrates my expertise in machine learning and neural networks, and it showcases my ability to design and implement complex algorithms. The handwritten digit recognition model is an excellent addition to my portfolio as it highlights my skills and knowledge in machine learning and artificial intelligence.",
      link: "https://github.com/plon-Susk7/Handwritten-Number-Recognition"
    },
   
  ];

  return (
    <div className="px-96 py-20 text-center">
      <h1 className="heading text-5xl md:text-4xl xl:text-7xl py-10 font-bold text-red-500">Projects</h1>
      <div className="flex flex-wrap justify-center max-w-5xl mx-auto">
        {projects.map((project, index) => (
          <div key={index} className="m-2 w-1/2 md:w-96 flex">
            <Card className="flex-1">
              <Meta
                title={<h2 className="text-4xl m-2">{project.title}</h2>}
                description={project.description}
              />
              <Button type="primary" href={project.link} className="bg-red-500 hover:bg-red-600 m-2">
                Project Link
              </Button>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
