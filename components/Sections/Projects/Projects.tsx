import {
  Card,
  CardBody,
  CardFooter,
  Container,
  Heading,
  IconButton,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { AiOutlineMinus } from 'react-icons/ai';
import { projects } from '../../../global/Seeds';
import Link from 'next/link';
import { BsGithub, BsArrowUpRightSquare } from 'react-icons/bs';

const Projects = () => {
  return (
    <section id='projects'>
      <Container
        maxW={'3xl'}
        pt={{ base: '2rem', md: '4rem', lg: '4rem' }}
        pb={{ base: '2rem', md: '6rem', lg: '6rem' }}
      >
        <Stack alignItems='center'>
          <Text fontSize='4xl' as='b' alignSelf='center'>
            Proyectos
          </Text>
          <AiOutlineMinus size={70} />
        </Stack>
        <Stack mb={10}>
        {projects.map((item, id) => (
          <Card
            key={id}
            direction={{ base: 'column', sm: 'row' }}
            overflow='hidden'
            variant='outline'
            mt={5}
          >
            <Image
              objectFit='cover'
              maxW={{ base: '100%', sm: '50%' }}
              src={item.image}
              alt={item.name}
            />
            <Stack>
              <CardBody>
                <Heading size='md'>{item.name}</Heading>

                <Text py='2'>{item.description}</Text>
              </CardBody>

              <CardFooter>
                <Stack direction='row' spacing={10}>
                  <IconButton aria-label='github-link' size='lg'>
                    <Link href={item.github} target='_blank'>
                      <BsGithub
                        size={40}
                        className='hover:-translate-y-1 transition-transform cursor-pointer'
                      />
                    </Link>
                  </IconButton>
                  <IconButton aria-label='project-link' size='lg'>
                    <Link href={item.link} target='_blank'>
                      <BsArrowUpRightSquare
                        size={40}
                        className='hover:-translate-y-1 transition-transform cursor-pointer'
                      />
                    </Link>
                  </IconButton>
                </Stack>
              </CardFooter>
            </Stack>
          </Card>
        ))}
        </Stack>
      </Container>
    </section>
  );
};

export default Projects;
