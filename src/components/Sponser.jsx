const companyLogos = [
  { name: "Coinbase", src: "/oracle.png" },
  { name: "Spotify", src: "/mor.png" },
  { name: "Slack", src: "/mor.png" },
  { name: "Dropbox", src: "/samsung.png" },
  { name: "Webflow", src: "/monde.png" },
  { name: "Zoom", src: "/seg.png" },
];

const Sponser = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 mb-8">
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
export default Sponser;
