import {
  Flex,
  Text,
  Box,
  Divider,
  Center,
  Image,
  Heading,
  Grid,
  Button,
  Container,
  Link,
  Spinner,
} from "@chakra-ui/react";

import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import * as API from "../../src/services/freeGames";

export function Game() {
  const [game, setGame] = useState(null);

  const { gameId } = useParams();

  useEffect(() => {
    API.getFreeGameById(gameId).then(setGame).catch(console.log);
  }, [gameId]);

  return (
    <>
      {game ? (
        <Flex
          direction={{
            base: "column",
            sm: "column",
            md: "row",
            lg: "row",
            xl: "row",
          }}
          pt={1}
          rounded="md"
          borderWidth="1px"
          textAlign="justify"
          key={game.id}
        >
          <Box maxW={{ sm: "auto", md: "auto", lg: "40%", xl: "40%" }} p={2}>
            <Container>
              <Center>
                <Image src={game.thumbnail} alt={game.title} pb={2} />
              </Center>
              <Center>
                <Link href={game.game_url} isExternal>
                  <Button colorScheme="blue" w="330px">
                    Play
                  </Button>
                </Link>
              </Center>
            </Container>
          </Box>
          <Box maxW={{ sm: "auto", md: "auto", lg: "60%", xl: "70%" }} p={2}>
            <Heading as="h1" size="lg">
              {game.title}
            </Heading>
            <Heading as="h4" size="md" mt={3} mb={3}>
              About {game.title}
            </Heading>
            <Divider />
            <Text mt={3}>{game.description}</Text>
            <Heading as="h4" size="md" mt={3} mb={3}>
              More Info
            </Heading>
            <Divider />
            <Grid templateColumns="repeat(3, 1fr)" gap={6} mt={3}>
              <Box>
                <Heading as="h6" size="xs">
                  Title:
                </Heading>
                <Text>{game.title}</Text>
              </Box>
              <Box>
                <Heading as="h6" size="xs">
                  Developer:
                </Heading>
                <Text>{game.developer}</Text>
              </Box>
              <Box>
                <Heading as="h6" size="xs">
                  Publisher:
                </Heading>
                <Text>{game.publisher}</Text>
              </Box>
              <Box>
                <Heading as="h6" size="xs">
                  Release Date:
                </Heading>
                <Text>{game.release_date}</Text>
              </Box>
              <Box>
                <Heading as="h6" size="xs">
                  Genre:
                </Heading>
                <Text>{game.genre}</Text>
              </Box>
              <Box>
                <Heading as="h6" size="xs">
                  Platform:
                </Heading>
                <Text>{game.platform}</Text>
              </Box>
            </Grid>
            <Heading as="h4" size="md" mt={3} mb={3}>
              Screenshots
            </Heading>
            <Divider />
            <Grid templateColumns="repeat(2, 1fr)" gap={6} mt={3}>
              {game?.screenshots?.map((img) => (
                <Image key={img.id} src={img.image} alt={img}/>
              ))}
            </Grid>
          </Box>
        </Flex>
      ) : (
        <Center>
          <Spinner size="lg" />
        </Center>
      )}
    </>
  );
};
