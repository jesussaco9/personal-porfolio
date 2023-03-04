import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Popover,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react"
import {
  HamburgerIcon,
  CloseIcon
} from "@chakra-ui/icons"
import ToggleColorMode from "../ToggleColorMode/ToggleColorMode"
import { Link } from 'react-scroll';
import { NAV_ITEMS } from "../../global/NavSeed";
import { NavItem } from "../../interfaces/NavIten";
import { DesktopNav } from "./DesktopNav";
import { MobileNav } from "./MobileNav";

export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <Box>
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4, md: 20, lg: 32 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }} justifyContent='space-between'>
          <Text
            textAlign={useBreakpointValue({ base: "center", md: "left" })}
            fontFamily={"heading"}
            color={useColorModeValue("gray.800", "white")}
            pt={2}
          >
            <Button as="a" href="/" variant={"link"} fontSize={20}>
            Jesús Sánchez Cordero
            </Button>
          </Text>

          <Flex display={{ base: "none", md: "flex" }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
        >
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  )
}