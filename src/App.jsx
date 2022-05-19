import { NavBar } from './components/navbar/navbar';
import { FreeGames } from './components/freeGames';

// ---- CHAKRAUI ----

import { Container } from '@chakra-ui/react';

export function App() {
  return(
    <>
    <Container maxW="container.xl">
      <NavBar/>
      <FreeGames/>
    </Container>
    </>
  );
}
