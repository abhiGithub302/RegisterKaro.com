const ServiceCard = ({ icon, title, description, isLast, index }) => {
  return (
    <div className="relative flex flex-col items-center p-6 md:p-8">
      <div className="text-secondary mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-black mb-4 text-center">{title}</h3>
      <p className="text-gray-600 text-center mb-6">{description}</p>
      <a href="#" className="flex items-center text-primary font-medium">
        Learn more 
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </a>
      
      {/* Vertical divider with alternating red sections */}
      {!isLast && (
        <div className="hidden md:block absolute right-0 inset-y-0">
          {/* Gray vertical line */}
          <div className="absolute right-0 inset-y-0 w-px bg-gray-200"></div>
          
          {/* Red section - alternating top/bottom based on index */}
          {index % 2 === 0 ? (
            <div className="absolute right-0 top-7 w-1 h-5 bg-red-500"></div>
          ) : (
            <div className="absolute right-0 bottom-7 w-1 h-5 bg-red-500"></div>
          )}
        </div>
      )}
    </div>
  );
};

export default ServiceCard;