import fs from 'fs';
import path from 'path';
import { Box, Heading, Text, SimpleGrid } from '@chakra-ui/react';
import ProjectCard from '../components/ProjectCard';

export default function Home({ spells }) {
  return (
    <Box>
      <Box textAlign="center">
        <Heading as="h1" size="2xl" color="white">
          The Code-Wizard's Spellbook
        </Heading>
        <Text mt={2} fontSize="lg" color="gray.400">
          A Geek's Field Guide to Modern Muggle Magic
        </Text>
      </Box>

      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8} mt={12}>
        {spells.map((spell) => (
          <ProjectCard key={spell.id} spell={spell} />
        ))}
      </SimpleGrid>
    </Box>
  );
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'data', 'spells.json');
  const jsonData = await fs.readFileSync(filePath);
  const data = JSON.parse(jsonData);

  return {
    props: {
      spells: data,
    },
  };
}