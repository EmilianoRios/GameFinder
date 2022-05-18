import React from "react";
import { useState, useEffect } from 'react';
import * as API from '../../src/services/freeGames';

// ---- CHAKRA ----
import { LinkBox, Text, Heading, LinkOverlay, Image, SimpleGrid, Container } from '@chakra-ui/react';

export const FreeGames = () => {
    const [ freeGames , setFreeGames ] = useState([]);

    useEffect(() => {
      API.getAllFreeGames().then(setFreeGames);
    },[]);

    return(
    <SimpleGrid 
      columns={{sm: 1, md: 3,lg: 4}} 
      gap={3}
    >
      {freeGames.map(game => (
        <LinkBox 
          as='article' 
          maxW='lg' 
          p='5' 
          rounded='md' 
          borderWidth='1px'
        >
        <Image 
          src={game.thumbnail} 
          alt={game.title} 
        />
        <Heading 
          size='md' 
          my='2'
        >
          <LinkOverlay 
            href='#'
          >
            {game.title}
          </LinkOverlay>
          </Heading>
          <Text>
            {game.short_description}
          </Text>
        </LinkBox>
      ))}
    </SimpleGrid>
    );
};