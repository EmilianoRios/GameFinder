import React from "react";
import { useState, useEffect } from "react";
import * as API from "../../src/services/freeGames";

// ---- CHAKRA ----
import {
  LinkBox,
  Text,
  Heading,
  LinkOverlay,
  Image,
  SimpleGrid,
  Badge,
  Flex,
  Center,
  Spinner,
} from "@chakra-ui/react";

// ---- REACT ROUTES ----
import { Link as ReactRouter } from "react-router-dom";

// ---- HOOKS ----

export const FreeGames = () => {
  const [freeGames, setFreeGames] = useState(null);

  useEffect(() => {
    API.getAllFreeGames().then(setFreeGames).catch(console.log);
  }, []);

  // TODO Hacer filtros de busqueda y un buscador
  return (
    <>
      {freeGames ? (
        <SimpleGrid columns={{ sm: 1, md: 3, lg: 4 }} gap={2} m={1}>
          {freeGames.map((game) => (
            <LinkBox
              as="article"
              maxW="lg"
              p="5"
              rounded="md"
              borderWidth="1px"
              key={game.id}
            >
              <Image src={game.thumbnail} alt={game.title} />
              <Heading size="md" my="2">
                <LinkOverlay as={ReactRouter} to={`/game/${game.id}`}>
                  {game.title}
                </LinkOverlay>
              </Heading>
              <Text noOfLines={2}>{game.short_description}</Text>
              <Flex float="right">
                <Badge borderRadius="lg" px={2} mt={2} colorScheme="teal">
                  {game.genre}
                </Badge>
              </Flex>
            </LinkBox>
          ))}
        </SimpleGrid>
      ) : (
        <Center>
          <Spinner size="lg" />
        </Center>
      )}
    </>
  );
};
