function Footer() {
  return (
    <footer className="bg-violet-900 pt-10 text-slate-200">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* About StayEase */}
          <div className="flex flex-col items-center justify-center">
            <img
              src="/logo-dark.svg"
              alt="StayEase Logo"
              className="mb-4 h-28 w-full"
            />
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:text-violet-300">
                  Home
                </a>
              </li>
              <li>
                <a href="/search" className="hover:text-violet-300">
                  Search Hotels
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Support</h3>
            <ul className="space-y-2">
              <li>
                <a href="/help" className="hover:text-violet-300">
                  Help Center
                </a>
              </li>
              <li>
                <a href="/faqs" className="hover:text-violet-300">
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Connect With Us</h3>
            {/* Add social media icons here */}
            <form className="mt-4">
              <label htmlFor="newsletter" className="mb-2 block">
                Stay updated with our latest offers and travel tips!
              </label>
              <div className="flex">
                <input
                  type="email"
                  id="newsletter"
                  placeholder="Your email"
                  className="flex-grow px-3 py-2 text-black"
                />
                <button
                  type="submit"
                  className="bg-violet-600 px-4 py-2 hover:bg-violet-700"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="mt-8 border-t border-violet-800 py-2">
        <div className="container mx-auto flex flex-wrap items-center justify-center px-4">
          <p>&copy; 2024 StayEase. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
