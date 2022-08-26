import { Text, VStack } from "@chakra-ui/react";
import TabList from "./TabList";
import React from "react";
import { useColourContext } from "../Contexts/ColourContext";

const experience = [
  {
    title: "Stamford University Bangladesh",
    platform: "(Student)",
    time: "January 2019 To Present",
  },
  {
    title: "Web Development",
    platform: "(Self)",
    time: "January 2022 To Present",
  },
  {
    title: "Problem Solving [C++ , Java]",
    platform: "(Hackerrank)",
    time: "January 2020 To Present",
  },
];

function Experience() {
  const { bgColour } = useColourContext();

  return (
    <VStack id="Experience" paddingTop={"80px"}>
      <Text marginBottom={"80px"} fontSize={"4xl"}>
        Experience
      </Text>
      <VStack bg={bgColour} w={"100%"}>
        {experience.map((tab, i) => (
          <TabList key={i} tab={tab} align={(i + 1) % 2} />
        ))}
      </VStack>
    </VStack>
  );
}

export default Experience;
