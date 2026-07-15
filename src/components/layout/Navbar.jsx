import { Heart } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 text-2xl font-bold text-indigo-600"
        >
          <Heart className="fill-indigo-600" size={28} />
          LoveCraft
        </Link>

        {/* Menu */}
        <nav className="hidden items-center gap-8 md:flex">
          <a href="#features" className="hover:text-indigo-600">
            Features
          </a>

          <a href="#how" className="hover:text-indigo-600">
            How It Works
          </a>

          <a href="#faq" className="hover:text-indigo-600">
            FAQ
          </a>
        </nav>

        {/* Buttons */}
        <div className="flex items-center gap-3">
          <Link
            to="/login"
            className="rounded-xl px-5 py-2 font-medium hover:bg-gray-100"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="rounded-xl bg-indigo-600 px-5 py-2 font-medium text-white hover:bg-indigo-700"
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}