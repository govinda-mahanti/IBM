import React from "react";
import TeamSection from "./Team";
const About = () => {
  return (
    <div className="bg-[#2B2B2B] text-white min-h-screen px-6 lg:px-16 py-12 pt-[64px]">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h1 className="text-4xl font-bold text-purple-400 mb-6">About Us</h1>
        <p className="text-lg leading-relaxed mb-10 text-gray-200">
          At <span className="font-semibold text-purple-300">EMOTVR</span>, we
          believe emotional well-being is just as important as physical health.
          Our mission is to create a safe, immersive space where users can feel
          understood, supported, and empowered to find peace of mind.
        </p>

        {/* Vision Section */}
        <section className="space-y-6">
          <p className="text-gray-200 leading-relaxed">
            We’ve built a unique emotional support system that blends{" "}
            <span className="text-purple-300 font-medium">
              cutting-edge technology
            </span>
            with the warmth of human connection. Using real-time mood evaluation
            through{" "}
            <span className="text-purple-300 font-medium">
              sensor data, blood flow patterns, and facial expression analysis
            </span>
            , EMOTVR understands how you’re truly feeling — even when words are
            hard to find.
          </p>

          <p className="text-gray-200 leading-relaxed">
            Once we know where you are emotionally, we offer{" "}
            <span className="font-semibold text-purple-300">
              four powerful pathways
            </span>{" "}
            to relaxation and healing:
          </p>

          {/* Four Pathways */}
          <ul className="list-disc list-inside space-y-3 text-gray-300">
            <li>
              <span className="text-purple-300 font-medium">
                VR Environment with a Persona Partner:
              </span>{" "}
              A lifelike companion who listens, responds, and shares moments
              with you in a calming virtual world.
            </li>
            <li>
              <span className="text-purple-300 font-medium">
                Professional Psychiatrist Support:
              </span>{" "}
              Connect instantly with licensed mental health professionals for
              personalized guidance.
            </li>
            <li>
              <span className="text-purple-300 font-medium">
                Certified Therapist Sessions:
              </span>{" "}
              Engage in therapeutic practices that address stress, anxiety, and
              emotional strain.
            </li>
            <li>
              <span className="text-purple-300 font-medium">
                Yoga & Mindfulness:
              </span>{" "}
              Step into peaceful sessions that nurture both body and mind.
            </li>
          </ul>
        </section>

        {/* Team Section */}
        <section className="mt-10">
          <p className="text-gray-200 leading-relaxed">
            We are a{" "}
            <span className="font-semibold text-purple-300">
              team of five passionate innovators
            </span>
            , each committed to making mental wellness more accessible,
            personalized, and effective. Our vision is to harness{" "}
            <span className="text-purple-300 font-medium">
              AI, VR, and biometric insights
            </span>{" "}
            to help people not just cope, but truly thrive.
          </p>
        </section>
        <TeamSection />
        {/* Closing Statement */}
        <section className="mt-10 border-t border-purple-800 pt-6">
          <p className="text-lg text-center text-purple-200 italic">
            With EMOTVR, you’re never alone — your emotional partner is just a
            breath, a glance, or a heartbeat away.
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;
