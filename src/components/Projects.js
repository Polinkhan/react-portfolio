import React from "react";
import { useDisclosure, Wrap, WrapItem, IconButton, Text, VStack, Image, Box, Badge, Link } from "@chakra-ui/react";
import { useDataContex } from "../Contexts/DataContext";
import { IoAddCircle } from "react-icons/io5";
import { useColourContext } from "../Contexts/ColourContext";
import ModalView from "./ModalView";

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
  const { projectsData, setProjectsData } = useDataContex();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { bgColour } = useColourContext();

  return (
    <VStack pt={"80px"} id={"Projects"}>
      <Text pb={"80px"} fontSize={"4xl"}>
        Projects
      </Text>
      <Wrap spacing={{ md: "12", base: "6" }} justify={"center"}>
        {projectsData.map((project, i) => (
          <Card key={i} project={project} />
        ))}
      </Wrap>
      <VStack className="skillBox" w="160px" h="140px" justifyContent="space-around" marginTop={"80px"}>
        <IconButton onClick={onOpen} fontSize={"8xl"} color="gray.400" icon={<IoAddCircle />} w="100px" h="100px" bg={bgColour} borderRadius="50%"></IconButton>
      </VStack>
      <ModalView isOpen={isOpen} onClose={onClose} title={"Add Project Item"} items={["imageUrl", "update", "title", "link", "using"]} data={projectsData} setData={setProjectsData} />
    </VStack>
  );
}

export default Projects;
