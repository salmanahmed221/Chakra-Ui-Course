"use client";

import {
  Box,
  Grid,
  GridItem,
  Heading,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import Navbar from "./Flex";

export default function Dashboard() {
  return (
    <div>
      <SimpleGrid p="10px" columns={3} spacing={10} minChildWidth="250px">
        <Box bg="white" h="200px" border="1px solid">
          <Text color={{ base: "pink", md: "purple", lg: "red" }}>Hello</Text>
        </Box>
        <Box bg="white" h="200px" border="1px solid"></Box>
        <Box bg="white" h="200px" border="1px solid"></Box>
        <Box bg="white" h="200px" border="1px solid"></Box>

        <Box bg="white" h="200px" border="1px solid"></Box>
        <Box bg="white" h="200px" border="1px solid"></Box>
        <Box bg="white" h="200px" border="1px solid"></Box>
        <Box bg="white" h="200px" border="1px solid"></Box>

        <Box bg="white" h="200px" border="1px solid"></Box>
        <Box bg="white" h="200px" border="1px solid"></Box>
        <Box bg="white" h="200px" border="1px solid"></Box>
        <Box bg="white" h="200px" border="1px solid"></Box>
      </SimpleGrid>

      {/* <Grid templateColumns="repeat(6, 1fr)" bg="gray.50">
        <GridItem
          as="aside"
          bg="purple.400"
          colSpan={{ base: 6, lg: 2, xl: 1 }}
          h="100%"
          p={{ base: "20px", lg: "30px" }}
        >
          <span>SideBar</span>
        </GridItem>

        <GridItem as="main" colSpan={{ base: 6, lg: 4, xl: 5 }} p="40px">
          <Navbar />

          <Dashboard />
        </GridItem> */}

      {/* <Practice /> */}
      {/* </Grid> */}
    </div>
  );
}
