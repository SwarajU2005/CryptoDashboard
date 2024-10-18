import {Box, Center, Heading, HStack, Icon, Stack, Text} from '@chakra-ui/react'
import { RxDashboard } from "react-icons/rx";
import { BsArrowDownUp } from "react-icons/bs";

const Sidenav = () =>  {
    const navlinks = [
        {
            icon: RxDashboard,
            text: "Dashboard",
            Link: "/",
        },
        {
            icon: BsArrowDownUp,
            text: "Transactions",
            Link: "/transaction",
        }
    ]
    return(
        <Stack boxShadow="sm" maxW="16rem" h="100vh">
            <Heading textAlign="Center" fontSize="20px" pt="56px" as="h1">Crypto Exchange</Heading>
            <Box mt="6">
            {
                navlinks.map(nav => (
                    <HStack py="3" px="4"
                    _hover={{
                        bg:"#F3F3F7",
                        color:"#171717"
                    }}
                    color="#797E82"
                    key={nav.text}
                    >
                        <Icon as={nav.icon}/>
                        <Text fontSize="14px" fontWeight="medium" >{nav.text}</Text>
                    </HStack>
                ))
            }
            </Box>
            
        </Stack>
    )
}

export default Sidenav