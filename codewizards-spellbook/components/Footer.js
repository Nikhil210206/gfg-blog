import { Box, Text } from '@chakra-ui/react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <Box as="footer" bg="gray.800" borderTop="1px" borderColor="gray.700" mt={12} py={6} textAlign="center">
      <Text color="gray.400">
        Mischief Managed | © {currentYear} The Code-Wizard's Spellbook
      </Text>
    </Box>
  );
}