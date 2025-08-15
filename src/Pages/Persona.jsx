import React from "react";
import { Menu, X, User } from "lucide-react";
import { useState } from "react";
import {
  Settings,
  Headphones,
  Play,
  CheckCircle,
  ExternalLink,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
const Persona = () => {
  const openGoogleDrive = () => {
    // Replace with your specific Google Drive folder/file URL
    const googleDriveUrl =
      "https://drive.google.com/drive/folders/your-folder-id";
    window.open(googleDriveUrl, "_blank");
  };

  const goBack = () => {
    // Replace with your routing logic
    window.history.back();
    // or use: navigate(-1) for React Router
  };

  return (
    <div
      className="min-h-screen px-4 sm:px-6 lg:px-4"
      style={{ backgroundColor: "#2B2B2B" }}
    >
      <section className="max-w-7xl mx-auto py-12 lg:py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <img
            src="/Artist Avatar.png"
            alt="Logo"
            className="w-24 h-24 mx-auto mb-6 rounded-full"
          />
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
            Persona VR Experience
          </h1>
          <p className="text-gray-300 text-lg sm:text-xl max-w-2xl mx-auto">
            Immerse yourself in personalized virtual reality therapy sessions
            designed for your mental wellness journey.
          </p>
        </div>

        {/* VR Setup Guide */}
        <div
          className=" rounded-2xl p-8 mb-8"
          style={{ backgroundColor: "#3B3B3B" }}
        >
          <h2 className="text-2xl font-bold text-white mb-8 text-center flex items-center justify-center">
            <Settings className="mr-3" size={24} />
            VR Setup Roadmap
          </h2>

          {/* Roadmap Container */}
          <div className="relative max-w-5xl mx-auto">
            {/* Desktop Roadmap */}
            <div className="hidden lg:block">
              {/* Main Path Line */}
              <div className="absolute top-1/2 left-0 right-0 transform -translate-y-1/2">
                <div className="h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-green-500 rounded-full relative">
                  {/* Path dots */}
                  <div className="absolute top-1/2 left-1/4 w-3 h-3 bg-white rounded-full transform -translate-y-1/2"></div>
                  <div className="absolute top-1/2 left-2/4 w-3 h-3 bg-white rounded-full transform -translate-y-1/2"></div>
                  <div className="absolute top-1/2 left-3/4 w-3 h-3 bg-white rounded-full transform -translate-y-1/2"></div>
                </div>
              </div>

              {/* Steps */}
              <div className="relative grid grid-cols-3 gap-8 py-16">
                {/* Step 1 */}
                <div className="relative">
                  {/* Connection line to main path */}
                  <div className="absolute top-0 left-1/2 w-0.5 h-16 bg-purple-400 transform -translate-x-1/2 lg:hidden"></div>

                  <div className="bg-gradient-to-br from-purple-600 to-purple-800 rounded-2xl p-6 text-center shadow-2xl border border-purple-400 transform hover:scale-105 transition-all duration-300">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <span className="text-purple-600 font-bold text-2xl">
                        1
                      </span>
                    </div>
                    <h3 className="text-white font-bold text-xl mb-3">
                      Hardware Setup
                    </h3>
                    <div className="text-left space-y-2 text-purple-100 text-sm">
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-purple-300 rounded-full mr-2"></div>
                        <span>Connect VR headset</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-purple-300 rounded-full mr-2"></div>
                        <span>Install base stations</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-purple-300 rounded-full mr-2"></div>
                        <span>Configure controllers</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="relative">
                  {/* Connection line to main path */}
                  <div className="absolute top-0 left-1/2 w-0.5 h-16 bg-blue-400 transform -translate-x-1/2 lg:hidden"></div>

                  <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-6 text-center shadow-2xl border border-blue-400 transform hover:scale-105 transition-all duration-300">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <span className="text-blue-600 font-bold text-2xl">
                        2
                      </span>
                    </div>
                    <h3 className="text-white font-bold text-xl mb-3">
                      Software Launch
                    </h3>
                    <div className="text-left space-y-2 text-blue-100 text-sm">
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-blue-300 rounded-full mr-2"></div>
                        <span>Open Persona VR app</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-blue-300 rounded-full mr-2"></div>
                        <span>Complete room scan</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-blue-300 rounded-full mr-2"></div>
                        <span>Set play boundaries</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="relative">
                  {/* Connection line to main path */}
                  <div className="absolute top-0 left-1/2 w-0.5 h-16 bg-green-400 transform -translate-x-1/2 lg:hidden"></div>

                  <div className="bg-gradient-to-br from-green-600 to-green-800 rounded-2xl p-6 text-center shadow-2xl border border-green-400 transform hover:scale-105 transition-all duration-300">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <span className="text-green-600 font-bold text-2xl">
                        3
                      </span>
                    </div>
                    <h3 className="text-white font-bold text-xl mb-3">
                      Start Experience
                    </h3>
                    <div className="text-left space-y-2 text-green-100 text-sm">
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-green-300 rounded-full mr-2"></div>
                        <span>Choose therapy mode</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-green-300 rounded-full mr-2"></div>
                        <span>Select environment</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-green-300 rounded-full mr-2"></div>
                        <span>Begin session</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile/Tablet Roadmap */}
            <div className="lg:hidden">
              <div className="relative">
                {/* Vertical path line */}
                <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 via-blue-500 to-green-500 rounded-full"></div>

                <div className="space-y-8 relative">
                  {/* Step 1 */}
                  <div className="flex items-start space-x-6">
                    <div className="relative z-10">
                      <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-800 rounded-full flex items-center justify-center shadow-lg border-4 border-purple-400">
                        <span className="text-white font-bold text-xl">1</span>
                      </div>
                    </div>
                    <div className="flex-1 bg-gradient-to-r from-purple-600 to-purple-700 rounded-xl p-5 shadow-xl">
                      <h3 className="text-white font-bold text-lg mb-3">
                        Hardware Setup
                      </h3>
                      <div className="space-y-2 text-purple-100 text-sm">
                        <div>• Connect VR headset and controllers</div>
                        <div>• Install and position base stations</div>
                        <div>• Ensure stable power connections</div>
                      </div>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="flex items-start space-x-6">
                    <div className="relative z-10">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center shadow-lg border-4 border-blue-400">
                        <span className="text-white font-bold text-xl">2</span>
                      </div>
                    </div>
                    <div className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-5 shadow-xl">
                      <h3 className="text-white font-bold text-lg mb-3">
                        Software Launch
                      </h3>
                      <div className="space-y-2 text-blue-100 text-sm">
                        <div>• Launch Persona VR application</div>
                        <div>• Complete room-scale setup</div>
                        <div>• Calibrate play area boundaries</div>
                      </div>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="flex items-start space-x-6">
                    <div className="relative z-10">
                      <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-green-800 rounded-full flex items-center justify-center shadow-lg border-4 border-green-400">
                        <span className="text-white font-bold text-xl">3</span>
                      </div>
                    </div>
                    <div className="flex-1 bg-gradient-to-r from-green-600 to-green-700 rounded-xl p-5 shadow-xl">
                      <h3 className="text-white font-bold text-lg mb-3">
                        Start Experience
                      </h3>
                      <div className="space-y-2 text-green-100 text-sm">
                        <div>• Select your preferred therapy mode</div>
                        <div>• Choose immersive environment</div>
                        <div>• Begin your wellness journey</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* VR Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div
            className="rounded-2xl p-6"
            style={{ backgroundColor: "#3B3B3B" }}
          >
            <div className="flex items-center mb-4">
              <Headphones className="text-purple-500 mr-3" size={24} />
              <h3 className="text-white font-semibold text-xl">
                Immersive Audio
              </h3>
            </div>
            <p className="text-gray-400">
              3D spatial audio creates realistic soundscapes that enhance
              relaxation and focus during your therapy sessions.
            </p>
          </div>

          <div
            className="rounded-2xl p-6"
            style={{ backgroundColor: "#3B3B3B" }}
          >
            <div className="flex items-center mb-4">
              <Play className="text-blue-500 mr-3" size={24} />
              <h3 className="text-white font-semibold text-xl">
                Interactive Scenarios
              </h3>
            </div>
            <p className="text-gray-400">
              Engage with therapeutic environments designed to address anxiety,
              stress, and other mental health challenges.
            </p>
          </div>
        </div>

        {/* Safety Guidelines */}
        <div
          className=" rounded-2xl p-8 mb-8"
          style={{ backgroundColor: "#3B3B3B" }}
        >
          <h2 className="text-2xl font-bold text-white mb-6">
            Safety Guidelines
          </h2>
          <div className="space-y-4">
            <div className="flex items-start">
              <CheckCircle
                className="text-green-500 mr-3 mt-1 flex-shrink-0"
                size={20}
              />
              <p className="text-gray-300">
                Ensure you have adequate space (at least 6x6 feet) for safe
                movement
              </p>
            </div>
            <div className="flex items-start">
              <CheckCircle
                className="text-green-500 mr-3 mt-1 flex-shrink-0"
                size={20}
              />
              <p className="text-gray-300">
                Take breaks every 20-30 minutes to prevent VR fatigue
              </p>
            </div>
            <div className="flex items-start">
              <CheckCircle
                className="text-green-500 mr-3 mt-1 flex-shrink-0"
                size={20}
              />
              <p className="text-gray-300">
                Stop immediately if you experience dizziness or discomfort
              </p>
            </div>
            <div className="flex items-start">
              <CheckCircle
                className="text-green-500 mr-3 mt-1 flex-shrink-0"
                size={20}
              />
              <p className="text-gray-300">
                Consult with your therapist before starting VR therapy sessions
              </p>
            </div>
          </div>
        </div>

        {/* Google Drive Access */}
        <div className="max-w-7xl bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Access Your VR Resources
          </h2>
          <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
            Download additional VR content, guided meditation files, and
            personalized therapy materials from our secure Google Drive
            repository.
          </p>

          <button
            onClick={openGoogleDrive}
            className="bg-white hover:bg-gray-100 text-purple-600 font-semibold px-8 py-4 rounded-full transition-colors duration-300 inline-flex items-center space-x-3 text-lg"
          >
            <ExternalLink size={24} />
            <span>Open Google Drive</span>
          </button>

          <p className="text-purple-200 text-sm mt-4">
            Access to additional resources and personalized content
          </p>
        </div>
      </section>
    </div>
  );
};

export default Persona;
