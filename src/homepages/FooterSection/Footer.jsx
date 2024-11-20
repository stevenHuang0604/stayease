import FooterColumn from "./FooterColumn";
import FooterColumnTitle from "./FooterColumnTitle";
import FooterLogo from "./FooterLogo";

function Footer() {
  return (
    <footer
      className="bg-violet-900 pt-10 text-slate-200 dark:bg-violet-100 dark:text-slate-800"
      id="footer"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 justify-items-center gap-6 text-center md:grid-cols-2 lg:grid-cols-4 lg:text-start">
          <div className="flex flex-col items-center">
            <div className="h-20 md:h-24 lg:h-28">
              <FooterLogo />
            </div>
          </div>

          <FooterColumn
            title="Quick Links"
            detailAry={["Home", "Search Hotels"]}
          />

          <FooterColumn title="Support" detailAry={["Help Center", "FAQs"]} />

          <div>
            <FooterColumnTitle>Connect With Us</FooterColumnTitle>

            <form className="mt-4">
              <label htmlFor="news-letter" className="mb-2 block text-sm">
                Stay updated with our latest offers and travel tips!
              </label>
              <div className="flex flex-col md:flex-row">
                <input
                  type="email"
                  id="news-letter"
                  name="newsLetter"
                  placeholder="Your email"
                  className="w-full px-3 py-2 text-black outline-none"
                />
                <button
                  type="submit"
                  className="bg-violet-400 px-4 py-2 hover:bg-violet-300 dark:bg-violet-600 dark:hover:bg-violet-700"
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
