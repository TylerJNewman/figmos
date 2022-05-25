import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Container,
  Flex,
  HStack,
  IconButton,
  useBreakpointValue,
} from '@chakra-ui/react'
import * as React from 'react'
import {FiMenu, FiSearch, FiSettings} from 'react-icons/fi'
import Logo from '../assets/Logo'
import DarkModeSwitch from './DarkModeSwitch'

const Navbar = () => {
  const isDesktop = useBreakpointValue({base: false, lg: true})
  return (
    <Box as="section" pb={{base: '12', md: '24'}} w="100%">
      <Flex
        as="nav"
        bg="bg-accent"
        color="on-accent"
        py={{base: '3', lg: '4'}}
        justifyContent="center"
      >
        <HStack spacing="4">
          <Logo />
          {isDesktop && (
            <ButtonGroup variant="ghost-on-accent" spacing="1">
              {/* <Button>Home</Button>
              <Button aria-current="page">Dashboard</Button>
              <Button>Tasks</Button>
              <Button>Bookmarks</Button>
              <Button>Users</Button> */}
            </ButtonGroup>
          )}
        </HStack>
        {isDesktop ? (
          <HStack spacing="4">
            <ButtonGroup variant="ghost-on-accent" spacing="1">
              {/* <IconButton
                icon={<FiSearch fontSize="1.25rem" />}
                aria-label="Search"
              />
              <IconButton
                icon={<FiSettings fontSize="1.25rem" />}
                aria-label="Settings"
              /> */}
              <DarkModeSwitch />
            </ButtonGroup>
          </HStack>
        ) : (
          <IconButton
            variant="ghost-on-accent"
            icon={<FiMenu fontSize="1.25rem" />}
            aria-label="Open Menu"
          />
        )}
      </Flex>
    </Box>
  )
}

export default Navbar
