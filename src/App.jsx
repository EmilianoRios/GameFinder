// ---- COMPONENTS ----
import { NavBar } from "./components/navbar/navbar";
import { FreeGames } from "./components/freeGames";
import { SignUp } from "./components/signUp";
import { SignIn } from "./components/signIn";
import { Game } from "./components/game";

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
        <AuthProvider>
          <>
            <NavBar />
          </>
          <Routes>
            <Route path="/" element={<FreeGames />} />
            <Route path="/signUp" element={<SignUp />} />
            <Route path="/signIn" element={<SignIn />} />
            <Route path="/game/:gameId" element={<Game />} />
          </Routes>
        </AuthProvider>
      </Container>
    </>
  );
}
