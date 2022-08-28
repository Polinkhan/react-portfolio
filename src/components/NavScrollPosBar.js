import { useEffect, useState } from "react";
import { Box, Progress, Stack } from "@chakra-ui/react";
import React from "react";
import { useDataContex } from "../Contexts/DataContext";

function NavScrollPosBar() {
  const max = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const [scrollPos, SetScrollPos] = useState(0);
  const { themeColor } = useDataContex();

  function handleScroll() {
    const val = window.scrollY / max;
    const pos = val * 100;
    SetScrollPos(pos);
  }

  useEffect(() => {
    console.log("j");
    document.addEventListener("scroll", handleScroll);
    return () => document.removeEventListener("scroll", handleScroll);
  }, [scrollPos]);

  return (
    <Stack w={"100%"} className="prog" position={"fixed"} top={{ lg: "70px" }} bottom={{ base: "70px" }}>
      {/* <Progress borderRadius={"full"} value={scrollPos} size="xs" colorScheme={"red"} />; */}
      <Box h={"4px"} w={"100%"} bg={"#edf2f7"}>
        <Box h={"100%"} w={scrollPos + "%"} borderRadius={"full"} bg={"rgb(" + themeColor + ")"}></Box>
      </Box>
    </Stack>
  );
}

export default NavScrollPosBar;
