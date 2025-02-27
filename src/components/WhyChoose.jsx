import WhyChooseCard from "./WhyChooseCard";

import { MdOutlineSecurity } from "react-icons/md";
import { SiTicktick } from "react-icons/si";
import { ImHappy2 } from "react-icons/im";
import { FaUserTie } from "react-icons/fa6";

function WhyChoose() {
  return (
    <div className="bg-white max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left side content - First row */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <h4 className="text-secondary uppercase tracking-wider font-medium mb-3">
              WHY REGISTERKARO.IN
            </h4>
            <h2 className="text-4xl font-bold text-black mb-6">
              Why Choose Register Karo
            </h2>
            <p className="text-gray-600 mb-8">
              It is with consistent services and results that build trust with
              the people and that in turn help us to serve the business better.
            </p>
          </div>

          {/* Right side cards - First row */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6 ">
            <WhyChooseCard
              icon={<MdOutlineSecurity size={48} className="text-orange-600" />}
              title="Confidential & Safe"
              description="All your private information is safe with us"
              bgColor="bg-pink-100"
            />
            <WhyChooseCard
              icon={<SiTicktick size={48} className="text-green-500" />}
              title="No Hidden Fee"
              description="Everything is put before you with no hidden charges ch or conditions"
              bgColor="bg-green-50"
            />
          </div>
        </div>

        {/* Second row - Three cards starting from middle */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-8">
          {/* Empty space on the left (half of the text section) */}
          <div className="lg:col-span-2 hidden lg:block">
            {/* This is an empty div to maintain the grid layout */}
          </div>

          {/* Three cards starting from the middle */}
          <div className="lg:col-span-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            <WhyChooseCard
              icon={<ImHappy2 size={48} className="text-blue-500" />}
              title="Guaranteed Satisfaction"
              description="We ensure that you stay 100% satisfied with our offered services"
              bgColor="bg-green-50"
            />
            <WhyChooseCard
              icon={<FaUserTie size={48} className="text-pink-700" />}
              title="Expert CA/CS Assistance"
              description="Prompt support from our in-house expert professional"
              bgColor="bg-pink-50"
            />
            <WhyChooseCard
              icon={<MdOutlineSecurity size={48} className="text-orange-600" />}
              title="Confidential & Safe"
              description="As your private intermation is sale with us"
              bgColor="bg-green-50"
            />
          </div>
        </div>

        {/* See All Services button */}
        {/* <div className="text-center mt-12">
      <button className="bg-secondary hover:bg-secondary/90 text-white font-medium py-3 px-8 rounded-md transition-colors">
        See All Services
      </button>
    </div> */}
      </div>
    </div>
  );
}

export default WhyChoose;
