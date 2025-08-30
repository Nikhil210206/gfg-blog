import { Box, Container } from '@chakra-ui/react';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <Box bg="gray.900" minH="100vh" display="flex" flexDirection="column">
      <Navbar />
      <Container as="main" maxW="container.xl" flex="1" p={{ base: 4, md: 8 }}>
        {children}
      </Container>
      <Footer />
    </Box>
  );
}