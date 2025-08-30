export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 border-t border-gray-700 mt-12 py-6 text-center text-gray-400">
      <p>Mischief Managed | © {currentYear} The Code-Wizard's Spellbook</p>
    </footer>
  );
}