import React from "react";
import { Flex, Button, IconButton, Link, Box, Heading, ButtonGroup, Spacer, Container, Switch } from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { DarkModeSwitch } from "./darkModeSwitcher";

export const NavBar = () => {
    return (
    <Flex minWidth='max-content' alignItems='center' gap='2' padding="2">
        <Box p='2'>
            <Heading size='md'>GameFinder</Heading>
        </Box>
        <Spacer />
        <ButtonGroup gap='2'>
            <Button colorScheme='blue'>Sign Up</Button>
            <Button colorScheme='blue'>Log in</Button>
        </ButtonGroup>
        <DarkModeSwitch>
        </DarkModeSwitch>
    </Flex>
    );
}