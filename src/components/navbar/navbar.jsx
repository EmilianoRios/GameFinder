import React from "react";
import {
  Flex,
  Button,
  Box,
  Heading,
  ButtonGroup,
  Spacer,
  Container,
  Switch,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { DarkModeSwitch } from "./darkModeSwitcher";

// ---- REACT ROUTER ----
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <Flex minWidth="max-content" alignItems="center" gap="2" padding="2">
      <Box p="2">
        <Link to={"/"}>
          <Heading size="md">GameFinder</Heading>
        </Link>
      </Box>
      <Spacer />
      <ButtonGroup gap="2">
        <Link to={"/signUp"}>
          <Button colorScheme="blue">Sign Up</Button>
        </Link>
        <Link to={"/signIn"}>
          <Button colorScheme="blue">Log in</Button>
        </Link>
      </ButtonGroup>
      <DarkModeSwitch></DarkModeSwitch>
    </Flex>
  );
};
