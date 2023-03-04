import { Container, Divider, IconButton, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { AiOutlineGithub, AiOutlineLinkedin } from 'react-icons/ai';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer >
        <Divider />
        <Stack direction='row' justifyContent='space-between' p={2}>
          <Text alignSelf='center'> © 2023 Jesús Sánchez Cordero</Text>
          <Stack direction='row' spacing={4}>
            <IconButton aria-label='github-link' size='lg'>
              <Link href='https://github.com/jesussaco9' target='_blank'>
                <AiOutlineGithub
                  size={40}
                  className='hover:-translate-y-1 transition-transform cursor-pointer'
                />
              </Link>
            </IconButton>
            <IconButton aria-label='project-link' size='lg'>
              <Link href='https://www.linkedin.com/in/jes%C3%BAs-s%C3%A1nchez-cordero/' target='_blank'>
                <AiOutlineLinkedin
                  size={40}
                  className='hover:-translate-y-1 transition-transform cursor-pointer'
                />
              </Link>
            </IconButton>
          </Stack>
        </Stack>
    </footer>
  );
};

export default Footer;
