import { React, useState } from "react";
import { Rocket, Wallet, Plus, DollarSign, Sparkles } from "lucide-react";
import { Brain, Heart, User, Activity } from "lucide-react";
const Home = () => {
  const steps = [
    {
      id: 1,
      icon: <Wallet size={40} />,
      title: "Setup Your Wallet",
      description:
        "Set up your wallet of choice. Connect it to the Animarket by clicking the wallet icon in the top right corner.",
      bgGradient: "from-purple-500 via-pink-500 to-orange-500",
    },
    {
      id: 2,
      icon: <Plus size={40} />,
      title: "Create Collection",
      description:
        "Upload your work and setup your collection. Add a description, social links and floor price.",
      bgGradient: "from-purple-500 via-blue-500 to-pink-500",
    },
    {
      id: 3,
      icon: <DollarSign size={40} />,
      title: "Start Earning",
      description:
        "Choose between auctions and fixed-price listings. Start earning by selling your NFTs or trading others.",
      bgGradient: "from-purple-500 via-indigo-500 to-blue-500",
    },
    {
      id: 4,
      icon: <DollarSign size={40} />,
      title: "Start Earning",
      description:
        "Choose between auctions and fixed-price listings. Start earning by selling your NFTs or trading others.",
      bgGradient: "from-purple-500 via-indigo-500 to-blue-500",
    },
  ];
  // Decorative elements component
  const DecoElements = () => (
    <>
      <div className="absolute top-4 left-4 w-2 h-2 bg-white rounded-full opacity-60"></div>
      <div className="absolute top-8 right-6 w-1.5 h-1.5 bg-white rounded-full opacity-40"></div>
      <div className="absolute bottom-6 left-8 w-1 h-1 bg-white rounded-full opacity-50"></div>
      <div className="absolute bottom-4 right-4 w-2 h-2 bg-white rounded-full opacity-70"></div>
      <div className="absolute top-12 left-12 w-1 h-1 bg-white rounded-full opacity-30"></div>
      <div className="absolute bottom-12 right-12 w-1.5 h-1.5 bg-white rounded-full opacity-50"></div>

      {/* Plus signs */}
      <Sparkles className="absolute top-6 right-8 w-3 h-3 text-white opacity-40" />
      <Sparkles className="absolute bottom-8 left-6 w-4 h-4 text-white opacity-30" />
      <Sparkles className="absolute top-16 left-16 w-2 h-2 text-white opacity-60" />
    </>
  );

  const faqs = [
    {
      question: "What does the app offer?",
      answer:
        "An all-in-one wellness platform with yoga sessions, therapy & psychiatric consultations, personalized programs, and optional VR experiences.",
    },
    {
      question: "Do I need a VR headset?",
      answer: "No. VR is optional—works on any smartphone, tablet, or desktop.",
    },
    {
      question: "Can I book licensed professionals?",
      answer:
        "Yes. All therapists and psychiatrists are certified and verified.",
    },
    {
      question: "Is my data secure?",
      answer:
        "Yes. We use end-to-end encryption and follow HIPAA/GDPR standards.",
    },
    {
      question: "Do I need prior experience in yoga or meditation?",
      answer: "No. We have beginner to advanced level sessions.",
    },
    {
      question: "Can I use the app offline?",
      answer:
        "Yes, you can download yoga & meditation sessions. Live consultations need internet.",
    },
    {
      question: "What’s the cost?",
      answer:
        "Free basic access, with premium plans for unlimited classes, VR content, and priority bookings.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div
      className="min-h-screen px-4 sm:px-6 lg:px-8 pt-[64px]"
      style={{ backgroundColor: "#2B2B2B" }}
    >
      <section className="max-w-7xl mx-auto py-8 lg:py-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center mx-8">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-6">
              Discover to
              <br />
              Connect,Calm &
              <br />
              Recharge
            </h1>

            <p className="text-gray-300 text-base sm:text-lg lg:text-xl max-w-md mx-auto lg:mx-0 mb-8 leading-relaxed">
              Your personal emotional support platform. Start your journey to
              mindfulness and emotional wellness today.
            </p>

            <button className="bg-purple-600 hover:bg-purple-500 text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors duration-200 flex items-center space-x-3 mx-auto lg:mx-0 mb-12">
              <Rocket size={20} />
              <span>Get Started</span>
            </button>

            {/* Stats */}
            {/*             <div className="grid grid-cols-3 gap-4 sm:gap-8 max-w-md mx-auto lg:mx-0">
              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-1">
                  240k+
                </div>
                <div className="text-gray-400 text-sm sm:text-base">
                  Total Sale
                </div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-1">
                  100k+
                </div>
                <div className="text-gray-400 text-sm sm:text-base">
                  Auctions
                </div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-1">
                  240k+
                </div>
                <div className="text-gray-400 text-sm sm:text-base">
                  Artists
                </div>
              </div>
            </div> */}
          </div>

          {/* Right Content - NFT Card */}
          <div className="flex justify-center lg:justify-end">
            <div className="bg-gray-800 rounded-2xl overflow-hidden shadow-2xl max-w-sm w-full">
              {/* NFT Image */}
              <img
                src="./Image Placeholder.png"
                alt="Space Walking NFT"
                className="w-full h-80 object-cover"
              />

              {/* Card Info */}
              <div className="p-6">
                <h3 className="text-white font-semibold text-xl mb-3">
                  Space Walking
                </h3>
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <span className="text-gray-400 text-sm">AnimaKid</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <button
              onClick={() => {
                // Replace with your routing logic
                window.location.href = "/how-it-works"; // or use your router
                console.log("Navigating to How It Works page");
              }}
              className="group mb-4 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-purple-500 focus:ring-opacity-50 rounded-lg p-2"
            >
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300">
                How It Works
              </h2>
            </button>
            <p className="text-gray-300 text-lg sm:text-xl max-w-md mx-auto">
              Find Out How To Get Started
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {/* Psychiatrist */}
            <button
              onClick={() => {
                // Replace with your routing logic
                window.location.href = "/psychiatrist";
                console.log("Navigating to Psychiatrist page");
              }}
              className=" rounded-2xl p-8 text-center hover:transform hover:scale-105 transition-all duration-300 cursor-pointer focus:outline-none focus:ring-4 focus:ring-purple-500 focus:ring-opacity-50 hover:bg-gray-700"
              style={{ backgroundColor: "#3B3B3B" }}
            >
              <div className="relative mb-8">
                <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-purple-600 flex items-center justify-center relative overflow-hidden">
                  {/* Decorative elements */}
                  <div className="absolute top-2 left-4 w-2 h-2 bg-white rounded-full opacity-60"></div>
                  <div className="absolute top-6 right-3 w-1 h-1 bg-white rounded-full opacity-80"></div>
                  <div className="absolute bottom-4 left-6 w-1 h-1 bg-white rounded-full opacity-70"></div>
                  <div className="absolute bottom-8 right-8 w-2 h-2 bg-white rounded-full opacity-50"></div>
                  <div className="absolute top-1/2 left-2 w-1 h-1 bg-white rounded-full opacity-90"></div>

                  {/* Plus signs */}
                  <div className="absolute top-3 right-6 text-white text-xs opacity-60">
                    +
                  </div>
                  <div className="absolute bottom-6 left-3 text-white text-xs opacity-70">
                    +
                  </div>

                  {/* Main Icon */}
                  <Brain size={48} className="text-white z-10" />
                </div>
              </div>

              <h3 className="text-white font-semibold text-xl mb-4">
                Psychiatrist
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Get professional psychiatric care. Connect with licensed
                psychiatrists for medication management and mental health
                diagnosis.
              </p>
            </button>

            {/* Therapist */}
            <button
              onClick={() => {
                // Replace with your routing logic
                window.location.href = "/therapist";
                console.log("Navigating to Therapist page");
              }}
              className="rounded-2xl p-8 text-center hover:transform hover:scale-105 transition-all duration-300 cursor-pointer focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 hover:bg-gray-700"
              style={{ backgroundColor: "#3B3B3B" }}
            >
              <div className="relative mb-8">
                <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center relative overflow-hidden">
                  {/* Decorative elements */}
                  <div className="absolute top-4 left-3 w-2 h-2 bg-white rounded-full opacity-70"></div>
                  <div className="absolute top-2 right-5 w-1 h-1 bg-white rounded-full opacity-60"></div>
                  <div className="absolute bottom-3 left-7 w-1 h-1 bg-white rounded-full opacity-80"></div>
                  <div className="absolute bottom-6 right-4 w-2 h-2 bg-white rounded-full opacity-50"></div>
                  <div className="absolute top-1/2 right-2 w-1 h-1 bg-white rounded-full opacity-90"></div>

                  {/* Plus signs */}
                  <div className="absolute top-5 left-8 text-white text-xs opacity-60">
                    +
                  </div>
                  <div className="absolute bottom-4 right-7 text-white text-xs opacity-70">
                    +
                  </div>

                  {/* Main Icon */}
                  <Heart size={48} className="text-white z-10" />
                </div>
              </div>

              <h3 className="text-white font-semibold text-xl mb-4">
                Therapist
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Access licensed therapists for counseling sessions. Get support
                for anxiety, depression, and personal growth through therapy.
              </p>
            </button>

            {/* Persona */}
            <button
              onClick={() => {
                // Replace with your routing logic
                window.location.href = "/persona";
                console.log("Navigating to Persona page");
              }}
              className=" rounded-2xl p-8 text-center hover:transform hover:scale-105 transition-all duration-300 cursor-pointer focus:outline-none focus:ring-4 focus:ring-purple-500 focus:ring-opacity-50 hover:bg-gray-700"
              style={{ backgroundColor: "#3B3B3B" }}
            >
              <div className="relative mb-8">
                <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-purple-600 via-blue-500 to-purple-500 flex items-center justify-center relative overflow-hidden">
                  {/* Decorative elements */}
                  <div className="absolute top-3 left-5 w-2 h-2 bg-white rounded-full opacity-60"></div>
                  <div className="absolute top-7 right-2 w-1 h-1 bg-white rounded-full opacity-80"></div>
                  <div className="absolute bottom-2 left-4 w-1 h-1 bg-white rounded-full opacity-70"></div>
                  <div className="absolute bottom-5 right-6 w-2 h-2 bg-white rounded-full opacity-50"></div>
                  <div className="absolute top-1/2 left-1 w-1 h-1 bg-white rounded-full opacity-90"></div>

                  {/* Plus signs */}
                  <div className="absolute top-2 right-8 text-white text-xs opacity-60">
                    +
                  </div>
                  <div className="absolute bottom-7 left-2 text-white text-xs opacity-70">
                    +
                  </div>

                  {/* Main Icon */}
                  <User size={48} className="text-white z-10" />
                </div>
              </div>

              <h3 className="text-white font-semibold text-xl mb-4">Persona</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Create your personalized mental health profile. Track your
                progress and get customized recommendations for your wellness
                journey.
              </p>
            </button>

            {/* Yoga */}
            <button
              onClick={() => {
                // Replace with your routing logic
                window.location.href = "/yoga";
                console.log("Navigating to Yoga page");
              }}
              className=" rounded-2xl p-8 text-center hover:transform hover:scale-105 transition-all duration-300 cursor-pointer focus:outline-none focus:ring-4 focus:ring-green-500 focus:ring-opacity-50 hover:bg-gray-700"
              style={{ backgroundColor: "#3B3B3B" }}
            >
              <div className="relative mb-8">
                <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-green-500 via-purple-500 to-blue-500 flex items-center justify-center relative overflow-hidden">
                  {/* Decorative elements */}
                  <div className="absolute top-4 left-2 w-2 h-2 bg-white rounded-full opacity-70"></div>
                  <div className="absolute top-1 right-4 w-1 h-1 bg-white rounded-full opacity-60"></div>
                  <div className="absolute bottom-1 left-6 w-1 h-1 bg-white rounded-full opacity-80"></div>
                  <div className="absolute bottom-3 right-3 w-2 h-2 bg-white rounded-full opacity-50"></div>
                  <div className="absolute top-1/2 right-1 w-1 h-1 bg-white rounded-full opacity-90"></div>

                  {/* Plus signs */}
                  <div className="absolute top-6 left-7 text-white text-xs opacity-60">
                    +
                  </div>
                  <div className="absolute bottom-8 right-5 text-white text-xs opacity-70">
                    +
                  </div>

                  {/* Main Icon - Custom Yoga Pose */}
                  <div className="relative z-10">
                    <Activity size={48} className="text-white" />
                    <div className="absolute -top-2 -right-1 w-3 h-3 border-2 border-white rounded-full"></div>
                  </div>
                </div>
              </div>

              <h3 className="text-white font-semibold text-xl mb-4">Yoga</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Join guided yoga sessions for mental wellness. Practice
                mindfulness and meditation to reduce stress and improve mental
                clarity.
              </p>
            </button>
          </div>
        </div>
      </section>
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto p-6">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl text-center font-bold text-white transition-colors duration-300">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4 mt-8">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-[#121212] rounded-lg border border-gray-800/50 overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center p-4 text-left font-medium text-lg text-white hover:bg-[#2b2a2aee] transition"
                >
                  {faq.question}
                  <span
                    className={`transform transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  >
                    ▼
                  </span>
                </button>
                {openIndex === index && (
                  <div className="p-4 text-gray-600 bg-gray-50 border-t border-gray-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
export default Home;
