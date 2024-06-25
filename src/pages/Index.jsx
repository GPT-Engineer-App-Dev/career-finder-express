import { Container, VStack, Heading, Text, Box, Button, HStack, IconButton } from "@chakra-ui/react";
import { FaBriefcase, FaSearch } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.lg" py={10}>
      <VStack spacing={8} align="stretch" width="100%">
        <Heading as="h1" size="2xl" textAlign="center">
          Job Listings
        </Heading>
        <Text fontSize="xl" textAlign="center">
          Find your dream job today!
        </Text>
        <Box bg="gray.100" p={6} borderRadius="md" boxShadow="md">
          <HStack spacing={4}>
            <IconButton aria-label="Search jobs" icon={<FaSearch />} size="lg" />
            <Button leftIcon={<FaBriefcase />} colorScheme="teal" size="lg">
              Post a Job
            </Button>
          </HStack>
        </Box>
        <Box>
          <Heading as="h2" size="lg" mb={4}>
            Latest Jobs
          </Heading>
          <VStack spacing={4} align="stretch">
            <Box p={4} bg="white" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md">Software Engineer</Heading>
              <Text>Company ABC - New York, NY</Text>
            </Box>
            <Box p={4} bg="white" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md">Product Manager</Heading>
              <Text>Company XYZ - San Francisco, CA</Text>
            </Box>
            <Box p={4} bg="white" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md">Data Scientist</Heading>
              <Text>Company 123 - Austin, TX</Text>
            </Box>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;