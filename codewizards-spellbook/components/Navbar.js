import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 border-b border-gray-700 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-white text-xl font-bold hover:text-yellow-400">
          The Spellbook
        </Link>
        <div>
          <Link href="/" className="text-gray-300 hover:text-white mr-4">
            The Great Hall
          </Link>
          {/* We'll build this page later, but the link is ready! */}
          <Link href="/projects" className="text-gray-300 hover:text-white">
            The Library
          </Link>
        </div>
      </div>
    </nav>
  );
}