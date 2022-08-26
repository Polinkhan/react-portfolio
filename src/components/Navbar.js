import {
  HStack,
  IconButton,
  Text,
  useDisclosure,
  VStack,
  Slide,
  Link,
} from "@chakra-ui/react";
import React from "react";
import { FaBars } from "react-icons/fa";
import { IoClose, IoSunny, IoMoon } from "react-icons/io5";
import { useColourContext } from "../Contexts/ColourContext";

const navList = ["About", "Skills", "Experience", "Education", "Projects"];

function Slider({ isOpen, onToggle }) {

  const { bgColour } = useColourContext();

  return (
    <Slide direction="top" in={isOpen} style={{ zIndex: 10 }}>
      <VStack
        marginRight={"2"}
        py="40px"
        bg={bgColour}
        mt="16"
        rounded="md"
        shadow="md"
        display={{ lg: "none", base: "flex" }}
      >
        {navList.map((list, i) => (
          <Link
            textAlign={"center"}
            py={"4"}
            href={"#" + list}
            w={"120px"}
            onClick={onToggle}
            key={i}
          >
            {list}
          </Link>
        ))}
      </VStack>
    </Slide>
  );
}

function Navbar() {
  const fontColour = "#242424";
  const { isOpen, onToggle } = useDisclosure();
  const { bgColour, setBgColour } = useColourContext();

  return (
    <HStack id="About" className="Navbar">
      <HStack
        py={"3"}
        px={"8"}
        bg={bgColour}
        w={"100%"}
        position={"fixed"}
        top={"0"}
        zIndex={"999"}
      >
        <HStack w={{ lg: "25%", base: "80%" }}>
          <Text fontSize={"4xl"}>POLINKHAN</Text>
        </HStack>

        <HStack
          w={"50%"}
          display={{ lg: "flex", base: "none" }}
          color={fontColour}
          justifyContent={"center"}
          textAlign={"center"}
        >
          {navList.map((list, i) => (
            <Link href={"#" + list} w={"120px"} key={i}>
              {list}
            </Link>
          ))}
        </HStack>
        <HStack
          w={"25%"}
          display={{ lg: "flex", base: "none" }}
          justifyContent={"end"}
        >
          <IconButton
            variant={"outline"}
            borderRadius="full"
            fontSize={"xl"}
            icon={<IoSunny />}
          >
            Contact us
          </IconButton>
        </HStack>
        <HStack
          display={{ lg: "none", base: "flex" }}
          justifyContent={"end"}
          w={"20%"}
        >
          <IconButton
            fontSize={"lg"}
            icon={isOpen ? <IoClose /> : <FaBars />}
            variant="outline"
            colorScheme={"teal"}
            onClick={onToggle}
          ></IconButton>
        </HStack>
      </HStack>
      <Slider isOpen={isOpen} onToggle={onToggle} />
    </HStack>
  );
}

export default Navbar;
