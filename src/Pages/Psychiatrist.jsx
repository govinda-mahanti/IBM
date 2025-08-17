import { useState } from "react";
import DrJane from "../../public/D1.jpg";
import DrMark from "../../public/D2.jpg";
import DrLiam from "../../public/D3.jpg";
import DrSarah from "../../public/D4.jpg";
import DrEmily from "../../public/D5.jpg";
import DrAlex from "../../public/D1.jpg";
import { FaPhoneAlt, FaVideo } from "react-icons/fa";

const PsychiatristServices = () => {
  const doctors = [
    {
      id: 1,
      name: "Dr. Jane Smith",
      specialty: "CBT & Anxiety Disorders",
      image: DrJane,
    },
    {
      id: 2,
      name: "Dr. Mark Lee",
      specialty: "Depression & Mood Disorders",
      image: DrMark,
    },
    {
      id: 3,
      name: "Dr. Liam Patel",
      specialty: "Couples & Trauma Therapy",
      image: DrLiam,
    },
    {
      id: 4,
      name: "Dr. Sarah Chen",
      specialty: "General Psychiatry",
      image: DrSarah,
    },
    {
      id: 5,
      name: "Dr. Emily Johnson",
      specialty: "Child & Adolescent Psychiatry",
      image: DrEmily,
    },
    {
      id: 6,
      name: "Dr. Alex Brown",
      specialty: "Geriatric Psychiatry",
      image: DrAlex,
    },
  ];

  const handleConsult = (type, doctor) => {
    alert(
      `You selected: ${type} with ${doctor.name}\n\nThis would open the booking system or consultation flow.`
    );
  };

  return (
    <div className="bg-gray-900 min-h-screen font-sans pt-[64px]">
      <div className="container mx-auto px-4 py-16">
        {/* Doctors Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center text-white mb-10">
            Meet Our Psychiatrists
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {doctors.map((doc) => (
              <div
                key={doc.id}
                className="bg-white/5 rounded-2xl overflow-hidden backdrop-blur-md border border-white/10 text-center p-6 hover:-translate-y-2 transition transform hover:shadow-xl"
              >
                <img
                  src={doc.image}
                  alt={doc.name}
                  className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
                />
                <h3 className="text-xl font-semibold text-white">{doc.name}</h3>
                <p className="text-gray-400 mb-4">{doc.specialty}</p>

                {/* Consultation Options */}
                <div className="flex flex-col gap-3">
                  <div className="flex flex-row justify-around">
                    {" "}
                    <button
                      onClick={() => handleConsult("📞 Call Consultation", doc)}
                      className="px-4 py-2 rounded-lg bg-gray-600 text-white font-medium shadow-md hover:scale-105 transition"
                    >
                      <FaPhoneAlt />
                    </button>
                    <button
                      onClick={() =>
                        handleConsult("🎥 Video Consultation", doc)
                      }
                      className="px-4 py-2 bg-gray-600 rounded-lg text-white font-medium shadow-md hover:scale-105 transition"
                    >
                      <FaVideo />
                    </button>
                  </div>
                  <button
                    onClick={() => handleConsult("💊 Get Prescription", doc)}
                    className="px-4 py-2 rounded-lg  bg-gradient-to-r from-indigo-400 to-purple-600  text-white font-medium shadow-md hover:scale-105 transition"
                  >
                    Book a Consultation
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        {/* <div className="text-center">
          <button
            onClick={() =>
              alert("This would open a general booking system for all doctors.")
            }
            className="px-6 py-3 rounded-full bg-gradient-to-r from-indigo-400 to-purple-600 font-semibold shadow-lg hover:scale-105 transition text-white"
          >
            Book a Consultation
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default PsychiatristServices;
