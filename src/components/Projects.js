import React from "react";
import {
  Wrap,
  WrapItem,
  Text,
  VStack,
  Image,
  Box,
  Badge,
  Link,
} from "@chakra-ui/react";

const projectList = [
  {
    imageUrl: "./Project.png",
    url: "https://polinkhan.github.io/freechat/",
    update: "working on",
    title: "Realtime Chat Application",
    link: "https://github.com/Polinkhan/freechat.git",
    using: "Html, Css, Bootstrap, JavaScript, Jquery, Nodejs(Socket) ",
  },
  {
    imageUrl: "./Project.png",
    url: "https://memo-app-react.herokuapp.com/",
    update: "new",
    title: "Shop Stock Maintenance",
    link: "https://github.com/Polinkhan/freechat.git",
    using: "Html, Css, React, Firebase ",
  },
  {
    imageUrl: "./Project.png",
    update: "new",
    title: "Bangla Licence Plate Detection Using Machine Learning",
    link: "https://github.com/Polinkhan/freechat.git",
    using: "Computer Vision, Python, Machine Learning & Deep learning",
  },
  {
    imageUrl: "./Project.png",
    update: "new",
    title: "Sample Project",
    link: "https://github.com/Polinkhan/",
    using: ".....",
  },
];
function Card({ project }) {
  return (
    <WrapItem paddingTop={"10px"}>
      <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
        <Link href={project.url}>
          <Image src={project.imageUrl} />
        </Link>
        <Box p="6">
          <Box display="flex" alignItems="baseline">
            <Badge borderRadius="full" px="2" colorScheme="teal">
              {project.update}
            </Badge>
          </Box>

          <Box mt="1" fontWeight="semibold" noOfLines={1}>
            {project.title}
          </Box>

          <Box fontSize={"sm"} display={"flex"} noOfLines={1}>
            <Link href={project.link}>{project.link}</Link>
          </Box>

          <Box pt={"2"} fontSize={"xs"} color={"gray"} noOfLines={1}>
            {project.using}
          </Box>
        </Box>
      </Box>
    </WrapItem>
  );
}

function Projects() {
  return (
    <VStack pt={"80px"} id={"Projects"}>
      <Text pb={"80px"} fontSize={"4xl"}>
        Projects
      </Text>
      <Wrap spacing={{ md: "12", base: "6" }} justify={"center"}>
        {projectList.map((project, i) => (
          <Card key={i} project={project} />
        ))}
      </Wrap>
    </VStack>
  );
}

export default Projects;
