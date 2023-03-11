import React, { useState } from 'react';
import {
  Button,
  FormControl,
  FormLabel,
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

import emailjs from 'emailjs-com';

import { decryptAES, encryptAES } from '../../../../libs/encryptHelpers';
import { validateMail } from '../../../../libs/utils';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const initialState = {
  value: '',
  error: false,
};

const MailModal = ({ isOpen, onClose }: Props) => {
  const toast = useToast();

  const [name, setName] = useState(initialState);
  const [email, setEmail] = useState(initialState);
  const [message, setMessage] = useState(initialState);

  const validations = () => {
    if (name.value === '') {
      setName({ ...name, error: name.value === '' ? true : false });
    }
    if (email.value === '') {
      setEmail({ ...email, error: name.value === '' ? true : false });
    }
    if (message.value === '') {
      setMessage({ ...message, error: name.value === '' ? true : false });
    }
    
  }

  const handleSend = () => {
    validations();
    if(!validateMail(email.value) && email.value !== ''){
      setEmail({ ...email, error: true });
      toast({
        title: 'Ingrese una dirección de correo electrónico válida.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
      return;
    }
    if (name.value === '' || email.value === '' || message.value === '') {
      toast({
        title: '¡Por Favor! Complete todos los campos.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
      return;
    }
    emailjs
      .send(
        'default_service',
        process.env.NEXT_PUBLIC_TEMPLATE_ID || '',
        { name: name.value, email: email.value, message: message.value },
        process.env.NEXT_PUBLIC_USER_ID || ''
      )
      .then(
        (response) => {
          if(response){
            toast({
              title: 'Correo enviado con éxito.',
              description: 'El correo fue enviado satisfactoriamente.',
              status: 'success',
              duration: 5000,
              isClosable: true,
            });
            onClose();
          }
          else{
            toast({
              title: 'No se pudo enviar el correo.',
              status: 'error',
              duration: 5000,
              isClosable: true,
            });
          }
        },
        (err) => {
          toast({
            title: 'No se pudo enviar el correo.',
            status: 'error',
            duration: 5000,
            isClosable: true,
          });
        }
      );
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
                  isInvalid={name.error}
                  value={name.value}
                  type='text'
                  name='name'
                  placeholder='Nombre'
                  onChange={(e) =>
                    setName({
                      value: e.target.value,
                      error: e.target.value === '' ? true : false,
                    })
                  }
                />
              </InputGroup>
            </Stack>
            <Stack direction='column'>
              <Text as='b'>Correo </Text>
              <InputGroup>
                <Input
                  isInvalid={email.error}
                  value={email?.value || ''}
                  type='email'
                  name='email'
                  placeholder='Correo'
                  onChange={(e) =>
                    setEmail({
                      value: e.target.value,
                      error: e.target.value === '' ? true : false,
                    })
                  }
                />
              </InputGroup>
            </Stack>
            <Stack direction='column'>
              <Text as='b'>Mensaje</Text>
              <InputGroup>
                <Textarea
                  isInvalid={message.error}
                  value={message?.value}
                  placeholder='Escriba su mensaje aquí'
                  size='sm'
                  name='message'
                  resize='vertical'
                  onChange={(e) =>
                    setMessage({
                      value: e.target.value,
                      error: e.target.value === '' ? true : false,
                    })
                  }
                />
              </InputGroup>
            </Stack>
          </Stack>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme='red' mr={3} onClick={onClose}>
            Cerrar
          </Button>
          <Button colorScheme='whatsapp' onClick={() => handleSend()}>Enviar</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default MailModal;
