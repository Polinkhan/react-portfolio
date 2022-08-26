import {
  Button,
  FormControl,
  HStack,
  Input,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { useColourContext } from "../Contexts/ColourContext";

function Contact() {
  const { bgColour } = useColourContext();

  return (
    <VStack id="Contacts" paddingY={"80px"}>
      <Text paddingBottom={"80px"} fontSize={"4xl"}>
        Contact
      </Text>
      <HStack
        w={"100%"}
        bg={bgColour}
        flexDirection={{ md: "row", base: "column" }}
        p={"4"}
      >
        <VStack my={"8"} w={{ md: "40%" }}>
          <Text fontSize={"2xl"}>Feel Free To Contact</Text>
          <Text>Fill The Form To Start Conversation</Text>
        </VStack>
        <FormControl
          w={{ md: "60%" }}
          borderLeft={{ base: "none", md: "1px dotted" }}
          borderTop={{ base: "1px dotted", md: "none" }}
          py={"8"}
          textAlign={"center"}
        >
          <VStack spacing={"4"}>
            <Input
              type={"text"}
              w={"80%"}
              bg={"white"}
              placeholder={"Your Name"}
            />
            <Input
              type={"text"}
              w={"80%"}
              bg={"white"}
              placeholder={"Your Email"}
            />
            <Textarea
              type={"text"}
              w={"80%"}
              bg={"white"}
              placeholder={"Your Message"}
            ></Textarea>
            <Button colorScheme="teal" variant="outline">
              Submit
            </Button>
          </VStack>
        </FormControl>
      </HStack>
    </VStack>
  );
}

export default Contact;
