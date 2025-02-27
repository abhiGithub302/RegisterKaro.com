import { FaFacebook, FaGoogle, FaApple, FaInstagram, FaArrowUp } from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-navy text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Description */}
          <div className="lg:col-span-1">
            <p className="text-lg font-medium mb-4">
              Design outstanding interfaces with advanced Figma features in a matter of minutes.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-white hover:text-orange transition-colors">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="text-white hover:text-orange transition-colors">
                <FaGoogle size={24} />
              </a>
              <a href="#" className="text-white hover:text-orange transition-colors">
                <FaApple size={24} />
              </a>
              <a href="#" className="text-white hover:text-orange transition-colors">
                <FaInstagram size={24} />
              </a>
            </div>
          </div>

          {/* Start a Business */}
          <div className="lg:col-span-1">
            <h3 className="text-orange font-bold text-lg mb-4">START A BUSINESS</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-orange transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-orange transition-colors">Solutions</a></li>
              <li><a href="#" className="hover:text-orange transition-colors">Integrations</a></li>
              <li><a href="#" className="hover:text-orange transition-colors">Enterprise</a></li>
              <li><a href="#" className="hover:text-orange transition-colors">Solutions</a></li>
            </ul>
          </div>

          {/* Government Registration */}
          <div className="lg:col-span-1">
            <h3 className="text-orange font-bold text-lg mb-4">GOVERNMENT REGISTRATION</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-orange transition-colors">Partners</a></li>
              <li><a href="#" className="hover:text-orange transition-colors">Community</a></li>
              <li><a href="#" className="hover:text-orange transition-colors">Developers</a></li>
              <li><a href="#" className="hover:text-orange transition-colors">App</a></li>
              <li><a href="#" className="hover:text-orange transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Compliance & Tax */}
          <div className="lg:col-span-1">
            <h3 className="text-orange font-bold text-lg mb-4">COMPLIANCE & TAX</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-orange transition-colors">Channels</a></li>
              <li><a href="#" className="hover:text-orange transition-colors">Scale</a></li>
              <li><a href="#" className="hover:text-orange transition-colors">Watch the Demo</a></li>
              <li><a href="#" className="hover:text-orange transition-colors">Our Competition</a></li>
            </ul>
          </div>

          {/* BIS & CDSCO */}
          <div className="lg:col-span-1">
            <h3 className="text-orange font-bold text-lg mb-4">BIS & CDSCO</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-orange transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-orange transition-colors">News</a></li>
              <li><a href="#" className="hover:text-orange transition-colors">Leadership</a></li>
              <li><a href="#" className="hover:text-orange transition-colors">Media Kit</a></li>
            </ul>
          </div>
        </div>

        {/* Scroll to top button */}
        <div className="flex justify-center mt-12 mb-6">
          <button 
            onClick={scrollToTop}
            className="bg-orange text-white p-4 rounded-full hover:bg-opacity-80 transition-all focus:outline-none"
            aria-label="Scroll to top"
          >
            <FaArrowUp />
          </button>
        </div>

        {/* Copyright */}
        <div className="text-center mt-6">
          <p>© 2025 Registerkaro. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;