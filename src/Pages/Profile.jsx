import React, { useState } from 'react';

// To use these icons, you would typically install a library like lucide-react:
// npm install lucide-react
import { 
    User, 
    Mail, 
    Phone, 
    Edit, 
    Save, 
    Check, 
    LogOut, 
    HeartHandshake, 
    Leaf, 
    BrainCircuit 
} from 'lucide-react';


// --- Mock Data ---
const initialUserData = {
  name: 'Alex Doe',
  email: 'alex.doe@example.com',
  phone: '+1 (555) 123-4567',
  profilePic: 'https://placehold.co/128x128/7e22ce/ffffff?text=AD',
  subscription: 'Free',
};

const sessionHistoryData = [
  { id: 1, service: 'Yoga', date: '2024-07-28', therapist: 'Guided Session' },
  { id: 2, service: 'Therapist', date: '2024-07-21', therapist: 'Dr. Anya Sharma' },
  { id: 3, service: 'Yoga', date: '2024-07-14', therapist: 'Guided Session' },
  { id: 4, service: 'Psychiatrist', date: '2024-07-05', therapist: 'Dr. Ben Carter' },
];

const plans = [
    {
        name: "Free",
        price: { monthly: "₹0", yearly: "₹0" },
        features: ["Yoga Sessions", "Therapy Session Tracking"],
        cta: "Current Plan",
        isCurrent: true,
        highlight: false,
    },
    {
        name: "Monthly",
        price: { monthly: "₹299", yearly: "₹299" },
        features: ["All Services", "Unlimited Yoga", "Priority Support", "Personalized Persona"],
        cta: "Upgrade to Monthly",
        isCurrent: false,
        highlight: true,
    },
    {
        name: "Yearly",
        price: { monthly: "₹249", yearly: "₹2999" },
        features: ["All Monthly Benefits", "2 Months Free", "Annual Wellness Report"],
        cta: "Upgrade to Yearly",
        isCurrent: false,
        highlight: false,
    }
];

// --- Sub-components ---

const UserDetails = ({ userData, setUserData }) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [formData, setFormData] = useState(userData);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    setUserData(formData);
    setIsEditMode(false);
  };

  return (
    <div className="bg-gray-800 rounded-2xl p-6 flex flex-col md:flex-row items-center gap-6">
      <img 
        src={formData.profilePic} 
        alt="Profile" 
        className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-gray-700 object-cover"
        onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/128x128/7e22ce/ffffff?text=AD'; }}
      />
      <div className="flex-grow text-center md:text-left">
        {isEditMode ? (
          <div className="space-y-3">
            <input type="text" name="name" value={formData.name} onChange={handleInputChange} className="w-full bg-gray-700 text-white text-2xl font-bold rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-purple-500" />
            <input type="email" name="email" value={formData.email} onChange={handleInputChange} className="w-full bg-gray-700 text-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-purple-500" />
            <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} className="w-full bg-gray-700 text-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-purple-500" />
          </div>
        ) : (
          <>
            <h2 className="text-2xl md:text-3xl font-bold text-white">{userData.name}</h2>
            <div className="flex items-center justify-center md:justify-start gap-4 mt-2 text-gray-400">
                <div className="flex items-center gap-2">
                    <Mail className="w-5 h-5" />
                    <span>{userData.email}</span>
                </div>
                <div className="flex items-center gap-2">
                    <Phone className="w-5 h-5" />
                    <span>{userData.phone}</span>
                </div>
            </div>
          </>
        )}
      </div>
      <button 
        onClick={() => isEditMode ? handleSave() : setIsEditMode(true)}
        className="flex-shrink-0 bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300 flex items-center gap-2"
      >
        {isEditMode ? <><Save size={16} /> Save</> : <><Edit size={16} /> Edit Info</>}
      </button>
    </div>
  );
};

