import React from "react";
import TeamSection from "./Team";

const About = () => {
  return (
    <div className="bg-[#2B2B2B] text-white min-h-screen px-6 lg:px-16 py-12 pt-[64px]">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h1 className="text-4xl font-bold text-purple-400 mb-6">About Us</h1>
        <p className="text-lg leading-relaxed mb-10 text-gray-200">
          At <span className="font-semibold text-purple-300">NeuroCare</span>, 
          we believe that mental wellness is just as essential as physical health. 
          Our mission is to build a safe, immersive, and supportive space where 
          people can overcome depression, anxiety, or emotional stress while 
          finding balance, peace, and strength within themselves.
        </p>

        {/* Vision Section */}
        <section className="space-y-6">
          <p className="text-gray-200 leading-relaxed">
            We combine{" "}
            <span className="text-purple-300 font-medium">AR, VR, and AI technologies</span>{" "}
            with real-time{" "}
            <span className="text-purple-300 font-medium">
              emotion sensing, biometric data, and facial expression analysis
            </span>{" "}
            to understand how users feel and provide personalized support tailored 
            to their unique emotional state.
          </p>

          <p className="text-gray-200 leading-relaxed">
            Once your mood is recognized, NeuroCare guides you through{" "}
            <span className="font-semibold text-purple-300">four core pathways</span>{" "}
            for healing and relaxation:
          </p>

          {/* Four Pathways */}
          <ul className="list-disc list-inside space-y-3 text-gray-300">
            <li>
              <span className="text-purple-300 font-medium">
                Persona-based VR Environments:
              </span>{" "}
              Choose a comforting persona like a sister, brother, parent, or friend 
              who listens, understands, and interacts with you in an immersive 
              virtual space.
            </li>
            <li>
              <span className="text-purple-300 font-medium">
                Psychiatrist & Therapist Support:
              </span>{" "}
              Access licensed psychiatrists and certified therapists who provide 
              expert care and personalized sessions to address your mental health needs.
            </li>
            <li>
              <span className="text-purple-300 font-medium">
                Yoga & Mindfulness Practices:
              </span>{" "}
              Engage in calming yoga, breathing, and mindfulness activities to 
              restore emotional balance and reduce stress.
            </li>
            <li>
              <span className="text-purple-300 font-medium">
                AI-Driven Emotional Companionship:
              </span>{" "}
              An intelligent virtual companion who adapts to your mood, helping 
              you express emotions freely and feel supported anytime.
            </li>
          </ul>
        </section>

        {/* Team Section */}
        <section className="mt-10">
          <p className="text-gray-200 leading-relaxed">
            We are a{" "}
            <span className="font-semibold text-purple-300">
              team of passionate innovators
            </span>
            , working together to make mental healthcare more accessible, 
            personalized, and effective. With{" "}
            <span className="text-purple-300 font-medium">
              AR, VR, AI, and biometric insights
            </span>
            , our vision is not just to help people cope with mental struggles 
            but to empower them to truly heal and thrive.
          </p>
        </section>
        <TeamSection />

        {/* Closing Statement */}
        <section className="mt-10 border-t border-purple-800 pt-6">
          <p className="text-lg text-center text-purple-200 italic">
            With NeuroCare, you’re never alone — your wellness partner is always 
            ready to listen, guide, and help you recharge.
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;
