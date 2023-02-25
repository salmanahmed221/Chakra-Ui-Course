"use client";
import { ArrowRightIcon, CloseIcon, UnlockIcon } from "@chakra-ui/icons";
import {
  Flex,
  Box,
  Text,
  Heading,
  Button,
  Spacer,
  HStack,
  Container,
  Center,
  SimpleGrid,
  Icon,
  Divider,
  Avatar,
} from "@chakra-ui/react";

import { useToast } from "@chakra-ui/react";

export default function Navbar() {
  const toast = useToast();

  return (
    <Flex as="nav" p="10px" boxShadow="lg">
      <Heading as="h1">Dojo Tasks</Heading>
      <Spacer />
      <HStack spacing="30px">
        <Box bg="gray.200" p="10px" float="left">
          M
        </Box>
        <Text>mario@netninja.dev</Text>
        <Button
          colorScheme="purple"
          onClick={() =>
            toast({
              title: "Logged out.",
              description: "You have been Logout Successfully.",
              status: "success",
              duration: 5000,
              isClosable: true,
            })
          }
        >
          Logout
        </Button>
        <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
      </HStack>
    </Flex>

    // <Flex bg="black" justify="space-between" wrap="wrap" gap="5px">
    //   <Box w="150px" h="50x" bg="red">
    //     1
    //   </Box>
    //   <Box w="150px" h="50x" bg="blue">
    //     2
    //   </Box>
    //   <Box w="150px" h="50x" bg="green" flexGrow="1">
    //     3
    //   </Box>
    //   <Box w="150px" h="50x" bg="yellow" flexGrow="2">
    //     4
    //   </Box>
    // </Flex>
  );
}
