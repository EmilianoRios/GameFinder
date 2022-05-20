import {
  ButtonGroup,
  Container,
  IconButton,
  Stack,
  Text,
  Link,
} from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";

export const Footer = () => {
  return (
    <>
      <Container maxW="100%" as="footer" role="contentinfo" py={{ base: "8", md: "10" }}>
        <Stack spacing={{ base: "4", md: "5" }}>
          <Stack justify="end" direction="row" align="center">
            <ButtonGroup variant="ghost">
            <Link href="https://github.com/EmilianoRios" isExternal>
            <IconButton
                aria-label="GitHub"
                icon={<FaGithub fontSize="1.25rem" />}
              />
            </Link>
            </ButtonGroup>
          </Stack>
          <Text fontSize="sm" color="subtle" align="end">
            &copy; {new Date().getFullYear()} Developed By Emiliano Rios.
          </Text>
        </Stack>
      </Container>
    </>
  );
};
