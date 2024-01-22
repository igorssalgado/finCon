import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Button, useColorMode } from "@chakra-ui/react";
import React from "react";

const ToogleColorMode = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Button onClick={toggleColorMode} position={"absolute"} right={5}>
      {colorMode === "light" ? (
        <MoonIcon color={"blue.700"}></MoonIcon>
      ) : (
        <SunIcon color={"yellow.400"}></SunIcon>
      )}
    </Button>
  );
};

export default ToogleColorMode;
