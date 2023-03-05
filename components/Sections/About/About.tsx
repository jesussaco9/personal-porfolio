import {
  Container,
  IconButton,
  SimpleGrid,
  Stack,
  Tag,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { HiArrowDown } from 'react-icons/hi';
import { AiOutlineMinus } from 'react-icons/ai';
import { Link } from 'react-scroll';
import { skills } from '../../../global/Seeds';

const About = () => {
  return (
    <section id='about'>
      <Container
        maxW={'3xl'}
        pt={{ base: '2rem', md: '4rem', lg: '4rem' }}
        pb={{ base: '2rem', md: '6rem', lg: '6rem' }}
      >
        <Stack alignItems='center'>
          <Text fontSize='4xl' as='b' alignSelf='center'>
            Sobre mí
          </Text>
          <AiOutlineMinus size={70} />
        </Stack>
        <SimpleGrid
          columns={2}
          spacing={{ base: 5, md: 20, lg: 20 }}
          minChildWidth='240px'
          pb={{ base: '2rem', md: '4rem', lg: '4rem' }}
        >
          <Stack direction='column' spacing={5}>
            <Text textAlign='justify'>
              Me llamo Jesús Sánchez Cordero, vivo en Costa Rica y soy un
              desarrollador de software con ganas de seguir aprendiendo y
              explorando nuevas tecnologías día a día.
            </Text>
            <Text textAlign='justify'>
              Estudié Ingeniería de Sistemas en la Universidad Nacional de Costa
              Rica y terminé la carrera en 2022, me encuentro laborando en el
              campo desde inicios del 2022 en puestos relacionados tanto al
              <b> Front end</b>, como al <b> Back end</b>.
            </Text>
            <Text textAlign='justify'>
              Tengo bastantes pasatiempos, me gustan muchos deportes, escuchar
              música, me gusta leer desde filosofía hasta los noticieros y lo
              más importante para mí que es pasar tiempo con mi familia.
            </Text>
            <Text textAlign='justify'>
              Considero que <b> nunca se deja de aprender</b> y esa es mi principal idea
              para seguir creciendo, tanto personal como profesionalmente.
            </Text>
          </Stack>
          <Stack direction='column'>
            <Text fontSize='2xl' as='b' alignSelf='center'>
              Mis habilidades
            </Text>
            <Container>
              {skills.map((item, id) => (
                <Tag key={id} ml={4} mb={4} h={10} bgColor='gray.300' color='blackAlpha.900' fontSize={16}>
                  <Text as='b' alignSelf='center'>
                  {item.skill}
                  </Text>
                </Tag>
              ))}
            </Container>
          </Stack>
        </SimpleGrid>
        <Stack alignItems='center'>
        <IconButton aria-label='Down to about'>
          <Link
            to='contact'
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

export default About;
