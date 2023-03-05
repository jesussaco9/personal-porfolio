import {
  Button,
  Container,
  IconButton,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  SimpleGrid,
  Stack,
  Tag,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import React from 'react';
import { HiArrowDown } from 'react-icons/hi';
import { AiFillMail, AiOutlineMinus } from 'react-icons/ai';
import { Link as LinkScroll } from 'react-scroll';
import { AiOutlineGithub, AiOutlineLinkedin, AiFillFile } from 'react-icons/ai';
import Link from 'next/link';
import { resume } from '../../../global/Seeds';
import MailModal from './MailModal/MailModal';

const Contact = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <section id='contact'>
      <Container
        maxW={'3xl'}
        pt={{ base: '2rem', md: '4rem', lg: '4rem' }}
        pb={{ base: '2rem', md: '6rem', lg: '6rem' }}
      >
        <Stack alignItems='center'>
          <Text fontSize='4xl' as='b' alignSelf='center'>
            Contacto
          </Text>
          <AiOutlineMinus size={70} />
        </Stack>
        <SimpleGrid
          columns={2}
          spacing={{ base: 5, md: 20, lg: 20 }}
          minChildWidth='240px'
          pb={{ base: '2rem', md: '4rem', lg: '4rem' }}
        >
          <Stack direction='column' spacing={5} alignItems='center'>
            <Link href={resume} target='_blank'>
              <Button>
                <Text pr={2}>Ver CV</Text>
                <AiFillFile />
              </Button>
            </Link>
            <Button onClick={onOpen}>
              <Text pr={2}>Eviar correo</Text>
              <AiFillMail />
            </Button>
          </Stack>
          <Stack direction='column' spacing={5} alignItems='center'>
            <Link href='https://github.com/jesussaco9' target='_blank'>
              <Button aria-label='github-contact'>
              <Text pr={2}>Github</Text>
                <AiOutlineGithub size={40} />
              </Button>
            </Link>
            <Link
              href='https://www.linkedin.com/in/jes%C3%BAs-s%C3%A1nchez-cordero/'
              target='_blank'
            >
              <Button aria-label='linkedin-contact'>
              <Text pr={2}>Linkedin</Text>
                <AiOutlineLinkedin size={40} />
              </Button>
            </Link>
          </Stack>
        </SimpleGrid>
        <Stack alignItems='center'>
          <IconButton aria-label='Down to about'>
            <LinkScroll
              to='projects'
              activeClass='active'
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
            >
              <HiArrowDown size={35} />
            </LinkScroll>
          </IconButton>
        </Stack>
      </Container>
      {isOpen &&
      <MailModal isOpen={isOpen} onClose={onClose}/>
      }
    </section>
  );
};

export default Contact;
