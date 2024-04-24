// Personal website for Olasunkanmi Olajide
import { Box, Flex, Text, Button, Image, VStack, Link, Icon } from "@chakra-ui/react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Index = () => {
  return (
    <Flex direction="column" align="center" justify="center" minH="100vh" p={5} bg="gray.100">
      <Box maxW="xl" p={5} bg="white" borderRadius="lg" boxShadow="md">
        <VStack spacing={4} align="center">
          <Image borderRadius="full" boxSize="150px" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMG9mJTIwT2xhc3Vua2FubWklMjBPbGFqaWRlfGVufDB8fHx8MTcxMzk3MzEyNnww&ixlib=rb-4.0.3&q=80&w=1080" alt="Olasunkanmi Olajide" />
          <Text fontSize="2xl" fontWeight="bold">
            Olasunkanmi Olajide
          </Text>
          <Text fontSize="md" color="gray.600">
            Software Developer | Tech Enthusiast
          </Text>
          <Text fontSize="md" textAlign="center" px={3}>
            Passionate about building scalable software solutions and contributing to open-source projects.
          </Text>
          <Flex gap={4} mt={4}>
            <Link href="https://linkedin.com/in/olasunkanmiolajide" isExternal>
              <Button leftIcon={<Icon as={FaLinkedin} />} colorScheme="blue">
                LinkedIn
              </Button>
            </Link>
            <Link href="https://github.com/olasunkanmiolajide" isExternal>
              <Button leftIcon={<Icon as={FaGithub} />} colorScheme="gray">
                GitHub
              </Button>
            </Link>
            <Link href="mailto:olasunkanmiolajide@example.com">
              <Button leftIcon={<Icon as={FaEnvelope} />} colorScheme="red">
                Email
              </Button>
            </Link>
          </Flex>
        </VStack>
      </Box>
    </Flex>
  );
};

export default Index;
