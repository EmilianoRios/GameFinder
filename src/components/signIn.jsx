import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Button,
  Container,
  Alert,
  AlertIcon,
  Center,
  Text,
} from "@chakra-ui/react";
// ---- HOOK ----
import { useState } from "react";
import { useAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom";

export function SignIn() {
  const [user, setUser] = useState({
    emailSignIn: "",
    passwordSignIn: "",
  });

  const { signIn } = useAuth();

  const navigate = useNavigate();
  const [error, setError] = useState();

  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signIn(user.emailSignIn, user.passwordSignIn);
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <Container maxW="container.sm" p="5" rounded="md" borderWidth="1px">
      <Center>
        <Text fontSize="xl">Log In</Text>
      </Center>
      {error && (
        <Alert status="error" p="2">
          <AlertIcon />
          {error}
        </Alert>
      )}
      <form onSubmit={handleSubmit}>
        <FormControl>
          <FormLabel htmlFor="email">Email address</FormLabel>
          <Input
            id="emailSignIn"
            type="email"
            name="emailSignIn"
            onChange={handleChange}
          />
          <FormLabel htmlFor="email">Password</FormLabel>
          <Input
            id="passwordSignIn"
            type="password"
            name="passwordSignIn"
            onChange={handleChange}
          />
          <Button mt={4} colorScheme="blue" type="submit">
            Log In
          </Button>
        </FormControl>
      </form>
    </Container>
  );
}
