import logo from "../assets/logo.png";

function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white flex items-center justify-between px-8 py-4 shadow-md">
      <img src={logo} alt="Elavate Logo" className="h-8" />
      <nav className="space-x-6">
        <a href="#about" className="hover:text-gray-600 transition-colors">
          Tentang Kami
        </a>
        <a href="#standar" className="hover:text-gray-600 transition-colors">
          Standar
        </a>
        <a href="#fitur" className="hover:text-gray-600 transition-colors">
          Fitur
        </a>
        <a href="#harga" className="hover:text-gray-600 transition-colors">
          Harga
        </a>
      </nav>
    </header>
  );
}

export default Header;
