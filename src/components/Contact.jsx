import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { ImFacebook2 } from "react-icons/im";
import { FaLinkedin, FaSquareGithub, FaSquareTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";
import { GrYoutube } from "react-icons/gr";
import "../App.css"; // Ensure you have the correct path to your CSS file

export default function Contact() {
  const socialLinks = [
    {
      id: 1,
      icon: (
        <AiFillInstagram className="w-16 h-16 border-2 border-yellow-200 rounded-full p-2 shadow-md shadow-lime-200" />
      ),
      link: "https://www.instagram.com/hasnain_rajon/",
      color: "hover:text-pink-500 hover:shadow-pink-400",
    },
    {
      id: 2,
      icon: (
        <ImFacebook2 className="w-16 h-16 border-2 border-yellow-200 rounded-full p-2 shadow-md shadow-lime-200" />
      ),
      link: "https://web.facebook.com/mdhasnain.ahmed.714/",
      color: "hover:text-blue-600 hover:shadow-blue-400",
    },
    {
      id: 3,
      icon: (
        <FaLinkedin className="w-16 h-16 border-2 border-yellow-200 rounded-full p-2 shadow-md shadow-lime-200" />
      ),
      link: "https://www.linkedin.com/",
      color: "hover:text-blue-500 hover:shadow-blue-300",
    },
    {
      id: 4,
      icon: (
        <FaSquareGithub className="w-16 h-16 border-2 border-yellow-200 rounded-full p-2 shadow-md shadow-lime-200" />
      ),
      link: "https://github.com/Hasnainmunshi",
      color: "hover:text-gray-800 hover:shadow-gray-500",
    },
    {
      id: 5,
      icon: (
        <GrYoutube className="w-16 h-16 border-2 border-yellow-200 rounded-full p-2 shadow-md shadow-lime-200" />
      ),
      link: "https://www.youtube.com/@sportsbd691",
      color: "hover:text-red-500 hover:shadow-red-300",
    },
    {
      id: 6,
      icon: (
        <FaSquareTwitter className="w-16 h-16 border-2 border-yellow-200 rounded-full p-2 shadow-md shadow-lime-200" />
      ),
      link: "https://x.com/MdHasnainA88193",
      color: "hover:text-sky-500 hover:shadow-sky-300",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12" id="contact">
      <h1 className="text-3xl font-bold mb-2">Contact Me</h1>
      <div className="flex justify-center mt-8 items-center gap-6 flex-wrap">
        {socialLinks.map(({ id, icon, link, color }) => (
          <motion.a
            key={id}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className={`text-gray-700 transition transform shadow-lg rounded-full p-3 ${color}`}
            whileHover={{
              scale: 1.2,
              rotate: 5,
              boxShadow: "0px 0px 20px rgba(0,0,0,0.2)",
            }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            data-aos="zoom-in"
            data-aos-duration="2000"
          >
            {icon}
          </motion.a>
        ))}
      </div>
    </div>
  );
}
