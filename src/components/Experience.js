import { Text, VStack, IconButton, useDisclosure } from "@chakra-ui/react";
import TabList from "./TabList";
import React from "react";
import { useColourContext } from "../Contexts/ColourContext";
import { IoAddCircle } from "react-icons/io5";
import ModalView from "./ModalView";
import { useDataContex } from "../Contexts/DataContext";

function Experience() {
  const { bgColour } = useColourContext();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isPassBool, experienceData, setExperienceData } = useDataContex();

  return (
    <VStack id="Experience" paddingTop={"80px"}>
      <Text marginBottom={"80px"} fontSize={"4xl"}>
        Experience
      </Text>
      <VStack bg={bgColour} w={"100%"}>
        <VStack w={"100%"}>
          {experienceData.map((tab, i) => (
            <TabList key={i} tab={tab} align={(i + 1) % 2} />
          ))}
        </VStack>
        <VStack display={isPassBool ? "flex" : "none"} className="skillBox" w="160px" h="140px" justifyContent="space-around" marginTop={"80px"}>
          <IconButton onClick={onOpen} fontSize={"8xl"} color="gray.400" icon={<IoAddCircle />} w="100px" h="100px" bg={"gray.300"} borderRadius="50%"></IconButton>
        </VStack>
      </VStack>
      <ModalView isOpen={isOpen} onClose={onClose} title={"Add Experience Item"} items={["title", "platform", "time"]} data={experienceData} setData={setExperienceData} />
    </VStack>
  );
}

export default Experience;
