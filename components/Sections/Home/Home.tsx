import { Box, Container, Image, SimpleGrid, Stack, Text } from '@chakra-ui/react';
import React from 'react';

import Profile from '../../../assets/profile-photo.jpg';

const Home = () => {
  return (
    <section id='home'>
      <Container>
        <SimpleGrid pt={{ base: "2rem", md: "12rem", lg: "12rem" }} columns={2} spacing={5} minChildWidth='240px'>
        <Stack>
            <Image
              borderRadius='full'
              src='/profile-photo.jpg'
              alt='Jesús Sánchez Profile Photo'
            />
          </Stack>
          <Stack direction='column'>
            <Text fontSize='4xl' w={250} alignSelf='center'>Jesús Sánchez</Text>
            <Text textAlign='justify'>
              Mi nombre es Jesús Sánchez, un ingeniero de sistemas de Costa Rica. Me gustan los deportes, la música, la lectura y pasar tiempo con mi familia.
            </Text>
          </Stack>
        </SimpleGrid>
      </Container>
    </section>
  );
};

export default Home;
