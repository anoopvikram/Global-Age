// src/pages/Home.jsx
import React from "react";
import { MdArrowOutward } from "react-icons/md";
import { BsFillHexagonFill } from "react-icons/bs";
import { ServiceCard } from "../components/ServiceCard";

export default function Home() {

 const servicesData = [
  {
    name: "Mining",
    description: "Mining support in terms of transportation or haulage.",
    image: "/Images/service-1.png",
    
  },
  {
    name: "Civil engineering",
    description: "Civil engineering (building and road construction)",
    image: "/Images/service-2.png",
    
  },
  {
    name: "Importation of mining",
    description: "Importation of mining and construction equipment’s (excavators, bull dozers, motor graders,tipper trucks, etc.)",
    image: "/Images/service-3.png",
   
  },
    {
    name: "Supply of earthmoving",
    description: "Supply of earthmoving and mining equipment’s (excavators, dozers, tipper trucks) to both small-and largescale companies.",
    image: "/Images/service-4.png",
   
  },
    {
    name: "Oil and gas",
    description: "Oil and gas (exploration and investments) consultants",
    image: "/Images/service-5.jpg",
   
  },
];

  return (
    <>
      <section
        id="home"
        className="h-[60vh] sm:h-[65vh] md:h-[75vh] lg:h-[85vh] xl:h-[95vh] w-full bg-cover bg-no-repeat bg-center flex flex-col justify-center mt-10 px-6"
        style={{ backgroundImage: "url('/Images/banner.jpg')" }}
      >
        <div className="max-w-5xl md:ml-10 text-white space-y-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium leading-tight">
            Swift delivery,<br /> smart logistics.
          </h1>
          <p className="text-base sm:text-lg md:text-xl max-w-md">
            Efficient logistics solutions, ensuring seamless transportation and supply chain management.
          </p>
          <button className="btn-gradient flex items-center gap-3 whitespace-nowrap">
            Our services <MdArrowOutward />
          </button>
        </div>
      </section>

      <section
        id="about"
        className="sec-h-w bg-cover bg-no-repeat bg-center flex items-center px-6 py-12"
      >
        <div className="w-full flex flex-col md:flex-row gap-6 md:gap-20">

          <div className=" flex flex-col justify-start  space-y-6 md:space-y-58">
            <p className="flex items-center gap-2 text-sm md:text-base"><BsFillHexagonFill />About Us</p>

            <button className="btn-black flex items-center gap-3 whitespace-nowrap w-fit">
              About Company <MdArrowOutward />
            </button>
          </div>

          <div className="flex-1 flex flex-col justify-center space-y-6 md:space-y-8">
            <p className="text-lg md:text-4xl text-[#6F6F6F]">
              We are committed to our customers and partners and have a <span className="text-black">passion for what we do, and these values are reflective </span>in our engagement with clients.
            </p>
            <p className="text-base md:text-xl text-[#6F6F6F]">
              The company is managed by competent professionals who delivers services to clients with commitment, dedication and loyal ty, with a common vision and aspiration of ensuring the company become a partner of choice to potential client
            </p>
            <img src="/Images/about.png" className="md:h-[300px] h-[200px] w-auto mx-auto md:mx-0" alt="about" />
          </div>

        </div>

      </section>

      <section 
      id='services'
      className="sec-h-w my-15">
        <div>
            <h2 className="text-3xl m-5">Our Services</h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 p-8 bg-gray-50">
                {servicesData.map((service, index) => (
                    <ServiceCard key={index} service={service} />
                ))}
                </div>
        </div>
      </section>

      <section 
        id='mission'
        className="sec-h-w my-16 gradient-bg w-full"
      >
        <div className="flex flex-col md:w-3/4 mx-auto gap-16 lg:gap-24 py-12 md:py-20 text-white">
          {/* Mission Block */}
          <div className="flex flex-col md:flex-row items-center gap-8 lg:gap-16">
            <div className="flex flex-col gap-3 w-full md:w-1/2 text-center md:text-left">
              <p className="flex items-center justify-center md:justify-start gap-2 text-sm md:text-base">
                <BsFillHexagonFill /> Our Mission
              </p>
              <p className="text-base md:text-lg leading-relaxed">
                To be the partner of choice through the provision of transport, haulage and warehousing services to the extractive industry in the West African Region.
              </p>
            </div>
            <img 
              src='/Images/mission.png' 
              className="w-[250px] sm:w-[300px] md:w-[400px] lg:w-[500px] h-auto mx-auto md:mx-0" 
              alt="mission"
            />
          </div>

          {/* Vision Block */}
          <div className="flex flex-col md:flex-row items-center gap-8 lg:gap-16">
            <img 
              src='/Images/vision.png' 
              className="w-[250px] sm:w-[300px] md:w-[400px] lg:w-[500px] h-auto mx-auto md:mx-0" 
              alt="vision"
            />
            <div className="flex flex-col gap-3 w-full md:w-1/2 text-center md:text-left">
              <p className="flex items-center justify-center md:justify-start gap-2 text-sm md:text-base">
                <BsFillHexagonFill /> Our Vision
              </p>
              <p className="text-base md:text-lg leading-relaxed">
                Our vision is to develop and grow as a fully integrated Ghanaian private company with operations in Ghana and West Africa.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
