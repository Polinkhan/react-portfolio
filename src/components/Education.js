import { VStack, Text, IconButton, useDisclosure } from "@chakra-ui/react";
import TabList from "./TabList";
import React from "react";
import ModalView from "./ModalView";
import { IoAddCircle } from "react-icons/io5";
import { useDataContex } from "../Contexts/DataContext";
import { useColourContext } from "../Contexts/ColourContext";

function Education() {
  const { bgColour } = useColourContext();
  const { isPassBool, educationData, setEducationData } = useDataContex();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <VStack id="Education" paddingTop={"80px"}>
      <Text marginBottom={"80px"} fontSize={"4xl"}>
        Education
      </Text>
      <VStack bg={bgColour} w={"100%"}>
        <VStack w={"100%"}>
          {educationData.map((tab, i) => (
            <TabList key={i} tab={tab} align={(i + 1) % 2} />
          ))}
        </VStack>
        <VStack display={isPassBool ? "flex" : "none"} className="skillBox" w="160px" h="140px" justifyContent="space-around" marginTop={"80px"}>
          <IconButton onClick={onOpen} fontSize={"8xl"} color="gray.400" icon={<IoAddCircle />} w="100px" h="100px" bg={"gray.300"} borderRadius="50%"></IconButton>
        </VStack>
      </VStack>
      <ModalView isOpen={isOpen} onClose={onClose} title={"Add Education Item"} items={["title", "platform", "gpa", "time"]} data={educationData} setData={setEducationData} />
    </VStack>
  );
}

export default Education;
