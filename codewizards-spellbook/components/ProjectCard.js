import { Box, Heading, Text, Tag } from '@chakra-ui/react';

export default function ProjectCard({ spell }) {
  return (
    <Box
      bg="gray.800"
      border="1px"
      borderColor="gray.700"
      borderRadius="lg"
      p={6}
      cursor="pointer"
      transition="transform 0.3s, border-color 0.3s"
      _hover={{
        transform: 'scale(1.05)',
        borderColor: 'yellow.400',
      }}
    >
      <Heading as="h2" size="lg" color="yellow.500">
        {spell.name}
      </Heading>
      <Text mt={2} color="gray.300">
        {spell.short_description}
      </Text>
      <Tag mt={4} bg="gray.700" color="yellow.300">
        School of Magic: {spell.school_of_magic}
      </Tag>
    </Box>
  );
}