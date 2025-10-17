// src/pages/Home.jsx
import React from "react";
import { useRef } from "react";
import { MdArrowOutward, MdArrowBack,MdArrowForward } from "react-icons/md";
import { BsFillHexagonFill } from "react-icons/bs";
import { ServiceCard } from "../components/ServiceCard";
import {TestimonialCard} from "../components/TestimonialCard"
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";

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

  const carouselRef = useRef(null);

  const testimonials = [
    {
      id: 1,
      text:
        "global age has transformed our logistics operations! Their on-time deliveries have helped us scale our business effortlessly. We trust them with every shipment!",
      author: "Michael R, Supply Chain Manager",
    },
    {
      id: 2,
      text:
        "Reliable, professional, and fast. Their team handled our complex shipments without a hitch — great partner for our company.",
      author: "Amina K, Operations Head",
    },
    {
      id: 3,
      text:
        "Excellent communication and flawless execution. Reduced our transit times and improved predictability.",
      author: "John D, Fleet Manager",
    },
    {
      id: 4,
      text:
        "Their technology-driven approach made coordination easy and transparent. Highly recommend for heavy logistics.",
      author: "Sara L, Logistics Lead",
    },
    {
      id: 5,
      text:
        "Very professional drivers and great customer service. We experienced fewer delays and clearer tracking.",
      author: "David P, Procurement",
    },
  ];

  function scrollNext() {
    const el = carouselRef.current;
    if (!el) return;
    // scroll by the width of the container (one page)
    el.scrollBy({ left: el.clientWidth, behavior: "smooth" });
  }

  function scrollPrev() {
    const el = carouselRef.current;
    if (!el) return;
    el.scrollBy({ left: -el.clientWidth, behavior: "smooth" });
  }

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

      <section
        id="objectives"
        className="sec-h-w my-16  w-full"
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-20">
            {/* Left column */}
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <BsFillHexagonFill className="text-black/90" />
                <span className="text-sm md:text-base font-medium">Key Objectives</span>
              </div>

              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl font-medium leading-tight text-neutral-900">
                Our aim at Global Age is to <span className="text-gray-400">develop
                systems and practices to improve</span>
                the way transport in the Ghanaian
                extractive industry is managed.
              </h2>

              <p className="mt-6 text-sm md:text-xl text-gray-400 max-w-2xl">
                The strategy of the use of simple but technologically innovative solutions in services delivery will be guided by the following objectives:
              </p>

              <ul className="mt-8 space-y-5 text-gray-500 max-w-xl">
                <li className="flex gap-4">
                  <span className="w-3 h-3 rounded-full bg-black mt-2"></span>
                  <span>Use of well-maintained trucks in transporting extractive materials for clients</span>
                </li>
                <li className="flex gap-4">
                  <span className="w-3 h-3 rounded-full bg-black mt-2"></span>
                  <span>Develop a programme for capacity development for all truck drivers and their assistants</span>
                </li>
                <li className="flex gap-4">
                  <span className="w-3 h-3 rounded-full bg-black mt-2"></span>
                  <span>Ensure effective driver/staff training on Environmental Protect Authority policies</span>
                </li>
                <li className="flex gap-4">
                  <span className="w-3 h-3 rounded-full bg-black mt-2"></span>
                  <span>Assist the government in reducing the ever-increasing rate of unemployment in the country</span>
                </li>
              </ul>

              <div className="mt-10">
                <button className="btn-black inline-flex items-center gap-3 px-8 py-3 rounded-full text-base font-medium">
                  Why choose us <MdArrowOutward size={18} />
                </button>
              </div>
            </div>

            {/* Right column - image */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
              <div className="relative rounded-2xl overflow-hidden shadow-lg max-w-md lg:max-w-none w-full">
                <img
                  src="/Images/object-img.png"
                  alt="warehouse manager"
                  className="w-full h-auto object-cover block"
                />

                {/* credit overlay bottom-right */}
                <div className="absolute bottom-4 right-4 bg-black/60 text-white text-xs px-3 py-1 rounded-md">
                  iStock
                  <span className="ml-2 text-[10px] opacity-80">Credit: bernardbodo</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    <section id="testimonials" className="sec-h-w my-26 w-full">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header + controls */}
        <div className="flex items-start justify-between mb-8">
          <div>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-medium text-black leading-tight">
              Trusted by <span className="text-gray-400">Businesses</span>
              <br />
              Driven by <span className="text-gray-400">Excellence</span>
            </h3>
          </div>
          <div className="flex gap-4 items-center">
            <button
              onClick={scrollPrev}
              aria-label="previous"
              className="w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center shadow"
            >
              <MdArrowBack />
            </button>
            <button
              onClick={scrollNext}
              aria-label="next"
              className="w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center shadow"
            >
              <MdArrowForward />
            </button>
          </div>
        </div>

        <div
          ref={carouselRef}
          className="flex gap-6 overflow-x-hidden snap-x snap-mandatory "
        >
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="snap-start flex-shrink-0 w-[90%] sm:w-[45%] lg:w-[30%] m-2"
            >
              <TestimonialCard text={t.text} author={t.author} rating={t.rating} />
            </div>
          ))}
        </div>


      </div>
    </section>

    <section className="sec-h-w my-26 w-full">
      <div className="md:w-3/4 mx-auto"><Contact/></div>
          
    </section>

    <Footer/>
    </>
  );
}
