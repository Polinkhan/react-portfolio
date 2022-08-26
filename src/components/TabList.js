import React from "react";
import { VStack, Box, Text } from "@chakra-ui/react";



function TabList({ tab, align }) {
  return (
    <VStack py={"4"} w={"100%"} alignItems={align ? "start" : "end"}>
      <Box
        w={{lg:"55%",md:"60%",base:"70%"}}
        p={"8"}
        textAlign={align ? "end" : "start"}
        style={
          align ? { borderRight: "1px Dotted" } : { borderLeft: "1px Dotted" }
        }
      >
        <Text w={"100%"} pb={"2"} fontWeight={"bold"} fontSize={"md"}>
          {tab.title}
        </Text>
        <Text w={"100%"}>{tab.platform}</Text>
        <Text w={"100%"}>{tab.gpa}</Text>
        <Text py={"4"} w={"100%"} color={"gray"} fontSize={"sm"}>
          {tab.time}
        </Text>
      </Box>
    </VStack>
  );
}

export default TabList;
