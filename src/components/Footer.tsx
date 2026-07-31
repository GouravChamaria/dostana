import { Link } from "react-router-dom";
import logo from "@/assets/dostana/App Logo 512.png";
import { COMPANY_DETAILS, APP_NAME } from "@/lib/constants";

const Footer = () => {
  return (
    <footer className="bg-rose-950 text-rose-100/80 py-16 font-body">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-rose-900/60">
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <img src={logo} alt={APP_NAME} className="h-10 w-10 rounded-xl object-cover" />
              <span className="font-display text-2xl font-bold text-white">{APP_NAME}</span>
            </div>
            <p className="text-sm max-w-sm text-rose-200/70">
              Confidential Counselling, Empathetic Listeners & Emotional Support tools for personal well-being and mental clarity.
            </p>
            <p className="text-xs text-rose-300/60">
              Developed & Maintained by <strong className="text-white">{COMPANY_DETAILS.name}</strong>
            </p>
          </div>

          <div>
            <h4 className="font-display text-white font-bold mb-4 text-sm tracking-wider uppercase">Legal & Policies</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/privacy-policy" className="hover:text-rose-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-and-conditions" className="hover:text-rose-400 transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-rose-400 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-white font-bold mb-4 text-sm tracking-wider uppercase">Corporate Office</h4>
            <p className="text-xs text-rose-200/70 leading-relaxed">
              {COMPANY_DETAILS.fullAddress}
            </p>
            <p className="text-xs text-rose-200/70 mt-2">GSTIN: {COMPANY_DETAILS.gstin}</p>
          </div>
        </div>

        <div className="pt-8 text-center text-xs text-rose-400/50">
          <p>© {new Date().getFullYear()} {COMPANY_DETAILS.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
