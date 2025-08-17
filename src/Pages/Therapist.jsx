import React from 'react';
import { 
    BrainCircuit, 
    Zap, 
    Leaf, 
    CheckCircle, 
    TriangleAlert, 
    HeartHandshake, 
    Users, 
    FileText, 
    UsersRound, 
    Lightbulb, 
    MessageSquare, 
    Paintbrush 
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const therapyServicesData = [
    {
        icon: BrainCircuit,
        title: 'CBT Bot',
        description: 'Cognitive Behavioral Therapy helps identify and change negative thought patterns and behaviors.',
        borderColor: 'border-purple-500',
        iconClassName: 'text-purple-400',
        link: 'https://cbt-cognitive-behavioural-therapy.onrender.com'
    },
    {
        icon: Zap,
        title: 'DBT Bot',
        description: 'Dialectical Behavior Therapy focuses on developing coping skills and emotional regulation.',
        borderColor: 'border-purple-500',
        iconClassName: 'text-purple-400',
        link: 'https://interpersonal-psychotherapy-ipt.onrender.com/'
    },
    {
        icon: Leaf,
        title: 'Mindfulness Therapy',
        description: 'Learn mindfulness techniques to reduce stress and increase present-moment awareness.',
        borderColor: 'border-purple-500',
        iconClassName: 'text-purple-400',
        link: 'https://interpersonal-psychotherapy-ipt.onrender.com/'
    },
    {
        icon: CheckCircle,
        title: 'ACT Therapy',
        description: 'Acceptance and Commitment Therapy helps you accept difficult feelings while committing to positive actions.',
        borderColor: 'border-purple-500',
        iconClassName: 'text-purple-400',
        link: '/services/act-therapy'
    },
    {
        icon: TriangleAlert,
        title: 'Trauma Therapy',
        description: 'Specialized approaches like TF-CBT and EMDR to help process and heal from traumatic experiences.',
        borderColor: 'border-purple-500',
        iconClassName: 'text-purple-400',
        link: '/services/trauma-therapy'
    },
    {
        icon: HeartHandshake,
        title: 'Grief Counseling',
        description: 'Support and guidance through the grieving process after loss or significant life changes.',
        borderColor: 'border-purple-500',
        iconClassName: 'text-purple-400',
        link: '/services/grief-counseling'
    },
    {
        icon: Users,
        title: 'Couples Therapy',
        description: 'Strengthen your relationship through improved communication and conflict resolution.',
        borderColor: 'border-purple-500',
        iconClassName: 'text-purple-400',
        link: '/services/couples-therapy'
    },
    {
        icon: FileText,
        title: 'Narrative Therapy',
        description: 'Explore and rewrite the stories you tell about your life to create positive change.',
        borderColor: 'border-purple-500',
        iconClassName: 'text-purple-400',
        link: '/services/narrative-therapy'
    },
    {
        icon: UsersRound,
        title: 'Psychodynamic Therapy',
        description: 'Explore unconscious patterns and past experiences to understand current behaviors.',
        borderColor: 'border-purple-500',
        iconClassName: 'text-purple-400',
        link: '/services/psychodynamic-therapy'
    },
    {
        icon: Lightbulb,
        title: 'Solution-Focused Therapy',
        description: 'Focus on solutions and your vision for the future rather than problems.',
        borderColor: 'border-purple-500',
        iconClassName: 'text-purple-400',
        link: '/services/solution-focused-therapy'
    },
    {
        icon: MessageSquare,
        title: 'Interpersonal Therapy',
        description: 'Improve relationships and communication skills to enhance your social support network.',
        borderColor: 'border-purple-500',
        iconClassName: 'text-purple-400',
        link: '/services/interpersonal-therapy'
    },
    {
        icon: Paintbrush,
        title: 'Art Therapy',
        description: 'Express and process emotions through creative activities and artistic expression.',
        borderColor: 'border-purple-500',
        iconClassName: 'text-purple-400',
        link: '/services/art-therapy'
    },
];





const Therapist = () => {
  const navigate = useNavigate();

  const handleClick = (link) => {
    window.location.href = link;
  };

  return (
    <div className="bg-gray-900 min-h-screen font-sans pt-[64px]">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white">Our Therapy Services</h1>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            Explore our range of specialized therapy services designed to meet
            your unique mental health needs.
          </p>
          <div className="mt-4 w-24 h-1 bg-purple-500 mx-auto rounded"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {therapyServicesData.map(
            (
              { icon: Icon, title, description, borderColor, iconClassName, link },
              index
            ) => (
              <button
                key={index}
                onClick={() => handleClick(link)}
                className={`bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-purple-500/50 hover:-translate-y-1 transition-all duration-300 text-left w-full border-t-4 ${borderColor}`}
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="bg-gray-700 p-3 rounded-full">
                      <Icon className={iconClassName} size={24} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      {title}
                    </h3>
                    <p className="mt-2 text-gray-300 text-sm">{description}</p>
                  </div>
                </div>
              </button>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Therapist;