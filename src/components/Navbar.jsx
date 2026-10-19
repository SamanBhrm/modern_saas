
import { useState } from "react";

const navLinks = [
  { name: "Features", href: "#features" },
  { name: "How It Works", href: "#how-it-works" },
  { name: "Pricing", href: "#pricing" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "FAQ", href: "#faq" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#080812]/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <a
          href="#top"
          onClick={closeMenu}
          className="flex items-center gap-3"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 to-blue-600 text-xl font-bold text-white shadow-lg shadow-violet-500/20">
            N
          </span>

          <span className="text-xl font-bold tracking-tight text-white">
            NovaFlow
            <span className="text-violet-400">.</span>
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm text-gray-400 transition-colors duration-200 hover:text-white"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Desktop Buttons */}
        <div className="hidden items-center gap-4 lg:flex">
          <a
            href="#pricing"
            className="text-sm font-medium text-gray-300 transition hover:text-white"
          >
            Log in
          </a>

          <a
            href="#pricing"
            className="rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-500/10 transition duration-300 hover:-translate-y-0.5 hover:brightness-110"
          >
            Get Started <span className="ml-1">→</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-white transition hover:bg-white/10 lg:hidden"
        >
          <span className="text-2xl leading-none">
            {menuOpen ? "×" : "☰"}
          </span>
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden border-t border-white/10 transition-all duration-300 lg:hidden ${
          menuOpen
            ? "max-h-[450px] opacity-100"
            : "max-h-0 border-t-transparent opacity-0"
        }`}
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={closeMenu}
              className="rounded-lg px-4 py-3 text-sm text-gray-300 transition hover:bg-white/5 hover:text-white"
            >
              {link.name}
            </a>
          ))}

          <div className="mt-3 grid grid-cols-2 gap-3 border-t border-white/10 pt-4">
            <a
              href="#pricing"
              onClick={closeMenu}
              className="rounded-xl border border-white/10 px-4 py-3 text-center text-sm text-white transition hover:bg-white/5"
            >
              Log in
            </a>

            <a
              href="#pricing"
              onClick={closeMenu}
              className="rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 px-4 py-3 text-center text-sm font-semibold text-white transition hover:brightness-110"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
