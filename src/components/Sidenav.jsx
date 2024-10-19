import {Box, Center, Heading, HStack, Icon, Stack, Text} from '@chakra-ui/react'
import { RxDashboard } from "react-icons/rx";
import { BsArrowDownUp } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";

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
        <Stack justifyContent="space-between" boxShadow="lg" maxW="16rem" h="100vh">
            <Box>
                <Heading textAlign="Center" fontSize="20px" pt="56px" as="h1">Crypto Exchange</Heading>
                <Box mt="6" mx="3">
                {
                    navlinks.map(nav => (
                        <HStack 
                        borderRadius="10px"
                        py="3" px="4"
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
            </Box>

            <Box mt="6" mx="3" mb="6">
                <HStack 
                borderRadius="10px"
                py="3" px="4"
                _hover={{
                    bg:"#F3F3F7",
                    color:"#171717"
                }}
                color="#797E82"
                >
                    <Icon as={BiSupport}/>
                    <Text fontSize="14px" fontWeight="medium" >Support</Text>
                </HStack>
            </Box>
            
        </Stack>
    )
}

export default Sidenav