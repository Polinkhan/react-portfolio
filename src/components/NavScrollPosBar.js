import { useEffect, useState } from "react";
import { Progress, Stack } from "@chakra-ui/react";
import React from "react";

function NavScrollPosBar() {
  const max = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const min = 0;
  const [scrollPos, SetScrollPos] = useState(0);

  function handleScroll() {
    const val = (window.scrollY - min) / (max - min);
    const pos = (val * 100);
    SetScrollPos(pos);
  }

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);
    return () => document.removeEventListener("scroll", handleScroll);
  }, [scrollPos]);

  useEffect(() => {}, []);

  return (
    <Stack w={"100%"} className="prog" position={"fixed"} top={"70px"}>
      <Progress borderRadius={"full"} value={scrollPos} size="xs" colorScheme="pink" />;
    </Stack>
  );
}

export default NavScrollPosBar;
