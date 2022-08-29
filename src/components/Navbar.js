import {
  Popover,
  Grid,
  GridItem,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody,
  HStack,
  IconButton,
  Text,
  useDisclosure,
  VStack,
  Slide,
  ButtonGroup,
  Box,
  Button,
} from "@chakra-ui/react";
import React from "react";
import { FaBars, FaArrowDown, FaRegHandPointer } from "react-icons/fa";
import {
  IoClose,
  IoPersonOutline,
  IoGridOutline,
  IoHomeOutline,
  IoDocumentTextOutline,
  IoExtensionPuzzleOutline,
  IoBookOutline,
  IoFlaskOutline,
} from "react-icons/io5";
import { BsArrowBarDown } from "react-icons/bs";
import { useColourContext } from "../Contexts/ColourContext";
import { useDataContex } from "../Contexts/DataContext";
import AdminAuth from "./AdminAuth";

const navList = [
  "Home",
  "About",
  "Skills",
  "Experience",
  "Education",
  "Projects",
];
const navIcon = [
  <IoHomeOutline />,
  <IoPersonOutline />,
  <IoDocumentTextOutline />,
  <IoExtensionPuzzleOutline />,
  <IoBookOutline />,
  <IoFlaskOutline />,
];
const themes = [
  "64,113,244",
  "246,99,72",
  "127,112,49",
  "112,95,220",
  "61,67,83",
  "206,121,115",
  "155,124,105",
];
function Slider({ isOpen, onToggle }) {
  const { themeColor, setThemeColor } = useDataContex();

  function handleclick(list) {
    document.location.href = "#" + list;
    onToggle();
  }

  return (
    <Slide direction="bottom" in={isOpen} style={{ zIndex: 10 }}>
      <Box bg={"white"}>
        <Box
          style={{
            background: "rgba(" + themeColor + ", 0.1)",
            transition: "ease-in 0.2s",
          }}
          h={"500px"}
          p={"4"}
          mr={"2"}
        >
          <HStack
            my={"4"}
            p={"4"}
            borderRadius="full"
            justifyContent={"space-around"}
            border={"1px solid rgb(" + themeColor + ")"}
          >
            {themes.map((theme, i) => (
              <IconButton
                key={i}
                size={"sm"}
                bg={"rgb(" + theme + ")"}
                onClick={() => setThemeColor(theme)}
                borderRadius={"50%"}
                _hover={{}}
              />
            ))}
          </HStack>
          <Grid
            templateRows="repeat(2, 1fr)"
            templateColumns="repeat(3, 1fr)"
            gap={5}
          >
            {navList.map((list, i) => (
              <GridItem
                key={i}
                mx={"auto"}
                h={"100px"}
                w={"100px"}
                rowSpan={1}
                colSpan={1}
                color={"rgb(" + themeColor + ")"}
              >
                <VStack
                  h={"100%"}
                  justifyContent={"center"}
                  onClick={(e) => handleclick(list)}
                >
                  <Text mb={"-2"} fontSize={"2xl"}>
                    {navIcon[i]}
                  </Text>
                  <Text h={"20px"} fontSize={"xs"}>
                    {list}
                  </Text>
                </VStack>
              </GridItem>
            ))}
          </Grid>
          <VStack h={"100px"} justifyContent={"center"}>
            <AdminAuth />
          </VStack>
        </Box>
      </Box>
    </Slide>
  );
}

function Navbar() {
  const { themeColor, setThemeColor } = useDataContex();
  const { bgColour } = useColourContext();
  const { isOpen, onToggle } = useDisclosure();

  return (
    <HStack id="About" className="Navbar">
      <Box id="Home">
        <HStack
          h={"70px"}
          w={"100%"}
          bg={"white"}
          position={"fixed"}
          top={{ lg: "0" }}
          bottom={{ base: "0" }}
          zIndex={"999"}
        >
          <HStack
            h={"100%"}
            w={"100%"}
            style={{
              background: "rgba(" + themeColor + ", 0.2)",
              transition: "ease-in 0.2s",
            }}
            py={"3"}
            px={"8"}
          >
            <HStack w={{ lg: "20%", base: "80%" }}>
              <Text fontSize={"lg"} fontWeight={"bold"}>
                POLIN
                <span
                  style={{
                    color: "rgb(" + themeColor + ")",
                    transition: "ease-in 0.2s",
                  }}
                >
                  KHAN
                </span>
              </Text>
            </HStack>
            <HStack
              w={"80%"}
              display={{ lg: "flex", base: "none" }}
              justifyContent={"end"}
            >
              {navList.map((list, i) => (
                <Button
                  fontWeight={"light"}
                  _hover={{ color: "rgb(" + themeColor + ")" }}
                  pl={"12"}
                  variant={"unstyled"}
                  onClick={() => (document.location.href = "#" + list)}
                  key={i}
                >
                  {list}
                </Button>
              ))}
              <Box px={"12"}>
                <Popover>
                  <PopoverTrigger>
                    <IconButton
                      size={"sm"}
                      bg={"rgb(" + themeColor + ")"}
                      borderRadius={"50%"}
                      _hover={{}}
                      color={"white"}
                      icon={<FaRegHandPointer />}
                    />
                  </PopoverTrigger>
                  <PopoverContent>
                    <PopoverArrow />
                    <PopoverCloseButton />
                    <PopoverHeader>Select Theme</PopoverHeader>
                    <PopoverBody>
                      <HStack justifyContent={"space-around"}>
                        {themes.map((theme, i) => (
                          <IconButton
                            key={i}
                            size={"sm"}
                            bg={"rgb(" + theme + ")"}
                            onClick={() => setThemeColor(theme)}
                            borderRadius={"50%"}
                            _hover={{}}
                          />
                        ))}
                      </HStack>
                    </PopoverBody>
                  </PopoverContent>
                </Popover>
              </Box>
              <AdminAuth />
            </HStack>
            <HStack
              display={{ lg: "none", base: "flex" }}
              justifyContent={"end"}
              w={"20%"}
              onClick={onToggle}
            >
              <Text fontSize={"xl"} color={"rgb(" + themeColor + ")"}>
                {isOpen ? <IoClose /> : <IoGridOutline />}
              </Text>
            </HStack>
          </HStack>
        </HStack>
      </Box>

      <Slider isOpen={isOpen} onToggle={onToggle} />
    </HStack>
  );
}

export default Navbar;
