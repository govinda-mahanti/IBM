import React, { useState } from "react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {
  Calendar,
  Clock,
  Star,
  Trophy,
  Heart,
  Zap,
  Target,
  TrendingUp,
  Award,
  MessageCircle,
  User,
  Home,
  Users,
  Brain,
  Stethoscope,
  Activity,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

const WellnessDashboard = () => {
  const [selectedTimeframe, setSelectedTimeframe] = useState("7d");
  const [expandedSession, setExpandedSession] = useState(null);

  // Session details data
  const sessionDetails = {
    yoga: [
      {
        id: 1,
        date: "2024-08-16",
        time: "07:00 AM",
        duration: "30 min",
        type: "Hatha Yoga Flow",
        instructor: "Sarah Johnson",
        moodBefore: 4,
        moodAfter: 7,
        feedback: "Great morning stretch, felt energized for the day",
      },
      {
        id: 2,
        date: "2024-08-15",
        time: "06:30 AM",
        duration: "25 min",
        type: "Morning Sun Salutation",
        instructor: "Mike Chen",
        moodBefore: 3,
        moodAfter: 6,
        feedback: "Perfect way to start the day, love the breathing exercises",
      },
    ],
    therapist: [
      {
        id: 1,
        date: "2024-08-14",
        time: "02:00 PM",
        duration: "45 min",
        type: "CBT Session",
        therapist: "Dr. Emily Rodriguez",
        moodBefore: 3,
        moodAfter: 6,
        feedback: "Learned great coping strategies for work stress",
      },
    ],
    psychiatrist: [
      {
        id: 1,
        date: "2024-08-13",
        time: "11:00 AM",
        duration: "30 min",
        type: "Medication Review",
        psychiatrist: "Dr. James Wilson",
        moodBefore: 4,
        moodAfter: 5,
        feedback: "Discussed medication adjustments, feeling optimistic",
      },
    ],
  };

  const toggleSession = (sessionType) => {
    setExpandedSession(expandedSession === sessionType ? null : sessionType);
  };

  // Mock data - in a real app, this would come from your API
  const moodData = [
    { date: "2024-08-10", moodBefore: 3, moodAfter: 6, day: "Mon" },
    { date: "2024-08-11", moodBefore: 4, moodAfter: 7, day: "Tue" },
    { date: "2024-08-12", moodBefore: 2, moodAfter: 5, day: "Wed" },
    { date: "2024-08-13", moodBefore: 5, moodAfter: 8, day: "Thu" },
    { date: "2024-08-14", moodBefore: 3, moodAfter: 7, day: "Fri" },
    { date: "2024-08-15", moodBefore: 4, moodAfter: 8, day: "Sat" },
    { date: "2024-08-16", moodBefore: 6, moodAfter: 9, day: "Sun" },
  ];

  const featureUsage = [
    { name: "Mindfulness Bot", sessions: 18, color: "#A855F7" },
    { name: "VR Environments", sessions: 12, color: "#3B82F6" },
    { name: "Yoga Videos", sessions: 8, color: "#10B981" },
    { name: "AR Psychiatrist", sessions: 4, color: "#F59E0B" },
  ];

  const pieData = featureUsage.map((item) => ({
    name: item.name,
    value: item.sessions,
    fill: item.color,
  }));

  const recentSessions = [
    {
      id: 1,
      type: "VR Forest",
      date: "2024-08-16",
      time: "14:30",
      duration: "15 min",
      moodChange: +4,
      feedback: "Super calming, felt like I was really there!",
    },
    {
      id: 2,
      type: "DBT Therapy Bot",
      date: "2024-08-15",
      time: "19:45",
      duration: "25 min",
      moodChange: +3,
      feedback: "Great coping strategies for anxiety",
    },
    {
      id: 3,
      type: "Morning Yoga",
      date: "2024-08-15",
      time: "07:00",
      duration: "20 min",
      moodChange: +2,
      feedback: "Perfect way to start the day",
    },
    {
      id: 4,
      type: "Mindfulness Bot",
      date: "2024-08-14",
      time: "21:15",
      duration: "12 min",
      moodChange: +3,
      feedback: "Helped me unwind before bed",
    },
  ];

  const achievements = [
    {
      name: "Consistency Star",
      icon: "⭐",
      description: "7 days streak",
      earned: true,
    },
    {
      name: "VR Explorer",
      icon: "🥽",
      description: "10 VR sessions",
      earned: true,
    },
    {
      name: "Yoga Enthusiast",
      icon: "🧘",
      description: "5 yoga sessions",
      earned: true,
    },
    {
      name: "Mood Improver",
      icon: "😊",
      description: "Average +3 mood boost",
      earned: true,
    },
    {
      name: "Chat Master",
      icon: "💬",
      description: "20 bot conversations",
      earned: false,
    },
    {
      name: "Zen Master",
      icon: "☯️",
      description: "50 total sessions",
      earned: false,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation Header */}
      <nav className="bg-gray-800 border-b border-gray-700 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white">NeuroCare</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#"
              className="text-gray-300 hover:text-white transition-colors flex items-center"
            >
              <Home className="w-4 h-4 mr-2" />
              Home
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-white transition-colors flex items-center"
            >
              <Users className="w-4 h-4 mr-2" />
              About Us
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-white transition-colors flex items-center"
            >
              <User className="w-4 h-4 mr-2" />
              Persona
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-white transition-colors flex items-center"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Therapist
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-white transition-colors flex items-center"
            >
              <Stethoscope className="w-4 h-4 mr-2" />
              Psychiatrist
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-white transition-colors flex items-center"
            >
              <Activity className="w-4 h-4 mr-2" />
              Yoga
            </a>
          </div>
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors flex items-center">
            <User className="w-4 h-4 mr-2" />
            Dashboard
          </button>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto p-6 space-y-6">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-2">
            Your Wellness Journey
          </h1>
          <p className="text-gray-400 text-lg">
            Track your progress and celebrate your growth
          </p>
        </div>

        {/* Progress Summary Hero Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gray-800 rounded-2xl shadow-xl p-6 border border-gray-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-400 mb-1">Total Sessions</p>
                <p className="text-3xl font-bold text-purple-400">42</p>
                <p className="text-sm text-green-400 flex items-center mt-1">
                  <TrendingUp className="w-4 h-4 mr-1" />
                  +12 this week
                </p>
              </div>
              <div className="bg-purple-600 bg-opacity-20 p-3 rounded-full">
                <Target className="w-6 h-6 text-purple-400" />
              </div>
            </div>
          </div>

          <div className="bg-gray-800 rounded-2xl shadow-xl p-6 border border-gray-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-400 mb-1">Time Invested</p>
                <p className="text-3xl font-bold text-blue-400">7h 30m</p>
                <p className="text-sm text-blue-400 flex items-center mt-1">
                  <Clock className="w-4 h-4 mr-1" />
                  2h 15m this week
                </p>
              </div>
              <div className="bg-blue-600 bg-opacity-20 p-3 rounded-full">
                <Clock className="w-6 h-6 text-blue-400" />
              </div>
            </div>
          </div>

          <div className="bg-gray-800 rounded-2xl shadow-xl p-6 border border-gray-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-400 mb-1">Subscription</p>
                <p className="text-lg font-semibold text-green-400">
                  Premium Plan
                </p>
                <p className="text-sm text-gray-400 mt-1">
                  Ends: Sept 15, 2025
                </p>
              </div>
              <div className="bg-green-600 bg-opacity-20 p-3 rounded-full">
                <Star className="w-6 h-6 text-green-400" />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Mood Trend Chart */}
          <div className="bg-gray-800 rounded-2xl shadow-xl p-6 border border-gray-700">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-white">Mood Trends</h3>
              <div className="flex space-x-2">
                <button
                  onClick={() => setSelectedTimeframe("7d")}
                  className={`px-3 py-1 rounded-full text-sm transition-colors ${
                    selectedTimeframe === "7d"
                      ? "bg-purple-600 text-white"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  7D
                </button>
                <button
                  onClick={() => setSelectedTimeframe("30d")}
                  className={`px-3 py-1 rounded-full text-sm transition-colors ${
                    selectedTimeframe === "30d"
                      ? "bg-purple-600 text-white"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  30D
                </button>
              </div>
            </div>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={moodData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="day" stroke="#9CA3AF" />
                <YAxis domain={[0, 10]} stroke="#9CA3AF" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#1F2937",
                    border: "1px solid #374151",
                    borderRadius: "8px",
                    color: "white",
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="moodBefore"
                  stroke="#EF4444"
                  strokeWidth={3}
                  dot={{ fill: "#EF4444", strokeWidth: 2, r: 4 }}
                  name="Before Session"
                />
                <Line
                  type="monotone"
                  dataKey="moodAfter"
                  stroke="#10B981"
                  strokeWidth={3}
                  dot={{ fill: "#10B981", strokeWidth: 2, r: 4 }}
                  name="After Session"
                />
              </LineChart>
            </ResponsiveContainer>
            <div className="flex items-center justify-center space-x-6 mt-4">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                <span className="text-sm text-gray-400">Before Session</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                <span className="text-sm text-gray-400">After Session</span>
              </div>
            </div>
          </div>

          {/* Feature Usage */}
          <div className="bg-gray-800 rounded-2xl shadow-xl p-6 border border-gray-700">
            <h3 className="text-xl font-semibold text-white mb-6">
              Feature Usage
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ResponsiveContainer width="100%" height={200}>
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    innerRadius={40}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#1F2937",
                      border: "1px solid #374151",
                      borderRadius: "8px",
                      color: "white",
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
              <div className="space-y-3">
                {featureUsage.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between"
                  >
                    <div className="flex items-center">
                      <div
                        className={`w-3 h-3 rounded-full mr-3`}
                        style={{ backgroundColor: feature.color }}
                      ></div>
                      <span className="text-sm text-gray-300">
                        {feature.name}
                      </span>
                    </div>
                    <span className="text-sm font-semibold text-gray-300">
                      {feature.sessions}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-4 p-3 bg-purple-600 bg-opacity-20 rounded-lg border border-purple-600 border-opacity-30">
              <p className="text-sm text-purple-400 font-medium">
                Most Used: Mindfulness Bot
              </p>
              <p className="text-xs text-purple-300 mt-1">
                You find chatbot therapy most helpful for your wellness journey
              </p>
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className="rounded-2xl shadow-xl p-6 border border-gray-700">
          <div className="flex items-center mb-6">
            <Trophy className="w-6 h-6 text-yellow-500 mr-2" />
            <h3 className="text-xl font-semibold text-white">Experiences</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {achievements.slice(0, 4).map((achievement, index) => (
              <div
                key={index}
                className={`p-4 rounded-xl border-2 transition-all ${
                  achievement.earned
                    ? "border-gray-500 border-opacity-50 bg-gray-700 bg-opacity-10"
                    : "border-gray-600 bg-gray-700 bg-opacity-50 opacity-60"
                }`}
              >
                <div className="text-2xl mb-2 text-center">
                  {achievement.icon}
                </div>
                <h4 className="font-semibold text-sm text-white text-center">
                  {achievement.name}
                </h4>
                <p className="text-xs text-gray-400 mt-1 text-center">
                  {achievement.description}
                </p>
                {achievement.earned && (
                  <div className="flex items-center justify-center mt-2">
                    <Award className="w-3 h-3 text-yellow-400 mr-1" />
                    <span className="text-xs text-yellow-400">Earned!</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        {/* Session Summary */}
        <div className="bg-gray-800 rounded-2xl shadow-xl p-6 border border-gray-700 mb-6">
          <h3 className="text-xl font-semibold text-white mb-6">
            Session Summary
          </h3>
          <div className="space-y-4">
            {/* Yoga Sessions */}
            <div className="border border-gray-600 border-opacity-50 rounded-xl overflow-hidden">
              <div
                className="flex items-center justify-between p-4 bg-gray-700 bg-opacity-50 cursor-pointer hover:bg-gray-600 hover:bg-opacity-50 transition-colors"
                onClick={() => toggleSession("yoga")}
              >
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center mr-4">
                    <Activity className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-white font-medium">Yoga</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-purple-600 text-white px-3 py-1 rounded-full font-medium">
                    2
                  </div>
                  {expandedSession === "yoga" ? (
                    <ChevronUp className="w-5 h-5 text-gray-400" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  )}
                </div>
              </div>

              {expandedSession === "yoga" && (
                <div className="bg-gray-800 bg-opacity-50 border-t border-gray-600 border-opacity-50">
                  {sessionDetails.yoga.map((session, index) => (
                    <div
                      key={session.id}
                      className="p-4 border-b border-gray-600 border-opacity-30 last:border-b-0"
                    >
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h4 className="text-white font-medium">
                            {session.type}
                          </h4>
                          <p className="text-sm text-gray-400">
                            with {session.instructor}
                          </p>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center space-x-2 mb-1">
                            <span className="text-xs text-red-400">
                              Before: {session.moodBefore}
                            </span>
                            <span className="text-xs text-green-400">
                              After: {session.moodAfter}
                            </span>
                            <div className="bg-green-600 bg-opacity-20 text-green-400 px-2 py-1 rounded-full text-xs">
                              +{session.moodAfter - session.moodBefore}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-between items-center mb-2">
                        <div className="flex items-center text-xs text-gray-500">
                          <Calendar className="w-3 h-3 mr-1" />
                          {session.date} • {session.time}
                        </div>
                        <span className="text-xs text-gray-400">
                          {session.duration}
                        </span>
                      </div>
                      <p className="text-sm text-gray-300 italic">
                        "{session.feedback}"
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Therapist Sessions */}
            <div className="border border-gray-600 border-opacity-50 rounded-xl overflow-hidden">
              <div
                className="flex items-center justify-between p-4 bg-gray-700 bg-opacity-50 cursor-pointer hover:bg-gray-600 hover:bg-opacity-50 transition-colors"
                onClick={() => toggleSession("therapist")}
              >
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center mr-4">
                    <MessageCircle className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-white font-medium">Therapist</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-purple-600 text-white px-3 py-1 rounded-full font-medium">
                    1
                  </div>
                  {expandedSession === "therapist" ? (
                    <ChevronUp className="w-5 h-5 text-gray-400" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  )}
                </div>
              </div>

              {expandedSession === "therapist" && (
                <div className="bg-gray-800 bg-opacity-50 border-t border-gray-600 border-opacity-50">
                  {sessionDetails.therapist.map((session, index) => (
                    <div key={session.id} className="p-4">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h4 className="text-white font-medium">
                            {session.type}
                          </h4>
                          <p className="text-sm text-gray-400">
                            with {session.therapist}
                          </p>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center space-x-2 mb-1">
                            <span className="text-xs text-red-400">
                              Before: {session.moodBefore}
                            </span>
                            <span className="text-xs text-green-400">
                              After: {session.moodAfter}
                            </span>
                            <div className="bg-green-600 bg-opacity-20 text-green-400 px-2 py-1 rounded-full text-xs">
                              +{session.moodAfter - session.moodBefore}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-between items-center mb-2">
                        <div className="flex items-center text-xs text-gray-500">
                          <Calendar className="w-3 h-3 mr-1" />
                          {session.date} • {session.time}
                        </div>
                        <span className="text-xs text-gray-400">
                          {session.duration}
                        </span>
                      </div>
                      <p className="text-sm text-gray-300 italic">
                        "{session.feedback}"
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Psychiatrist Sessions */}
            <div className="border border-gray-600 border-opacity-50 rounded-xl overflow-hidden">
              <div
                className="flex items-center justify-between p-4 bg-gray-700 bg-opacity-50 cursor-pointer hover:bg-gray-600 hover:bg-opacity-50 transition-colors"
                onClick={() => toggleSession("psychiatrist")}
              >
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center mr-4">
                    <Stethoscope className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-white font-medium">Psychiatrist</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-purple-600 text-white px-3 py-1 rounded-full font-medium">
                    1
                  </div>
                  {expandedSession === "psychiatrist" ? (
                    <ChevronUp className="w-5 h-5 text-gray-400" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  )}
                </div>
              </div>

              {expandedSession === "psychiatrist" && (
                <div className="bg-gray-800 bg-opacity-50 border-t border-gray-600 border-opacity-50">
                  {sessionDetails.psychiatrist.map((session, index) => (
                    <div key={session.id} className="p-4">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h4 className="text-white font-medium">
                            {session.type}
                          </h4>
                          <p className="text-sm text-gray-400">
                            with {session.psychiatrist}
                          </p>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center space-x-2 mb-1">
                            <span className="text-xs text-red-400">
                              Before: {session.moodBefore}
                            </span>
                            <span className="text-xs text-green-400">
                              After: {session.moodAfter}
                            </span>
                            <div className="bg-green-600 bg-opacity-20 text-green-400 px-2 py-1 rounded-full text-xs">
                              +{session.moodAfter - session.moodBefore}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-between items-center mb-2">
                        <div className="flex items-center text-xs text-gray-500">
                          <Calendar className="w-3 h-3 mr-1" />
                          {session.date} • {session.time}
                        </div>
                        <span className="text-xs text-gray-400">
                          {session.duration}
                        </span>
                      </div>
                      <p className="text-sm text-gray-300 italic">
                        "{session.feedback}"
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Upgrade Plan Section */}
        {/*   <div className="bg-gray-800 rounded-2xl shadow-xl p-6 border border-gray-700 mb-6">
          <h3 className="text-xl font-semibold text-white mb-6 text-center">
            Upgrade Your Plan
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
            <div className="bg-gray-700 rounded-xl p-6 border border-gray-600 text-center">
              <h4 className="text-lg font-semibold text-white mb-4">Free</h4>
              <div className="mb-4">
                <span className="text-3xl font-bold text-white">₹0</span>
                <span className="text-gray-400">/month</span>
              </div>
              <ul className="space-y-2 mb-6 text-sm text-gray-300">
                <li>• Basic meditation sessions</li>
                <li>• Limited yoga videos</li>
                <li>• Basic mood tracking</li>
                <li>• Community support</li>
              </ul>
              <button className="w-full bg-gray-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-gray-500 transition-colors">
                Current Plan
              </button>
            </div>

           
            <div className="bg-purple-600 rounded-xl p-6 border-2 border-purple-400 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-yellow-500 text-black px-3 py-1 text-xs font-bold rounded-bl-lg">
                POPULAR
              </div>
              <h4 className="text-lg font-semibold text-white mb-4">Monthly</h4>
              <div className="mb-4">
                <span className="text-3xl font-bold text-white">₹299</span>
                <span className="text-purple-200">/month</span>
              </div>
              <ul className="space-y-2 mb-6 text-sm text-purple-100">
                <li>• Unlimited sessions</li>
                <li>• Premium VR environments</li>
                <li>• AI therapy & psychiatrist</li>
                <li>• Advanced analytics</li>
                <li>• Priority support</li>
              </ul>
              <button className="w-full bg-white text-purple-600 py-2 px-4 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                Upgrade Now
              </button>
            </div>

            <div className="bg-gray-700 rounded-xl p-6 border border-gray-600 text-center">
              <h4 className="text-lg font-semibold text-white mb-4">Yearly</h4>
              <div className="mb-4">
                <span className="text-3xl font-bold text-white">₹249</span>
                <span className="text-gray-400">/month</span>
              </div>
              <div className="mb-4">
                <span className="text-green-400 text-sm">Save 17%</span>
              </div>
              <ul className="space-y-2 mb-6 text-sm text-gray-300">
                <li>• Everything in Monthly</li>
                <li>• 2 months free</li>
                <li>• Exclusive content</li>
                <li>• Personal coach access</li>
              </ul>
              <button className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-purple-700 transition-colors">
                Choose Yearly
              </button>
            </div>
          </div>
        </div> */}

        {/* Recent Activity & Personalized Suggestions */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Recent Sessions */}
          <div className="lg:col-span-2 bg-gray-800 rounded-2xl shadow-xl p-6 border border-gray-700">
            <div className="flex items-center mb-6">
              <Calendar className="w-6 h-6 text-purple-400 mr-2" />
              <h3 className="text-xl font-semibold text-white">
                Recent Activity
              </h3>
            </div>
            <div className="space-y-4">
              {recentSessions.map((session) => (
                <div
                  key={session.id}
                  className="flex items-start space-x-4 p-4 bg-gray-700 bg-opacity-50 rounded-xl hover:bg-gray-700 transition-colors border border-gray-600 border-opacity-50"
                >
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-purple-600 bg-opacity-20 rounded-full flex items-center justify-center">
                      <Heart className="w-5 h-5 text-purple-400" />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-semibold text-white">
                        {session.type}
                      </h4>
                      <div className="flex items-center space-x-2">
                        <span className="text-sm text-gray-400">
                          {session.duration}
                        </span>
                        <div
                          className={`px-2 py-1 rounded-full text-xs font-medium ${
                            session.moodChange > 0
                              ? "bg-green-600 bg-opacity-20 text-green-400"
                              : "bg-gray-600 bg-opacity-20 text-gray-400"
                          }`}
                        >
                          {session.moodChange > 0 ? "+" : ""}
                          {session.moodChange}
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-gray-300 mb-2">
                      "{session.feedback}"
                    </p>
                    <div className="flex items-center text-xs text-gray-500">
                      <Calendar className="w-3 h-3 mr-1" />
                      {session.date} • {session.time}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Personalized Suggestions */}
          <div className="bg-gray-800 rounded-2xl shadow-xl p-6 border border-gray-700">
            <div className="flex items-center mb-6">
              <MessageCircle className="w-6 h-6 text-green-400 mr-2" />
              <h3 className="text-xl font-semibold text-white">For You</h3>
            </div>
            <div className="space-y-4">
              <div className="p-4 bg-green-600 bg-opacity-20 rounded-xl border border-green-600 border-opacity-30">
                <h4 className="font-semibold text-green-400 mb-2">
                  Recommended
                </h4>
                <p className="text-sm text-green-300 mb-3">
                  Try CBT Therapy Bot for anxiety management
                </p>
                <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors">
                  Start Session
                </button>
              </div>

              <div className="p-4 bg-blue-600 bg-opacity-20 rounded-xl border border-blue-600 border-opacity-30">
                <h4 className="font-semibold text-blue-400 mb-2">
                  Return to Favorite
                </h4>
                <p className="text-sm text-blue-300 mb-3">
                  VR Mountain made you feel most relaxed
                </p>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors">
                  Join Again
                </button>
              </div>

              <div className="p-4 bg-purple-600 bg-opacity-20 rounded-xl border border-purple-600 border-opacity-30">
                <h4 className="font-semibold text-purple-400 mb-2">
                  Consistency Goal
                </h4>
                <p className="text-sm text-purple-300 mb-3">
                  Keep your 7-day streak going!
                </p>
                <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors">
                  Choose Activity
                </button>
              </div>
            </div>

            <div className="mt-6 p-3 bg-yellow-600 bg-opacity-20 rounded-lg border border-yellow-600 border-opacity-30">
              <p className="text-sm text-yellow-400 font-medium">
                💡 Tip of the Day
              </p>
              <p className="text-xs text-yellow-300 mt-1">
                Evening sessions tend to give you the biggest mood boost. Try
                scheduling one tonight!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WellnessDashboard;
