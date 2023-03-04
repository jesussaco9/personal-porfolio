import React from 'react';

import {
  Button,
  Container,
  IconButton,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react';
import { Link } from 'react-scroll';

import { HiArrowDown } from 'react-icons/hi';

const Home = () => {
  return (
    <section id='home'>
      <Container maxW={'3xl'}>
        <SimpleGrid
          pt={{ base: '2rem', md: '12rem', lg: '12rem' }}
          pb={{ base: '2rem', md: '12rem', lg: '12rem' }}
          columns={2}
          spacing={{ base: 5, md: 20, lg: 20 }}
          minChildWidth='240px'
        >
          <Stack>
            <Image
              borderRadius='full'
              src='/profile-photo.jpg'
              alt='Jesús Sánchez Profile Photo'
            />
          </Stack>
          <Stack direction='column'>
            <Text fontSize='4xl' w={260} as='b' alignSelf='center'>
              Jesús Sánchez
            </Text>
            <Text textAlign='justify'>
              Mi nombre es Jesús Sánchez, un ingeniero de sistemas de Costa
              Rica. Me gustan los deportes, la música, la lectura y pasar tiempo
              con mi familia.
            </Text>
            <Stack alignItems='center' pt={10}>
              <Link
                to='projects'
                activeClass='active'
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
              >
                <Button> Proyectos </Button>
              </Link>
            </Stack>
          </Stack>
        </SimpleGrid>
        <Stack alignItems='center'>
          <IconButton aria-label='Down to about'>
            <Link
              to='about'
              activeClass='active'
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
            >
              <HiArrowDown size={35} />
            </Link>
          </IconButton>
        </Stack>
      </Container>
    </section>
  );
};

export default Home;
