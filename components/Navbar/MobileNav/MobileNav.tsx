import { Stack, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { NAV_ITEMS } from "../../../global/Seeds";
import ToggleColorMode from "../../ToggleColorMode/ToggleColorMode";
import { MobileNavItem } from "./MobileNavItem";

export const MobileNav = () => {
  const { colorMode } = useColorMode();
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      p={4}
      display={{ md: 'none' }}
      borderBottom={`1px solid ${colorMode === 'dark' ? 'white' : 'black'}`}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.page} {...navItem} />
      ))}
      <ToggleColorMode />
    </Stack>
  );
};
