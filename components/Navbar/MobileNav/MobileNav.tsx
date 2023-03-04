import { Stack, useColorModeValue } from "@chakra-ui/react";
import { NAV_ITEMS } from "../../../global/NavSeed";
import ToggleColorMode from "../../ToggleColorMode/ToggleColorMode";
import { MobileNavItem } from "./MobileNavItem";

export const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      p={4}
      display={{ md: 'none' }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
      <ToggleColorMode />
    </Stack>
  );
};