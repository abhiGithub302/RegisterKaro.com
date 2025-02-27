import { SlGrid } from "react-icons/sl";
import { FaUsers } from "react-icons/fa6";
import { FaRegHandshake } from "react-icons/fa";
import { FaPlayCircle } from "react-icons/fa";

const companyLogos = [
  { name: "Coinbase", src: "/oracle.png" },
  { name: "Spotify", src: "/mor.png" },
  { name: "Slack", src: "/mor.png" },
  { name: "Dropbox", src: "/samsung.png" },
  { name: "Webflow", src: "/monde.png" },
  { name: "Zoom", src: "/seg.png" },
];

const Hero = () => { 
  return (
    <div>
      <div
      id="home"
      className="pt-16 bg-[linear-gradient(113.91deg,_#FFFFFF_8%,_rgba(255,240,220,0.67)_28%,_rgba(237,246,255,0.7)_36%)] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-yellow-400">★</span>
              <span className="text-gray-600">Google Rating ⭐⭐⭐⭐⭐</span>
            </div>

            <h1 className="font-inter font-medium text-[47.85px] leading-[60px] tracking-[-1.5px] text-gray-900 mb-6">
              Your trusted partner
              <br />
              for compliance business needs
            </h1>
            <div className="w-10 h-1 bg-red-600 my-4"></div>

            <p className="font-inter font-normal text-[20px] leading-[28.8px] tracking-[0%] text-gray-600 mb-8">
              An online business compliance platform that helps entrepreneurs
              and other individuals with various
              <span className="font-bold whitespace-nowrap">
                {" "}
                registrations, tax filings,
              </span>
              and other
              <span className="font-bold whitespace-nowrap">
                {" "}
                legal matters.
              </span>
            </p>

            <div className="flex flex-wrap gap-8 mb-8">
              <div className="flex items-center">
                <div className="p-2 bg-gray-100 rounded-md mr-3">
                  <SlGrid className="w-[48px] h-[47.84053039550781px] text-gray-600 text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 bg-gradient-to-r from-[#FFA229] to-[#1C4670] text-transparent bg-clip-text">
                    4.5+
                  </h3>

                  <p className="text-sm text-gray-600">Customer Rating</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="p-2 bg-gray-100 rounded-md mr-3">
                  <FaUsers className="w-[48px] h-[47.84053039550781px] text-gray-600 text-xl" />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 bg-gradient-to-r from-[#FFA229] to-[#1C4670] text-transparent bg-clip-text">
                    20,000+
                  </h3>
                  <p className="text-sm text-gray-600">Clients</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="p-2 bg-gray-100 rounded-md mr-3">
                  <FaRegHandshake className="w-[48px] h-[47.84053039550781px] text-gray-600 text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 bg-gradient-to-r from-[#FFA229] to-[#1C4670] text-transparent bg-clip-text">
                    99.8%
                  </h3>
                  <p className="text-sm text-gray-600">Financial Stability</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <button className="bg-blue-800 text-white px-6 py-3 rounded-md hover:bg-secondary/90 transition-colors">
                Talk An Expert
              </button>
              <button className="flex items-center gap-2 text-black hover:text-primary transition-colors">
                <span className="text-primary">
                  <FaPlayCircle className="text-red-600 text-xl" />
                </span>{" "}
                See how it works
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="relative mt-12">
              {/* Main Illustration (hero.png) */}
              <img
                src="/hero.png"
                alt="Business Compliance"
                className="w-full max-w-xl h-auto block"
              />

              {/* Target Image - Touching hero.png */}
              <img
                src="/target.png"
                alt="Target Goal"
                className="w-48 h-auto absolute bottom-0 right-[-10px]"
              />
            </div>

            {/* Service Buttons on the top-right */}
            <div className="absolute top-0 right-0 flex flex-col gap-5 mt-4">
              {[
                "Annual Compliance",
                "Payroll Services",
                "Company Formation",
                "Annual Compliance",
              ].map((service) => (
                <div
                  key={service}
                  className="bg-white px-4 py-2 rounded-lg shadow-md text-sm text-gray-800"
                >
                  {service}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      
    </div>
    <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-semibold text-gray-900 mb-8">
            Trusted By Over 100+ Startups and freelance business
          </h2>
          <div className="bg-white py-16 px-4">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
                {companyLogos.map((logo, index) => (
                  <img
                    key={index}
                    src={logo.src}
                    alt={`${logo.name} logo`}
                    className="h-6 w-auto  transition-all duration-200"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
