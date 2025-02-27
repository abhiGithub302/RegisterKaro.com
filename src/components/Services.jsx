import ServiceCard from './ServiceCard';
import { FaLaptopCode, FaFileAlt, FaUsers, FaCubes, FaShoppingCart, FaBook } from 'react-icons/fa';
const Services = () => {
  const services = [
    {
      icon: <FaLaptopCode className="h-12 w-12" />,
      title: "Company Formation",
      description: "Build web-based solutions that enhance customer experience."
    },
    {
      icon: <FaFileAlt className="h-12 w-12" />,
      title: "Company Secretarial Services",
      description: "Make data-driven decisions and utilize technology to reach business goals."
    },
    {
      icon: <FaUsers className="h-12 w-12" />,
      title: "Virtual Office Address",
      description: "Foster customer relationships by effectively serving your market."
    },
    {
      icon: <FaCubes className="h-12 w-12" />,
      title: "Annual Compliance Services",
      description: "Turn your ideas into modern products with our design experts."
    },
    {
      icon: <FaShoppingCart className="h-12 w-12" />,
      title: "Payroll Services",
      description: "Expand your business across the globe with minimal effort."
    },
    {
      icon: <FaBook className="h-12 w-12" />,
      title: "Bookkeeping Services",
      description: "Steering user behaviours with creative design, data insights & technology."
    }
  ];

  return (
    <div className="bg-white max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-secondary font-medium uppercase tracking-wider mb-2">WELCOME TO REGISTERKARO.IN</p>
          <h2 className="text-3xl md:text-4xl font-bold text-black">Explore Our Services</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              isLast={(index + 1) % 3 === 0}
              index={index}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a href="#" className="inline-block bg-blue-800 hover:bg-blue-900 text-white font-medium py-3 px-8 rounded-md transition duration-300">
            See All Services
          </a>
        </div>
      </div>
    </div>
  );
};

export default Services;