import React from 'react';
import { Button, useColorMode } from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons'

const ToggleColorMode = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Button
    onClick={() => toggleColorMode()}
    m={4}
    >
      { colorMode === "dark" ? <SunIcon/> : <MoonIcon color='black'/>}
    </Button>
  );
};

export default ToggleColorMode;
