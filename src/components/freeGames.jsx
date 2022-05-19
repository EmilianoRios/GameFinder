import React from "react";
import { useState, useEffect } from "react";
import * as API from "../../src/services/freeGames";

// ---- CHAKRA ----
import {
  LinkBox,
  Text,
  Link,
  Heading,
  LinkOverlay,
  Image,
  SimpleGrid,
  Spinner,
  Container,
} from "@chakra-ui/react";

// ---- REACT ROUTES ----
import { Link as ReactRouter } from "react-router-dom";

export const FreeGames = () => {
  const [freeGames, setFreeGames] = useState([]);

  useEffect(() => {
    API.getAllFreeGames().then(setFreeGames);
  }, []);

  return (
    <>
      <SimpleGrid columns={{ sm: 1, md: 3, lg: 4 }} gap={2}>
        {freeGames.map((game) => (
          <LinkBox as="article" maxW="lg" p="5" rounded="md" borderWidth="1px">
            <Image src={game.thumbnail} alt={game.title}/>
            <Heading size="md" my="2">
              <LinkOverlay as={ReactRouter} to={`/game/${game.id}`}>
                {game.title}
              </LinkOverlay>
            </Heading>
            <Text>{game.short_description}</Text>
          </LinkBox>
        ))}
      </SimpleGrid>
    </>
  );
};
