import { Container, Flex, Heading } from '@chakra-ui/react'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button
  } from '@chakra-ui/react'


const Topnav = () => {
  return (
    <Flex boxShadow="xl">
        <Container>
            <Heading>Dashboard</Heading>

            <Menu>
                <MenuButton as={Button}>
                    Actions
                </MenuButton>
                <MenuList>
                    <MenuItem>Download</MenuItem>
                    <MenuItem>Create a Copy</MenuItem>
                    <MenuItem>Mark as Draft</MenuItem>
                    <MenuItem>Delete</MenuItem>
                    <MenuItem>Attend a Workshop</MenuItem>
                </MenuList>
            </Menu>
        </Container>
    </Flex>
  )
}

export default Topnav