import React from "react";
import { useState, useEffect } from 'react';
import * as API from '../../services/freeGames';

// ---- CHAKRA ----
import { LinkBox, Text, Heading, LinkOverlay, Image, SimpleGrid } from '@chakra-ui/react';

const FreeGames = () => {
    const [ freeGames , setFreeGames ] = useState([]);

    useEffect(() => {
      API.getAllFreeGames().then(setFreeGames);
    },[]);

    return(
        <SimpleGrid columns={{sm: 1, md: 3,lg: 5}} gap={3} bg="blackAlpha.900">
        {freeGames.map(game => (
            <LinkBox as='article' maxW='lg' p='5' rounded='md' bg="blackAlpha.500" textColor="gray.50">
            <Image src={game.thumbnail} alt={game.title} />
            <Heading size='md' my='2'>
              <LinkOverlay href='#'>
                {game.title}
              </LinkOverlay>
            </Heading>
            <Text>
              {game.short_description}
            </Text>
          </LinkBox>
          ))};
      </SimpleGrid>
    );
}

export default FreeGames;