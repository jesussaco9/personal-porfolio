import { Collapse, Flex, Stack, Text, useColorModeValue, useDisclosure } from "@chakra-ui/react";
import { NavItem } from "../../../../interfaces/NavIten";
import { Link } from 'react-scroll';

export const MobileNavItem = ({ label, href, page }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <Stack spacing={4} onClick={onToggle}>
        <Link
              to={page}
              href={href ?? '#'}
              activeClass='active'
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
            >
              <Text
          fontWeight={600}
          color={useColorModeValue('gray.600', 'gray.200')}
        >
          {label}
        </Text>
            </Link>
        
      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          align={'start'}
        ></Stack>
      </Collapse>
    </Stack>
  );
};
