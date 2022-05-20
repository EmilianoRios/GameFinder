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
  Text,
  Center,
} from "@chakra-ui/react";
// ---- HOOK ----
import { useState } from "react";
import { useAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom";

export function SignUp() {
  const [user, setUser] = useState({
    emailSignUp: "",
    passwordSignUp: "",
  });

  const { signUp } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState();

  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signUp(user.emailSignUp, user.passwordSignUp);
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <Container maxW="container.sm" p="5" rounded="md" borderWidth="1px">
      <Center>
        <Text fontSize="xl">Sign Up</Text>
      </Center>
      {error && (
        <Alert status="error">
          <AlertIcon />
          {error}
        </Alert>
      )}
      <form onSubmit={handleSubmit}>
        <FormControl>
          <FormLabel htmlFor="email">Email address</FormLabel>
          <Input
            id="email"
            type="email"
            name="emailSignUp"
            onChange={handleChange}
          />
          <FormLabel htmlFor="email">Password</FormLabel>
          <Input
            id="emailSignUp"
            type="password"
            name="passwordSignUp"
            onChange={handleChange}
          />
          <Button
            mt={4}
            colorScheme="blue"
            type="submit"
          >
            Register
          </Button>
        </FormControl>
      </form>
    </Container>
  );
}
