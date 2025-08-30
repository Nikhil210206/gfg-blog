export default function ProjectCard({ spell }) {
  return (
    <div className="bg-gray-800 border border-gray-700 rounded-lg p-6 
                    transform hover:scale-105 hover:border-yellow-400 
                    transition-transform duration-300 cursor-pointer">
      <h2 className="text-2xl font-semibold text-yellow-500">{spell.name}</h2>
      <p className="mt-2 text-gray-300">{spell.short_description}</p>
      <div className="mt-4">
        <span className="text-sm bg-gray-700 text-yellow-300 px-2 py-1 rounded">
          School of Magic: {spell.school_of_magic}
        </span>
      </div>
    </div>
  );
}