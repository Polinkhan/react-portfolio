import {
  Box,
  Button,
  HStack,
  Image,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { useColourContext } from "../Contexts/ColourContext";

function About() {
  const { bgColour } = useColourContext();

  return (
    <VStack id="" bg={bgColour} mt={"250px"} w={"100%"} h={"500px"}>
      <Box
        marginTop={{ lg: "-120px", md: "-105px", base: "-90px" }}
        width={{ lg: "240px", md: "210px", base: "180px" }}
        border={"8px"}
        borderRadius={"50%"}
        borderColor="white"
      >
        <Image src="./profile-pic.jpg" borderRadius={"50%"}/>
      </Box>
      <Box py={"5"}>
        <Text fontSize={{ lg: "5xl", md: "4xl", base: "3xl" }}>
          ABU SAYED POLIN
        </Text>
      </Box>
      <Box w={"90%"}>
        <Text fontSize={{ lg: "4xl", md: "3xl", base: "2xl" }}>
          Software Engineer
        </Text>
        <Text fontSize={{ lg: "3xl", md: "2xl", base: "xl" }}>
          Dhaka, Bangladesh
        </Text>
        <Text
          h={{ lg: "20px", base: "80px" }}
          lineHeight={"2"}
          mt={"5"}
          fontSize={"sm"}
          color={"gray"}
        >
          Lorem, Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Ipsum, Enim.
          Doloribus Laudantium Quaerat Fuga. Repellat?
        </Text>
      </Box>

      <HStack pt={"8"} justifyContent={"center"}>
        <Button mx={"2"} colorScheme="teal">
          <Link href="#Contacts">Get In touch</Link>
        </Button>
        <Button mx={"2"} colorScheme="teal" variant={"outline"}>
          Download CV
        </Button>
      </HStack>
    </VStack>
  );
}

export default About;
