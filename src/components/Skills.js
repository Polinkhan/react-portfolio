import React from "react";
import { useDisclosure, Wrap, WrapItem, Text, VStack, Image, IconButton } from "@chakra-ui/react";
import { IoAddCircle } from "react-icons/io5";
import { useColourContext } from "../Contexts/ColourContext";
import { useDataContex } from "../Contexts/DataContext";
import ModalView from "./ModalView";
function Skills() {
  const { bgColour } = useColourContext();
  const { isPassBool,themeColor, skillsData, setSkillsData } = useDataContex();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <VStack paddingTop={"80px"} id={"Skills"}>
      <Text fontWeight={"bold"} fontSize={"4xl"}>
        Skills
      </Text>
      <Wrap spacingX={{ md: "12", base: "6" }} justify={"center"}>
        {skillsData.map((skill, i) => (
          <WrapItem key={i}>
            <VStack className="skillBox" w="160px" h="140px" justifyContent="space-around" style={{background: "rgba("+themeColor+", 0.1)",transition:"ease-in 0.2s"}} borderRadius="lg" marginTop={"80px"}>
              <Image className="skill_logo" mt={"-30px"} w="100px" p={"2"} bg={"white"} borderRadius={"lg"} src={skill.src} />
              <Text className="skill_text" textAlign={"center"} borderRadius={"full"} w={"100px"} bg={"white"} color={"gray"} fontWeight={"bold"}>
                {skill.name}
              </Text>
            </VStack>
          </WrapItem>
        ))}
        <WrapItem>
          <VStack display={isPassBool?"flex":"none"} className="skillBox" w="160px" h="140px" justifyContent="space-around" marginTop={"80px"}>
            <IconButton onClick={onOpen} fontSize={"8xl"} color="gray.400" icon={<IoAddCircle />} w="100px" h="100px" bg={bgColour} borderRadius="50%"></IconButton>
          </VStack>
        </WrapItem>
        <ModalView isOpen={isOpen} onClose={onClose} title={"Add Skill Item"} items={["name", "src"]} data={skillsData} setData={setSkillsData} />
      </Wrap>
    </VStack>
  );
}

export default Skills;
