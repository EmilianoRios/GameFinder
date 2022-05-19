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
  Center,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { DarkModeSwitch } from "./darkModeSwitcher";

// ---- HOOKS ----
import { useAuth } from "../../context/authContext";

// ---- REACT ROUTER ----
import { Link } from "react-router-dom";

export const NavBar = () => {
  const { user, logOut } = useAuth();

  const handleLogout = async () => {
    try {
      await logOut();
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <>
      <Flex minWidth="max-content" alignItems="center" gap="2" padding="2">
        <Box p="2">
          <Link to={"/"}>
            <Heading size="md">GameFinder</Heading>
          </Link>
        </Box>
        <Spacer />
        <ButtonGroup gap="2">
          {!user ? (
            <>
              <Link to={"/signIn"}>
                <Button colorScheme="blue">Log In</Button>
              </Link>
              <Link to={"/signUp"}>
                <Button colorScheme="blue">Sign Up</Button>
              </Link>
            </>
          ) : (
            <>
              <Button colorScheme="blue" onClick={handleLogout}>
                Log Out
              </Button>
            </>
          )}
        </ButtonGroup>
        <DarkModeSwitch></DarkModeSwitch>
      </Flex>
      {user && (
        <Center bg="cyan.900" w="100%" p={1} rounded="md">
          ¡Welcome {user.email}!
        </Center>
      )}
    </>
  );
};
