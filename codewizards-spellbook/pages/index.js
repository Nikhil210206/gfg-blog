import fs from 'fs';
import path from 'path';
import ProjectCard from '../components/ProjectCard';

export default function Home({ spells }) {
  return (
    <>
      <div className="text-center">
        <h1 className="text-5xl font-bold text-white">The Code-Wizard's Spellbook</h1>
        <p className="mt-2 text-lg text-gray-400">A Geek's Field Guide to Modern Muggle Magic</p>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {spells.map((spell) => (
          <ProjectCard key={spell.id} spell={spell} />
        ))}
      </div>
    </>
  )
}


export async function getStaticProps() {
  // ... (this function does not change)
  const filePath = path.join(process.cwd(), 'data', 'spells.json');
  const jsonData = await fs.readFileSync(filePath);
  const data = JSON.parse(jsonData);

  return {
    props: {
      spells: data
    }
  };
}