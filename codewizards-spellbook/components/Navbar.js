import { Box, Container, Flex, Heading, Link as ChakraLink } from '@chakra-ui/react';
import Link from 'next/link';

export default function Navbar() {
  return (
    <Box bg="gray.800" borderBottom="1px" borderColor="gray.700" p={4}>
      <Container maxW="container.xl" as={Flex} justify="space-between" align="center">
        <Link href="/" passHref>
          <Heading as="a" size="md" color="white" _hover={{ color: 'yellow.400' }}>
            The Spellbook
          </Heading>
        </Link>
        <Box>
          <Link href="/" passHref>
            <ChakraLink color="gray.300" _hover={{ color: 'white' }} mr={4}>
              The Great Hall
            </ChakraLink>
          </Link>
          <Link href="/projects" passHref>
            <ChakraLink color="gray.300" _hover={{ color: 'white' }}>
              The Library
            </ChakraLink>
          </Link>
        </Box>
      </Container>
    </Box>
  );
}