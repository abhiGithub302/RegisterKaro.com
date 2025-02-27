function WhyChooseCard({ icon, title, description, bgColor, learnMoreText = "Learn more" }) {
    return (
      <div className={`service-card border-2 border-pink-100 p-6 rounded-lg ${bgColor}`}>
        <div className="service-icon text-primary text-3xl mb-3">
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-3 text-black">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        {/* <a href="#" className="flex items-center text-blue-600 hover:text-blue-800 transition duration-300">
          {learnMoreText} 
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </a> */}
      </div>
    );
}

export default WhyChooseCard;