const SessionHistory = () => {
    const getServiceIcon = (service) => {
        const iconContainerBaseClasses = "w-10 h-10 p-2 rounded-full text-white flex items-center justify-center";
        const iconProps = { size: 24, className: "text-white" };

        switch (service.toLowerCase()) {
            case 'therapist':
                return <div className={`${iconContainerBaseClasses} bg-gradient-to-br from-blue-500 to-indigo-600`}><HeartHandshake {...iconProps} /></div>;
            case 'yoga':
                return <div className={`${iconContainerBaseClasses} bg-gradient-to-br from-green-400 to-teal-500`}><Leaf {...iconProps} /></div>;
            case 'psychiatrist':
                return <div className={`${iconContainerBaseClasses} bg-gradient-to-br from-pink-500 to-rose-500`}><BrainCircuit {...iconProps} /></div>;
            default:
                return <div className={`${iconContainerBaseClasses} bg-gray-500`}><User {...iconProps} /></div>;
        }
    };

    // Calculate the count of each session type
    const sessionCounts = sessionHistoryData.reduce((acc, session) => {
        acc[session.service] = (acc[session.service] || 0) + 1;
        return acc;
    }, {});

    return (
        <div className="bg-gray-800 rounded-2xl p-6">
            <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-white">Session Summary</h3>
            </div>
            <div className="space-y-4">
                {Object.keys(sessionCounts).length > 0 ? (
                    Object.entries(sessionCounts).map(([service, count]) => (
                        <div key={service} className="bg-gray-700/50 p-4 rounded-lg flex items-center justify-between gap-4">
                            <div className="flex items-center gap-4">
                                {getServiceIcon(service)}
                                <p className="font-semibold text-white text-lg">{service}</p>
                            </div>
                            <div className="bg-purple-600 text-white text-lg font-bold w-12 h-12 rounded-full flex items-center justify-center ring-2 ring-gray-700">
                                {count}
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-gray-400 text-center py-8">No session history found.</p>
                )}
            </div>
        </div>
    );
};

const SubscriptionPlans = () => {
    return (
        <div className="bg-gray-800 rounded-2xl p-6">
            <h3 className="text-xl font-bold text-white text-center mb-6">Upgrade Your Plan</h3>
            <div className="grid md:grid-cols-3 gap-6">
                {plans.map(plan => (
                    <div key={plan.name} className={`rounded-xl p-6 flex flex-col ${plan.highlight ? 'bg-purple-600 text-white' : 'bg-gray-700 text-gray-300'} transform transition-transform hover:scale-105`}>
                        <h4 className="text-lg font-bold text-center">{plan.name}</h4>
                        <p className="text-center mt-2">
                            <span className={`text-3xl font-extrabold ${plan.highlight ? 'text-white' : 'text-white'}`}>{plan.price.monthly}</span>
                            <span className="text-sm">/month</span>
                        </p>
                        {plan.name === "Yearly" && <p className="text-center text-xs mt-1">Billed as {plan.price.yearly}/year</p>}
                        
                        <ul className="mt-6 space-y-3 flex-grow">
                            {plan.features.map(feature => (
                                <li key={feature} className="flex items-start gap-3">
                                    <div className={`flex-shrink-0 w-5 h-5 rounded-full mt-1 ${plan.highlight ? 'bg-white/30' : 'bg-purple-500'} flex items-center justify-center`}>
                                        <Check className={`w-3 h-3 ${plan.highlight ? 'text-white' : 'text-white'}`} strokeWidth={3} />
                                    </div>
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>

                        <button className={`w-full mt-8 py-2 px-4 rounded-lg font-semibold transition-colors ${plan.isCurrent ? 'bg-gray-600 cursor-not-allowed' : plan.highlight ? 'bg-white text-purple-600 hover:bg-gray-200' : 'bg-purple-600 text-white hover:bg-purple-700'}`}>
                            {plan.cta}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}


// --- Main Profile Component ---
const Profile = () => {
  const [userData, setUserData] = useState(initialUserData);

  const handleLogout = () => {
    console.log("User logged out");
   
  };

  return (
    <div className="bg-gray-900 text-gray-200 min-h-screen p-4 sm:p-6 lg:p-8 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-white">My Profile</h1>
          <button 
            onClick={handleLogout}
            className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300 flex items-center gap-2"
          >
            <LogOut size={20} />
            <span>Logout</span>
          </button>
        </div>
        <div className="space-y-6">
          <UserDetails userData={userData} setUserData={setUserData} />
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-1">
                <SessionHistory />
            </div>
            <div className="lg:col-span-2">
                <SubscriptionPlans />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
