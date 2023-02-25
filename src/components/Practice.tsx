"use client";
import { Heading, Text, Container, Box } from "@chakra-ui/react";

export default function Practice() {
  const boxstyles = {
    p: "40px",
    bg: "red",
    color: "white",
    filter: "blur(1px)",
    ":hover": {
      color: "black",
      bg: "pink",
    },
  };

  return (
    <div>
      <Container as="section">
        <Heading mb="10px">Chakra UI Components</Heading>

        <Text ml="90px" fontWeight="extrabold" color="blue">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim ratione
          eaque commodi autem illum? Nam impedit, rerum praesentium numquam
          ipsam ut! Vitae, inventore? Qui amet consequuntur voluptatibus dolore.
          Maxime, fugiat.
        </Text>

        <Box mt="50px" bg="purple" p="40px">
          <Text color="white">This is a box work as div</Text>
        </Box>

        <Box sx={boxstyles}>Hello Salman!</Box>
      </Container>
    </div>
  );
}
