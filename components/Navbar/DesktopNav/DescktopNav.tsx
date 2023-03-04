import { Box, Popover, Stack, useColorModeValue } from '@chakra-ui/react';
import { NAV_ITEMS } from '../../../global/Seeds';
import { Link } from 'react-scroll';
import ToggleColorMode from '../../ToggleColorMode/ToggleColorMode';

export const DesktopNav = () => {
  const linkColor = useColorModeValue('gray.600', 'gray.200');

  return (
    <Stack direction={'row'} spacing={4} alignItems='center'>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <Link
              to={navItem.page}
              href={navItem.href ?? '#'}
              color={linkColor}
              activeClass='active'
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
            >
              {navItem.label}
            </Link>
          </Popover>
        </Box>
      ))}
      <ToggleColorMode />
    </Stack>
  );
};
