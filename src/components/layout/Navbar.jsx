import { Heart } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 text-2xl font-bold text-indigo-600"
        >
          <Heart size={28} fill="currentColor" />
          LoveCraft
        </Link>

        {/* Menu */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#features" className="hover:text-indigo-600 transition">
            Features
          </a>

          <a href="#how" className="hover:text-indigo-600 transition">
            How it Works
          </a>

          <a href="#faq" className="hover:text-indigo-600 transition">
            FAQ
          </a>
        </nav>

        {/* Buttons */}
        <div className="flex items-center gap-3">
          <Link
            to="/login"
            className="px-5 py-2 rounded-xl font-medium hover:bg-gray-100 transition"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="px-5 py-2 rounded-xl bg-indigo-600 text-white hover:bg-indigo-700 transition"
          >
            Get Started
          </Link>
        </div>

      </div>
    </header>
  );
}