import React, { useEffect, useRef } from "react";
import img from "../assets/Adobe Express - file.png";
import Typed from "typed.js";
import "../App.css";

export default function Home() {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        "Welcome to my profile",
        "My Name is Md. Hasnain Ahmed",
        "I'm a Full Stack Developer",
        "Also Mobile App Developer with React Native",
        "I love to code ❤️",
      ],
      typeSpeed: 50,
      backSpeed: 40,
      loop: true,
    });

    return () => typed.destroy();
  }, []);

  return (
    <section
      id="home"
      className="w-full mt-10  bg-[#0b1e39] text-white
                 flex flex-col md:flex-row items-center justify-center lg:gap-44 gap-20 sm:px-6 md:px-12 py-20"
    >
      {/* Left Section */}
      <div
        className="flex-1 sm:max-w-lg md:max-w-md text-center md:text-left 
                   border-2 border-yellow-200 rounded-lg bg-black p-6 shadow-xl shadow-lime-200
                   flex-shrink-0"
        data-aos="fade-up-right"
        data-aos-duration="1000"
      >
        <h1
          ref={typedRef}
          className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold mb-6 min-h-[100px]"
        ></h1>
        <a
          href="/public/cv.pdf"
          download="FinalResume.docx"
          className="inline-block px-6 py-2 border-2 border-yellow-200 text-white font-semibold 
                     hover:bg-yellow-300 hover:text-black transition duration-300 rounded-md"
        >
          Download Resume
        </a>
      </div>

      {/* Right Section */}
      <div
        className="right flex-1 sm:max-w-sm md:max-w-md flex justify-center items-center flex-shrink-0 "
        data-aos="fade-up-left"
        data-aos-duration="1000"
      >
        <div className="img glow-container relative aspect-square  max-w-[320px] w-full h-auto border-[4px] border-yellow-400 rounded-full animate-pulse">
          <img
            src={img}
            alt="Profile"
            className="w-full h-full object-cover rounded-full  relative z-10 max-w-full border-2  shadow-2xl shadow-lime-200"
          />
          <div className="glow-circle absolute top-0 left-0 w-full h-full rounded-full z-0"></div>
        </div>
      </div>
    </section>
  );
}
