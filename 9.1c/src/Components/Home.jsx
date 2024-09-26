import { Box, Heading } from '@chakra-ui/react';

export default function Home() {
  return (
    <Box p={4} maxW="md" mx="auto">
      <Heading
        as="h1"
        mb={4}
        textAlign="center" // Center the heading
        fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }} // Responsive font size
      >
        Welcome to DEV@Deakin
      </Heading>
    </Box>
  );
}
