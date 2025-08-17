import React, { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts";
import {
  Brain,
  Activity,
  Heart,
  Zap,
  Wifi,
  Battery,
  AlertCircle,
  CheckCircle,
  Pause,
  Play,
  Download,
  Settings,
} from "lucide-react";

const BrainSensorMonitor = () => {
  const [isRecording, setIsRecording] = useState(true);
  const [connectionStatus, setConnectionStatus] = useState("connected");
  const [batteryLevel, setBatteryLevel] = useState(87);
  const [currentTime, setCurrentTime] = useState(new Date());

  // Real-time data simulation
  const [brainData, setBrainData] = useState([]);
  const [heartRateData, setHeartRateData] = useState([]);
  const [respiratoryData, setRespiratoryData] = useState([]);

  // Current vital signs
  const [vitals, setVitals] = useState({
    heartRate: 72,
    respiratoryRate: 16,
    bloodResistivity: 1250,
    brainActivity: 85,
    stressLevel: "Low",
    alertness: "High",
  });

  // Simulate real-time data updates
  useEffect(() => {
    const interval = setInterval(() => {
      if (isRecording) {
        const now = new Date();
        setCurrentTime(now);

        // Generate realistic sensor data
        const newHeartRate =
          65 + Math.sin(Date.now() / 1000) * 10 + Math.random() * 5;
        const newRespRate =
          14 + Math.sin(Date.now() / 2000) * 3 + Math.random() * 2;
        const newBloodRes =
          1200 + Math.sin(Date.now() / 1500) * 100 + Math.random() * 50;
        const newBrainActivity =
          80 + Math.sin(Date.now() / 1200) * 15 + Math.random() * 10;

        const timeLabel = now.toLocaleTimeString().slice(-8);

        // Update brain activity data
        setBrainData((prev) => {
          const newData = [
            ...prev,
            {
              time: timeLabel,
              activity: newBrainActivity,
              resistivity: newBloodRes / 10,
              timestamp: now.getTime(),
            },
          ];
          return newData.slice(-20); // Keep last 20 data points
        });

        // Update heart rate data
        setHeartRateData((prev) => {
          const newData = [
            ...prev,
            {
              time: timeLabel,
              rate: newHeartRate,
              timestamp: now.getTime(),
            },
          ];
          return newData.slice(-20);
        });

        // Update respiratory data
        setRespiratoryData((prev) => {
          const newData = [
            ...prev,
            {
              time: timeLabel,
              rate: newRespRate,
              timestamp: now.getTime(),
            },
          ];
          return newData.slice(-20);
        });

        // Update current vitals
        setVitals({
          heartRate: Math.round(newHeartRate),
          respiratoryRate: Math.round(newRespRate),
          bloodResistivity: Math.round(newBloodRes),
          brainActivity: Math.round(newBrainActivity),
          stressLevel:
            newBrainActivity > 90
              ? "High"
              : newBrainActivity > 70
              ? "Medium"
              : "Low",
          alertness:
            newBrainActivity > 85
              ? "High"
              : newBrainActivity > 65
              ? "Medium"
              : "Low",
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [isRecording]);

  const toggleRecording = () => {
    setIsRecording(!isRecording);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "connected":
        return "text-green-400";
      case "connecting":
        return "text-yellow-400";
      case "disconnected":
        return "text-red-400";
      default:
        return "text-gray-400";
    }
  };

  const getStressColor = (level) => {
    switch (level) {
      case "High":
        return "text-red-400";
      case "Medium":
        return "text-yellow-400";
      case "Low":
        return "text-green-400";
      default:
        return "text-gray-400";
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <nav className="bg-gray-800 border-b border-gray-700 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">
                NeuroCare Sensor Monitor
              </h1>
              <p className="text-sm text-gray-400">Real-time Brain Analysis</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div
              className={`flex items-center space-x-2 ${getStatusColor(
                connectionStatus
              )}`}
            >
              <Wifi className="w-4 h-4" />
              <span className="text-sm capitalize">{connectionStatus}</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-400">
              <Battery className="w-4 h-4" />
              <span className="text-sm">{batteryLevel}%</span>
            </div>
            <div className="text-sm text-gray-400">
              {currentTime.toLocaleTimeString()}
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto p-6 space-y-6">
        {/* Control Panel */}
        <div className="bg-gray-800 rounded-2xl shadow-xl p-6 border border-gray-700">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button
                onClick={toggleRecording}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                  isRecording
                    ? "bg-red-600 hover:bg-red-700 text-white"
                    : "bg-green-600 hover:bg-green-700 text-white"
                }`}
              >
                {isRecording ? (
                  <Pause className="w-4 h-4" />
                ) : (
                  <Play className="w-4 h-4" />
                )}
                {isRecording ? "Stop Recording" : "Start Recording"}
              </button>

              <div className="flex items-center space-x-2">
                {isRecording && (
                  <>
                    <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                    <span className="text-sm text-red-400">RECORDING</span>
                  </>
                )}
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <button className="p-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors">
                <Settings className="w-4 h-4 text-gray-400" />
              </button>
              <button className="p-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors">
                <Download className="w-4 h-4 text-gray-400" />
              </button>
            </div>
          </div>
        </div>

        {/* Live Vitals Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-gray-800 rounded-2xl shadow-xl p-6 border border-gray-700">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <Heart className="w-6 h-6 text-red-400 mr-2" />
                <h3 className="text-lg font-semibold">Heart Rate</h3>
              </div>
              <CheckCircle className="w-5 h-5 text-green-400" />
            </div>
            <div className="space-y-2">
              <p className="text-3xl font-bold text-red-400">
                {vitals.heartRate}
              </p>
              <p className="text-sm text-gray-400">BPM</p>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div
                  className="bg-red-400 h-2 rounded-full transition-all duration-1000"
                  style={{ width: `${(vitals.heartRate / 100) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 rounded-2xl shadow-xl p-6 border border-gray-700">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <Activity className="w-6 h-6 text-blue-400 mr-2" />
                <h3 className="text-lg font-semibold">Respiratory Rate</h3>
              </div>
              <CheckCircle className="w-5 h-5 text-green-400" />
            </div>
            <div className="space-y-2">
              <p className="text-3xl font-bold text-blue-400">
                {vitals.respiratoryRate}
              </p>
              <p className="text-sm text-gray-400">Per Minute</p>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div
                  className="bg-blue-400 h-2 rounded-full transition-all duration-1000"
                  style={{ width: `${(vitals.respiratoryRate / 25) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 rounded-2xl shadow-xl p-6 border border-gray-700">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <Zap className="w-6 h-6 text-yellow-400 mr-2" />
                <h3 className="text-lg font-semibold">Blood Resistivity</h3>
              </div>
              <CheckCircle className="w-5 h-5 text-green-400" />
            </div>
            <div className="space-y-2">
              <p className="text-3xl font-bold text-yellow-400">
                {vitals.bloodResistivity}
              </p>
              <p className="text-sm text-gray-400">Ω⋅cm</p>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div
                  className="bg-yellow-400 h-2 rounded-full transition-all duration-1000"
                  style={{
                    width: `${(vitals.bloodResistivity / 1500) * 100}%`,
                  }}
                ></div>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 rounded-2xl shadow-xl p-6 border border-gray-700">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <Brain className="w-6 h-6 text-purple-400 mr-2" />
                <h3 className="text-lg font-semibold">Brain Activity</h3>
              </div>
              <CheckCircle className="w-5 h-5 text-green-400" />
            </div>
            <div className="space-y-2">
              <p className="text-3xl font-bold text-purple-400">
                {vitals.brainActivity}%
              </p>
              <p className="text-sm text-gray-400">Activity Level</p>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div
                  className="bg-purple-400 h-2 rounded-full transition-all duration-1000"
                  style={{ width: `${vitals.brainActivity}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        {/* Analysis Status */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-800 rounded-2xl shadow-xl p-6 border border-gray-700">
            <h3 className="text-xl font-semibold text-white mb-4">
              Current Analysis
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Stress Level:</span>
                <span
                  className={`font-semibold ${getStressColor(
                    vitals.stressLevel
                  )}`}
                >
                  {vitals.stressLevel}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Alertness:</span>
                <span
                  className={`font-semibold ${getStressColor(
                    vitals.alertness
                  )}`}
                >
                  {vitals.alertness}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Data Quality:</span>
                <span className="font-semibold text-green-400">Excellent</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Signal Strength:</span>
                <span className="font-semibold text-green-400">Strong</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 rounded-2xl shadow-xl p-6 border border-gray-700">
            <h3 className="text-xl font-semibold text-white mb-4">
              Session Info
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Duration:</span>
                <span className="font-semibold text-white">
                  {Math.floor(brainData.length / 60)}:
                  {String(brainData.length % 60).padStart(2, "0")}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Samples Collected:</span>
                <span className="font-semibold text-white">
                  {brainData.length * 3}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Processing Status:</span>
                <span className="font-semibold text-green-400">Real-time</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Data Storage:</span>
                <span className="font-semibold text-blue-400">
                  Cloud Synced
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Real-time Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Brain Activity & Blood Resistivity */}
          <div className="bg-gray-800 rounded-2xl shadow-xl p-6 border border-gray-700">
            <h3 className="text-xl font-semibold text-white mb-4">
              Brain Activity & Blood Resistivity
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={brainData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="time" stroke="#9CA3AF" fontSize={12} />
                <YAxis stroke="#9CA3AF" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#1F2937",
                    border: "1px solid #374151",
                    borderRadius: "8px",
                    color: "white",
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="activity"
                  stackId="1"
                  stroke="#A855F7"
                  fill="#A855F7"
                  fillOpacity={0.3}
                  name="Brain Activity (%)"
                />
                <Area
                  type="monotone"
                  dataKey="resistivity"
                  stackId="2"
                  stroke="#EAB308"
                  fill="#EAB308"
                  fillOpacity={0.3}
                  name="Blood Resistivity (Ω⋅cm/10)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* Heart Rate & Respiratory Rate */}
          <div className="bg-gray-800 rounded-2xl shadow-xl p-6 border border-gray-700">
            <h3 className="text-xl font-semibold text-white mb-4">
              Heart Rate & Respiratory Rate
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="time" stroke="#9CA3AF" fontSize={12} />
                <YAxis stroke="#9CA3AF" />
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
                  dataKey="rate"
                  data={heartRateData}
                  stroke="#EF4444"
                  strokeWidth={3}
                  dot={false}
                  name="Heart Rate (BPM)"
                />
                <Line
                  type="monotone"
                  dataKey="rate"
                  data={respiratoryData}
                  stroke="#3B82F6"
                  strokeWidth={3}
                  dot={false}
                  name="Respiratory Rate (per min)"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Processing Status */}
        <div className="bg-gray-800 rounded-2xl shadow-xl p-6 border border-gray-700">
          <h3 className="text-xl font-semibold text-white mb-4">
            Processing Pipeline Status
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="flex items-center space-x-3 p-4 bg-green-600 bg-opacity-20 rounded-lg border border-green-600 border-opacity-30">
              <CheckCircle className="w-8 h-8 text-green-400" />
              <div>
                <p className="font-semibold text-green-400">Data Collection</p>
                <p className="text-sm text-green-300">Active</p>
              </div>
            </div>

            <div className="flex items-center space-x-3 p-4 bg-blue-600 bg-opacity-20 rounded-lg border border-blue-600 border-opacity-30">
              <CheckCircle className="w-8 h-8 text-blue-400" />
              <div>
                <p className="font-semibold text-blue-400">Signal Processing</p>
                <p className="text-sm text-blue-300">Real-time</p>
              </div>
            </div>

            <div className="flex items-center space-x-3 p-4 bg-purple-600 bg-opacity-20 rounded-lg border border-purple-600 border-opacity-30">
              <CheckCircle className="w-8 h-8 text-purple-400" />
              <div>
                <p className="font-semibold text-purple-400">AI Analysis</p>
                <p className="text-sm text-purple-300">Processing</p>
              </div>
            </div>

            <div className="flex items-center space-x-3 p-4 bg-yellow-600 bg-opacity-20 rounded-lg border border-yellow-600 border-opacity-30">
              <CheckCircle className="w-8 h-8 text-yellow-400" />
              <div>
                <p className="font-semibold text-yellow-400">Data Storage</p>
                <p className="text-sm text-yellow-300">Syncing</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrainSensorMonitor;
