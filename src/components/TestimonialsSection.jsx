import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FaQuoteLeft } from 'react-icons/fa';

const testimonials = [
  {
    id: 1,
    text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident ea commodo consequat aute irure sint amet occaecat cupidatat non proident",
    author: "Chris",
    position: "President and CEO, PrintReach, USA",
    rating: 4.5,
    avatar: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    id: 2,
    text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident ea commodo consequat aute irure sint amet occaecat cupidatat non proident",
    author: "Chris",
    position: "President and CEO, PrintReach, USA",
    rating: 4.5,
    avatar: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    id: 3,
    text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident ea commodo consequat aute irure sint amet occaecat cupidatat non proident",
    author: "Chris",
    position: "President and CEO, PrintReach, USA",
    rating: 4.5,
    avatar: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    id: 4,
    text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident ea commodo consequat aute irure sint amet occaecat cupidatat non proident",
    author: "Chris",
    position: "President and CEO, PrintReach, USA",
    rating: 4.5,
    avatar: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    id: 5,
    text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident ea commodo consequat aute irure sint amet occaecat cupidatat non proident",
    author: "Chris",
    position: "President and CEO, PrintReach, USA",
    rating: 4.5,
    avatar: "https://randomuser.me/api/portraits/women/44.jpg"
  }
];

const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
  
  return (
    <div className="flex">
      {[...Array(fullStars)].map((_, i) => (
        <svg key={`full-${i}`} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3 .921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784 .57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81 .588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
      
      {hasHalfStar && (
        <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
          <defs>
            <linearGradient id="half-star-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="50%" stopColor="currentColor" />
              <stop offset="50%" stopColor="#D1D5DB" />
            </linearGradient>
          </defs>
          <path fill="url(#half-star-gradient)" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3 .921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784 .57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81 .588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      )}
      
      {[...Array(emptyStars)].map((_, i) => (
        <svg key={`empty-${i}`} className="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3 .921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784 .57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81 .588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
};

StarRating.propTypes = {
  rating: PropTypes.number.isRequired
};

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mx-2 flex flex-col h-full">
      <div className="flex justify-between items-center mb-4">
        <svg width="24" height="24" className="text-xl font-bold">
          <defs>
            <linearGradient id="quoteGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FFA229" />
              <stop offset="100%" stopColor="#1C4670" />
            </linearGradient>
          </defs>
          <FaQuoteLeft fill="url(#quoteGradient)" className="w-6 h-6" />
        </svg>
        <StarRating rating={testimonial.rating} />
      </div>
      <p className="text-gray-600 mb-6 flex-grow">
        {testimonial.text}
      </p>
      <div className="flex items-center mt-4">
        <img 
          src={testimonial.avatar} 
          alt={testimonial.author} 
          className="w-12 h-12 rounded-full mr-4 object-cover"
        />
        <div>
          <h4 className="font-bold text-gray-800">{testimonial.author}</h4>
          <p className="text-gray-600 text-sm">{testimonial.position}</p>
        </div>
      </div>
    </div>
  );
};

TestimonialCard.propTypes = {
  testimonial: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    avatar: PropTypes.string.isRequired
  }).isRequired
};

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleCount(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - visibleCount : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex + 1) % (testimonials.length - visibleCount + 1)
    );
  };

  const visibleTestimonials = testimonials.slice(
    currentIndex,
    currentIndex + visibleCount
  );

  return (
    <div className="bg-testimonial-blue py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            What peoples says about us
          </h2>
          <div className="flex space-x-2">
            <button 
              onClick={handlePrev}
              className="bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
              aria-label="Previous testimonial"
            >
              <svg className="w-6 h-6 text-testimonial-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={handleNext}
              className="bg-testimonial-orange rounded-full p-2 shadow-lg hover:bg-yellow-500 transition-colors"
              aria-label="Next testimonial"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleTestimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>

        <div className="flex justify-center mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 w-2 mx-1 rounded-full ${
                index >= currentIndex && index < currentIndex + visibleCount
                  ? 'bg-testimonial-orange'
                  : 'bg-white bg-opacity-50'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;