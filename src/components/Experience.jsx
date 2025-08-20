import React from "react";
import experience from "../components/Data/experience.json";
import "../App.css";

export default function Experience() {
  return (
    <div className="flex items-center justify-center p-4" id="experience">
      <div className="max-w-5xl w-full">
        {/* Section Title */}
        <div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-center mb-6 sm:mb-8">
            Experience
          </h1>
        </div>

        {experience.map((data) => {
          return (
            <div
              key={data.id}
              className="w-full flex flex-col md:flex-row items-center md:items-start md:justify-between gap-4 sm:gap-6 m-2 sm:m-4 p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-md sm:shadow-lg shadow-lime-200 bg-black text-center md:text-left"
              data-aos="zoom-in"
              data-aos-duration="1000"
            >
              {/* Left side (Image) */}
              <div className="lefts w-full sm:w-[200px] md:w-1/3 flex justify-center md:justify-start">
                <img
                  className="w-24 h-16 sm:w-28 sm:h-20 md:w-32 md:h-24 object-contain"
                  src={`/assets/${data.imageSrc}`}
                  alt={data.role}
                />
              </div>

              {/* Right side (Content) */}
              <div className="right w-full md:w-2/3 text-white space-y-2 sm:space-y-3">
                <h2 className="text-lg sm:text-xl md:text-2xl font-semibold">
                  {data.role}
                </h2>
                <h2 className="text-base sm:text-lg md:text-xl font-semibold">
                  {data.organisation}
                </h2>
                <h4 className="text-sm sm:text-base md:text-lg font-medium">
                  <span className="text-lime-400 block sm:inline">
                    {data.startDate} - {data.endDate}
                  </span>
                  <span className="text-yellow-200 block sm:inline sm:ml-2">
                    {data.location}
                  </span>
                </h4>

                {/* Responsibilities */}
                <ul className="list-disc list-inside text-yellow-200 text-xs sm:text-sm md:text-base space-y-1">
                  {data.experiences.map((exp, index) => (
                    <li key={index}>{exp}</li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
