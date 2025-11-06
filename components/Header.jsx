import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="border-b border-gray-200">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/logo.svg"
              className="h-12"
              alt="lws logo"
              height={48}
              width={100}
            />
          </Link>
        </div>

        <nav className="hidden md:flex items-center space-x-6">
          <Link
            href="#"
            className="bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition-colors"
          >
            Get started
          </Link>
        </nav>

        <button className="md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </header>
  );
};
export default Header;
