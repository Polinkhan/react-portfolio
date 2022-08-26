import { VStack, Text } from "@chakra-ui/react";
import TabList from "./TabList";
import React from "react";
import { useColourContext } from "../Contexts/ColourContext";

const education = [
  {
    title: "Stamford University Bangladesh",
    platform: "Bachalor Of Science (Cse)",
    gpa: "CGPA : 3.75 (Approx)",
    time: "January 2019 To Present",
  },
  {
    title: "Dr. Mahbubur Rahman Mollah Collage, Dhaka",
    platform: "Higher School Certificate(Hsc)",
    gpa: "GPA : 4.83",
    time: "2016 - 2018",
  },
  {
    title: "Mohiuddin Badal Collegiate School, Dhaka",
    platform: "Secondary School Certificate(Ssc)",
    gpa: "GPA: 4.94",
    time: "2005 - 2016",
  },
];

function Education() {

const { bgColour } = useColourContext();


  return (
    <VStack id="Education" paddingTop={"80px"}>
      <Text marginBottom={"80px"} fontSize={"4xl"}>
      Education
      </Text>
      <VStack bg={bgColour} w={"100%"}>
        {education.map((tab, i) => (
          <TabList key={i} tab={tab} align={(i + 1) % 2} />
        ))}
      </VStack>
    </VStack>
  );
}

export default Education;
