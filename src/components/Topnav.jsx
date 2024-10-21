import { Box, Container, Flex, Heading, HStack, Icon } from '@chakra-ui/react'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button
  } from '@chakra-ui/react'
import { FaCircleUser } from "react-icons/fa6";
import { FaBars } from "react-icons/fa";


const Topnav = ({title, onOpen}) => {
  return (
    <Box px="4">
      <HStack maxW="70rem" h="16" justify="space-between" mx="auto">
        <Icon as={FaBars} onClick={onOpen}
        display={{
          bae:"block",
          lg: "none"
        }}
        />
        <Heading fontWeight="medium" fontSize="28px">{title}</Heading>
          <Menu>
            <MenuButton> <Icon as={FaCircleUser} fontSize="24px"/></MenuButton>
            <MenuList>
                <MenuItem>Logout</MenuItem>
                <MenuItem>Support</MenuItem>
            </MenuList>
        </Menu>
      </HStack>
    </Box>
  )
}

export default Topnav