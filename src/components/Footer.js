import {
  Box,
  Divider,
  HStack,
  Link,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";
import { useColourContext } from "../Contexts/ColourContext";

function Footer() {
  const { bgColour } = useColourContext();

  return (
    <VStack bg={bgColour} px="20">
      <HStack w={"100%"} py={"8"}>
        <VStack w={"30%"}>
          <Text py={"8"} fontSize={"2xl"} fontWeight={"bold"}>
            Portfolio
          </Text>
          <Box fontSize={"xs"} fontWeight={"bold"}>
            <Link px={"2"}>Privacy</Link>
            <Link px={"2"}>Policy</Link>
          </Box>
        </VStack>
        <Spacer />
        <HStack fontSize={"2xl"} w={"40%"} justifyContent={"center"}>
          <Link
            color={"#4267B2"}
            p={"1"}
            border={"1px solid gray"}
            borderRadius="50%"
          >
            <FaFacebook />
          </Link>
          <Link
            p={"1"}
            color={"#00acee"}
            border={"1px solid gray"}
            borderRadius="50%"
          >
            <FaTwitter />
          </Link>
          <Link p={"1"} border={"1px solid gray"} borderRadius="50%">
            <FaInstagram />
          </Link>
          <Link
            p={"1"}
            color={"#171515"}
            border={"1px solid gray"}
            borderRadius="50%"
          >
            <FaGithub />
          </Link>
        </HStack>
      </HStack>
      <Divider />
      <HStack fontSize={"sm"} fontWeight={"bold"} color={"gray"} p={"8"}>
        <Text>Copyright 2022. All Right Reserved.</Text>
      </HStack>
    </VStack>
  );
}

export default Footer;
