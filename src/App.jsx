// ---- COMPONENTS ----
import { NavBar } from "./components/navbar/navbar";
import { FreeGames } from "./components/freeGames";
import { SignUp } from "./components/signUp";

// ---- CONTEXT ----
import { AuthProvider } from "./context/authContext";

// ---- REACT ROUTER ----
import { Routes, Route, Link } from "react-router-dom";

// ---- CHAKRAUI ----
import { Container } from "@chakra-ui/react";

export function App() {
  return (
    <>
      <Container maxW="container.xl">
        <NavBar />
        <AuthProvider>
          <Routes>
            <Route path="/" element={<FreeGames />} />
            <Route path="/signUp" element={<SignUp />} />
          </Routes>
        </AuthProvider>
      </Container>
    </>
  );
}
