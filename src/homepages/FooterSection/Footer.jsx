import FooterColumnTitle from "./FooterColumnTitle";
import FooterLogo from "./FooterLogo";

function Footer() {
  return (
    <footer className="bg-violet-900 pt-10 text-slate-200" id="footer">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 justify-items-center gap-6 text-center md:grid-cols-2 lg:grid-cols-4 lg:text-start">
          <div className="flex flex-col items-center">
            <div className="h-20 md:h-24 lg:h-28">
              <FooterLogo />
            </div>
          </div>

          <div>
            <FooterColumnTitle>Quick Links</FooterColumnTitle>

            <ul className="space-y-2">
              <li>
                <a href="/#footer" className="text-sm hover:text-violet-300">
                  Home
                </a>
              </li>
              <li>
                <a href="/#footer" className="text-sm hover:text-violet-300">
                  Search Hotels
                </a>
              </li>
            </ul>
          </div>

          <div>
            <FooterColumnTitle>Support</FooterColumnTitle>
            <ul className="space-y-2">
              <li>
                <a href="/#footer" className="text-sm hover:text-violet-300">
                  Help Center
                </a>
              </li>
              <li>
                <a href="/#footer" className="text-sm hover:text-violet-300">
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          <div>
            <FooterColumnTitle>Connect With Us</FooterColumnTitle>

            <form className="mt-4">
              <label htmlFor="newsletter" className="mb-2 block text-sm">
                Stay updated with our latest offers and travel tips!
              </label>
              <div className="flex flex-col md:flex-row">
                <input
                  type="email"
                  id="newsletter"
                  placeholder="Your email"
                  className="w-full px-3 py-2 text-black"
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

      <div className="mt-8 border-t border-violet-800 bg-violet-100 py-2 text-violet-900">
        <div className="container mx-auto flex flex-wrap items-center justify-center px-4">
          <p className="text-sm md:text-base">
            &copy; 2024 StayEase. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
