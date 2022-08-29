import { Box, Button, HStack, IconButton, Link, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { useColourContext } from "../Contexts/ColourContext";
import { useDataContex } from "../Contexts/DataContext";
import { FaArrowRight, FaMouse, FaArrowDown } from "react-icons/fa";
import { BsMouse, BsArrowDown, BsFacebook, BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";

function BlobBox() {
  const { themeColor } = useDataContex();
  return (
    <HStack maxW={"400px"} w={{ md: "40%", base: "80%" }} h={{ md: "100%", base: "40%" }} justifyContent={"center"}>
      <svg className="blobBox" style={{ fill: "rgb(" + themeColor + ")", transition: "ease-in 0.2s" }} viewBox="0 0 200 187" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
        <mask id="mask0" mask-type="alpha">
          <path
            d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 
        130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 
        97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 
        0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
          />
        </mask>
        <g mask="url(#mask0)">
          <path
            d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 
        165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 
        129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 
        -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
          />
          <image className="blobImg" x={"12"} y={"18"} href="./profile-pic.png" />
        </g>
      </svg>
    </HStack>
  );
}

function IconBox() {
  const { themeColor } = useDataContex();

  return (
    <Box w={{ md: "15%", base: "0%" }}>
      <VStack display={{ md: "flex", base: "none" }} style={{ color: "rgb(" + themeColor + ")", transition: "ease-in 0.2s" }} justifyContent={"center"}>
        <IconButton h={"50px"} fontSize={"2xl"} variant={"unstyled"} icon={<BsFacebook />}></IconButton>
        <IconButton h={"50px"} fontSize={"2xl"} variant={"unstyled"} icon={<BsGithub />}></IconButton>
        <IconButton h={"50px"} fontSize={"2xl"} variant={"unstyled"} icon={<BsInstagram />}></IconButton>
        <IconButton h={"50px"} fontSize={"2xl"} variant={"unstyled"} icon={<BsLinkedin />}></IconButton>s
      </VStack>
    </Box>
  );
}

function TextBox() {
  const { themeColor } = useDataContex();
  const gray_fontColor = "#818084";

  return (
    <VStack h={{ md: "100%", base: "40%" }} w={{ md: "45%", base: "100%" }} justifyContent="center">
      <VStack h={{ md: "65%", base: "100%" }} justifyContent="center" alignItems={"left"}>
        <Text fontWeight={"bold"} fontSize={{ lg: "6xl", md: "5xl", base: "4xl" }}>
          Hi, I'm <span style={{ color: "rgb(" + themeColor + ")", transition: "ease-in 0.2s" }}> Polin</span>
        </Text>
        <Text fontWeight={"bold"} color={gray_fontColor} fontSize={{ lg: "3xl", md: "2xl", base: "xl" }}>
          Software Engineer
        </Text>
        <Text pt={"2"} w={"90%"} textAlign={"justify"} color={gray_fontColor}>
          {" "}
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo aliquid, quae, delectus illo, ipsam maxime vero totam.
        </Text>
      </VStack>
    </VStack>
  );
}

function BtnBox() {
  const { themeColor } = useDataContex();

  return (
    <VStack justifyContent={"space-between"} w={{ lg: "70%" }} h={"15vh"} mx={"auto"} alignItems={"start"}>
      <Button rightIcon={<FaArrowRight />} _hover={""} bg={"rgb(" + themeColor + ")"} color={"whiteAlpha.900"} variant="solid" borderRadius={"full"}>
        Contact Me
      </Button>
      <HStack w={"max-content"} h={"10%"} cursor={"pointer"} >
        <Text fontSize={"2xl"}>
          <BsMouse style={{ color: "rgb(" + themeColor + ")", transition: "ease-in 0.2s" }} />
        </Text>
        <Text> Scroll Down</Text>
        <Text>
          <BsArrowDown style={{ color: "rgb(" + themeColor + ")", transition: "ease-in 0.2s" }} />
        </Text>
      </HStack>
    </VStack>
  );
}

function About() {
  return (
    <Box h={"90vh"}>
      <HStack mt={{ md: "200px", base: "0px" }} w={"100%"} h={{ md: "50vh", base: "70vh" }} flexDirection={{ base: "column", md: "row" }}>
        <IconBox />
        <TextBox />
        <BlobBox />
      </HStack>
      <BtnBox />
    </Box>
  );
}

export default About;
