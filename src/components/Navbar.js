import {
  Button,
  HStack,
  IconButton,
  Text,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  useDisclosure,
  DrawerCloseButton,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { FaBars } from "react-icons/fa";

function Navbar() {
  const fontColour = "#242424";

  const { isOpen, onOpen, onClose } = useDisclosure();
  const navList = ["About", "Skills", "Experience", "Education"];

  return (
    <HStack p={"4"} bg="aliceblue">
      <HStack w={{ lg: "30%", base: "80%" }}>
        <Text fontSize={"4xl"}>POLINKHAN</Text>
      </HStack>

      <HStack
        w={"45%"}
        display={{ lg: "flex", base: "none" }}
        color={fontColour}
        justifyContent={"space-around"}
      >
        {navList.map((list,i) => (
          <Text cursor={"pointer"} key={i}>{list}</Text>
        ))}
      </HStack>
      <HStack
        w={"25%"}
        display={{ lg: "flex", base: "none" }}
        justifyContent={"center"}
      >
        <Button
          variant={"outline"}
          border={"2px"}
          borderRadius="full"
          borderColor={"gray"}
        >
          Contact us
        </Button>
      </HStack>
      <HStack display={{lg:"none",base:"flex"}} justifyContent={"end"} w={"20%"}>
        <IconButton colorScheme={"teal"} variant={"outline"} onClick={onOpen} icon={<FaBars />}></IconButton>
      </HStack>
      <Drawer placement={"top"} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />{" "}
          <DrawerBody textAlign={"center"}>
            <VStack>
              {navList.map((list,i) => (
                <Text key={i} py={"4"}>{list}</Text>
              ))}
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </HStack>
  );
}

export default Navbar;
