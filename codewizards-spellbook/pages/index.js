import fs from 'fs';
import path from 'path';

export default function Home({ spells }) {
  return (
    <main className="bg-gray-900 min-h-screen p-8 text-white">
      <div className="text-center">
        <h1 className="text-5xl font-bold">The Code-Wizard's Spellbook</h1>
        <p className="mt-2 text-lg text-gray-400">A Geek's Field Guide to Modern Muggle Magic</p>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {spells.map((spell) => (
          <div key={spell.id} className="bg-gray-800 border border-gray-700 rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-yellow-400">{spell.name}</h2>
            <p className="mt-2 text-gray-300">{spell.short_description}</p>
          </div>
        ))}
      </div>
    </main>
  )
}


export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'data', 'spells.json');
  const jsonData = await fs.readFileSync(filePath);
  const data = JSON.parse(jsonData);

  return {
    props: {
      spells: data
    }
  };
}