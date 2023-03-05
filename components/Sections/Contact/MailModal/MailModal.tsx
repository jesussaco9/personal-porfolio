import {
  Button,
  Input,
  InputGroup,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  Textarea,
  useToast,
} from '@chakra-ui/react';
import React, { useState } from 'react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const MailModal = ({ isOpen, onClose }: Props) => {
  const toast = useToast();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSend = () => {
    if(name === '' || email === '' || message === ''){
      toast({
        title: '¡Por Favor! Complete todos los campos.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
      return;
    }
    toast({
      title: 'Correo enviado con éxito.',
      description: 'El correo fue enviado satisfactoriamente.',
      status: 'success',
      duration: 5000,
      isClosable: true,
    });
    onClose();
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Enviar correo a Jesús</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Stack spacing={4}>
            <Stack direction='column'>
              <Text as='b'>Nombre</Text>
              <InputGroup>
                <Input
                  isInvalid={name === '' ? true : false}
                  value={name}
                  type='text'
                  placeholder='Nombre'
                  onChange={(e) => setName(e.target.value)}
                />
              </InputGroup>
            </Stack>
            <Stack direction='column'>
              <Text as='b'>Correo </Text>
              <InputGroup>
                <Input
                  isInvalid={email === '' ? true : false}
                  value={email}
                  type='email'
                  placeholder='Correo'
                  onChange={(e) => setEmail(e.target.value)}
                />
              </InputGroup>
            </Stack>
            <Stack direction='column'>
              <Text as='b'>Mensaje</Text>
              <InputGroup>
                <Textarea
                  isInvalid={message === '' ? true : false}
                  placeholder='Escriba su mensaje aquí'
                  size='sm'
                  resize='vertical'
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </InputGroup>
            </Stack>
          </Stack>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme='blue' mr={3} onClick={onClose}>
            Cerrar
          </Button>
          <Button onClick={handleSend}>Enviar</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default MailModal;
