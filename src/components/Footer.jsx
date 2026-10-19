
const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-[#080812] px-6 py-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <a href="#top" className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 to-blue-600 text-xl font-bold text-white">
                N
              </span>
              <span className="text-xl font-bold text-white">
                NovaFlow<span className="text-violet-400">.</span>
              </span>
            </a>

            <p className="mt-4 max-w-xs text-sm leading-7 text-gray-400">
              A smarter workspace for teams that want to build faster,
              collaborate better, and achieve more.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold text-white">Product</h3>
            <ul className="mt-4 space-y-3 text-sm text-gray-400">
              <li><a href="#features" className="transition hover:text-violet-400">Features</a></li>
              <li><a href="#how-it-works" className="transition hover:text-violet-400">How It Works</a></li>
              <li><a href="#pricing" className="transition hover:text-violet-400">Pricing</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-white">Company</h3>
            <ul className="mt-4 space-y-3 text-sm text-gray-400">
              <li><a href="#top" className="transition hover:text-violet-400">About Us</a></li>
              <li><a href="#testimonials" className="transition hover:text-violet-400">Testimonials</a></li>
              <li><a href="#faq" className="transition hover:text-violet-400">FAQs</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold text-white">Follow Us</h3>
            <div className="mt-4 flex gap-3">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-sm font-bold text-gray-400 transition hover:border-violet-500 hover:text-white"
              >
                GH
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noreferrer"
                aria-label="X"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-sm font-bold text-gray-400 transition hover:border-violet-500 hover:text-white"
              >
                X
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-sm font-bold text-gray-400 transition hover:border-violet-500 hover:text-white"
              >
                in
              </a>
            </div>
            <p className="mt-4 text-sm text-gray-500">
              Connect with our community.
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-gray-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} NovaFlow. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#top" className="transition hover:text-white">Privacy Policy</a>
            <a href="#top" className="transition hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
