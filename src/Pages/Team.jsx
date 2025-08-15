/* import React from "react";
const MemberCard = ({ image, name, designation }) => {
  return (
    <div className="w-52 h-64 bg-white rounded-md shadow-lg overflow-hidden relative group cursor-pointer">
      
      <div className="bg-neutral-900 flex items-center justify-center h-full transform transition-transform duration-500 group-hover:-translate-y-1/5">
        <img
          src={image}
          alt={name}
          className="h-52 object-cover rounded-md m-1"
        />
      </div>

     
      <div className="absolute inset-0 flex items-center justify-center bg-blue-50 -z-10">
        <div className="flex flex-col items-center justify-end h-full w-11/12 bg-blue-50 pb-3 gap-1">
          <p className="text-black font-medium text-base">{name}</p>
          <p className="text-gray-700 text-sm">{designation}</p>
        </div>
      </div>
    </div>
  );
}; */ /* 
import React, { useState } from "react";

const MemberCard = ({ image, name, designation }) => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div
      className="w-52 h-64 bg-white rounded-md shadow-lg overflow-hidden relative group cursor-pointer"
      onClick={() => setShowInfo(!showInfo)}
    >
      
      <div
        className={`absolute inset-0 flex flex-col items-center justify-end bg-blue-50 z-0 p-3 transition-opacity duration-500
                    ${
                      showInfo ? "opacity-100" : "opacity-0"
                    } group-hover:opacity-100`}
      >
        <p className="text-black font-medium text-base">{name}</p>
        <p className="text-gray-700 text-sm">{designation}</p>
      </div>

     
      <div className="flex items-center justify-center h-full transform transition-transform duration-500 group-hover:-translate-y-1/5">
        <img
          src={image}
          alt={name}
          className="h-52 object-cover rounded-md m-1"
        />
      </div>
    </div>
  );
};

const TeamSection = () => {
  const teams = [
    {
      _id: 1,
      image: "/team1.jpg",
      name: "Alex Johnson",
      designation: "VR Experience Designer",
    },
    {
      _id: 2,
      image: "/team2.jpg",
      name: "Priya Sharma",
      designation: "AI & Sensor Specialist",
    },
    {
      _id: 3,
      image: "/team3.jpg",
      name: "Michael Lee",
      designation: "Clinical Psychologist",
    },
    {
      _id: 4,
      image: "/team4.jpg",
      name: "Sara Patel",
      designation: "Therapist & Wellness Coach",
    },
    {
      _id: 5,
      image: "/team5.jpg",
      name: "David Kim",
      designation: "Yoga & Mindfulness Instructor",
    },
  ];

  return (
    <div className="bg-[#2B2B2B] py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-purple-400 text-4xl font-bold mb-12">Our Team</h2>

        
        <div className="flex justify-between gap-10 mb-16 flex-wrap">
          {teams.slice(0, 3).map((member) => (
            <MemberCard
              key={member._id}
              image={member.image}
              name={member.name}
              designation={member.designation}
            />
          ))}
        </div>

        
        <div className="flex justify-evenly gap-10 flex-wrap">
          {teams.slice(3, 5).map((member) => (
            <MemberCard
              key={member._id}
              image={member.image}
              name={member.name}
              designation={member.designation}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
 */

import React, { useState } from "react";

const MemberCard = ({ image, name, designation }) => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div
      className="w-52 h-64 bg-white rounded-md shadow-lg overflow-hidden relative group cursor-pointer"
      onClick={() => setShowInfo(!showInfo)}
    >
      {/* Info Section */}
      <div
        className={`absolute inset-0 flex flex-col items-center justify-end bg-blue-50 z-0 p-3 transition-opacity duration-500
                    ${
                      showInfo ? "opacity-100" : "opacity-0"
                    } group-hover:opacity-100`}
      >
        <p className="text-black font-medium text-base">{name}</p>
        <p className="text-gray-700 text-sm">{designation}</p>
      </div>

      {/* Profile Image */}
      <div className="flex items-center justify-center h-full transform transition-transform duration-500 group-hover:-translate-y-1/5">
        <img
          src={image}
          alt={name}
          className="h-52 object-cover rounded-md m-1"
        />
      </div>
    </div>
  );
};

const TeamSection = () => {
  const teams = [
    {
      _id: 1,
      image: "/team1.jpg",
      name: "Alex Johnson",
      designation: "VR Experience Designer",
    },
    {
      _id: 2,
      image: "/team2.jpg",
      name: "Priya Sharma",
      designation: "Software Developer",
    },
    {
      _id: 3,
      image: "/team3.jpg",
      name: "Michael Lee",
      designation: "AI & Sensor Specialist",
    },
    {
      _id: 4,
      image: "/team4.jpg",
      name: "Sara Patel",
      designation: "Therapist & Wellness Coach",
    },
    {
      _id: 5,
      image: "/team5.png",
      name: "David Kim",
      designation: "Yoga Instructor",
    },
  ];

  return (
    <div className="bg-[#2B2B2B] py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-purple-400 text-4xl font-bold mb-12">Our Team</h2>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 justify-items-center">
          {teams.map((member) => (
            <MemberCard
              key={member._id}
              image={member.image}
              name={member.name}
              designation={member.designation}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
