import React, { useState } from "react";
import { Eye } from "lucide-react";
import Lottie from "lottie-react";
import animationData from "/lDpNaR6fmm.json";

const Characters = () => {
  const [selectedPersona, setSelectedPersona] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showAnimation, setShowAnimation] = useState(false);

  const personas = [
    { id: 1, name: "Mother", image: "/Artist Avatar.png", description: "Nurturing and understanding, always there to listen" },
    { id: 2, name: "Father", image: "/Artist Avatar.png", description: "Protective and encouraging, offers life guidance" },
    { id: 3, name: "Best Friend", image: "/Artist Avatar.png", description: "Fun and loyal, understands you completely" },
    { id: 4, name: "Brother", image: "/Artist Avatar.png", description: "Supportive and reliable, always has your back" },
    { id: 5, name: "Sister", image: "/Artist Avatar.png", description: "Supportive and fun, partner in crime" },
    { id: 6, name: "Boyfriend", image: "/Artist Avatar.png", description: "" },
    { id: 7, name: "Girlfriend", image: "/Artist Avatar.png", description: "Understanding and relatable, like a partner" },
    { id: 8, name: "Cousin", image: "/Artist Avatar.png", description: "Wise and patient, helps you grow and learn" },
  ];

  const handlePersonaSelect = (persona) => {
    setSelectedPersona(persona);
  };

  const handleStartConversation = () => {
    setShowModal(true);
  };

 const handleAgree = () => {
  setShowModal(false);
  setShowAnimation(true);

  setTimeout(() => {
    setShowAnimation(false);
    window.location.href = "https://drive.google.com/file/d/1JthZV47hNSw9wSShuS_ArQw82fu5FH8J/view?usp=sharing";
  }, 3000);
};


  return (
    <div className="min-h-screen p-6">
      <div className="mx-auto">
        {/* Header */}
        <div className="flex justify-center items-center mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">
            Choose Your Support Companion
          </h1>
        </div>

        {/* Persona Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {personas.map((persona, index) => (
            <div
              key={persona.id}
              onClick={() => handlePersonaSelect(persona)}
              className={`relative group cursor-pointer transform transition-all duration-300 hover:scale-105 ${
                selectedPersona?.id === persona.id ? "ring-2 ring-purple-400" : ""
              }`}
            >
              <div
                className="rounded-xl p-8 border border-slate-700 hover:border-purple-500 transition-colors h-full relative"
                style={{ backgroundColor: "#3B3B3B" }}
              >
                <div className="absolute top-4 left-4 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </div>

                <div className="relative mb-3">
                  <img
                    src={persona.image}
                    alt={persona.name}
                    className="w-32 h-32 rounded-full mx-auto object-cover ring-4 ring-slate-600 group-hover:ring-purple-500 transition-colors"
                  />
                </div>

                <h3 className="text-white text-lg font-semibold text-center">
                  {persona.name}
                </h3>
              </div>
            </div>
          ))}
        </div>

        <div className="m-6 text-center">
          <p className="text-slate-400 text-sm">
            Click on any persona to start your emotional support journey
          </p>
        </div>

        {/* Selected Persona */}
        {selectedPersona && (
          <div
            className="border-l-4 border-purple-500 rounded-lg p-6 mb-6 animate-in slide-in-from-bottom-4 duration-300"
            style={{ backgroundColor: "#3b3b3b" }}
          >
            <div className="flex items-start gap-4">
              <img
                src={selectedPersona.image}
                alt={selectedPersona.name}
                className="w-12 h-12 rounded-full object-cover ring-2 ring-purple-400"
              />
              <div className="flex-1">
                <h3 className="text-white font-semibold mb-2">
                  {selectedPersona.name} is ready to support you
                </h3>
                <p className="text-slate-300 text-sm mb-3">
                  "Hello there! I'm here to listen and provide the emotional
                  support you need. Feel free to share what's on your mind - I'm
                  ready whenever you are."
                </p>
                <div className="flex items-center gap-4">
                  <button
                    onClick={handleStartConversation}
                    className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg font-medium text-sm transition-colors"
                  >
                    Start Conversation
                  </button>
                  <button
                    onClick={() => setSelectedPersona(null)}
                    className="text-slate-400 hover:text-white text-sm transition-colors"
                  >
                    Choose Different
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-black/60 bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-slate-800 p-6 rounded-2xl shadow-xl max-w-md w-full">
              <h2 className="text-xl text-white font-semibold mb-4">
                Conversation Guidelines
              </h2>
              <p className="text-slate-300 mb-6 text-sm">
                Please wear the headset and emotion detector.
This will help us understand your emotions better, so you can have the right and immersive experience.
              </p>
              <div className="flex justify-end gap-4">
                <button
                  onClick={() => setShowModal(false)}
                  className="text-slate-400 hover:text-white px-4 py-2 text-sm"
                >
                  Cancel
                </button>
                <button
                  onClick={handleAgree}
                  className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg font-medium text-sm"
                >
                  Agree & Start
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Animation Screen */}
        {showAnimation && (
          <div className=" fixed inset-0 bg-black/60 flex flex-col items-center justify-center z-50">
            <Lottie animationData={animationData} loop={false} />

            <h2 className="mt text-white"> 
              getting info...
            </h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default Characters;
