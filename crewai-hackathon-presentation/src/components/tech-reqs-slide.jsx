import React from 'react';
import { Wrench, Sparkles } from 'lucide-react';

const TechnicalReqsSlide = () => {
  const requirements = [
    {
      title: "Python 3.10-3.12",
      emoji: "🐍",
      color: "bg-blue-50",
      gradient: "from-blue-400/20 to-blue-300/20"
    },
    {
      title: "OpenAI/Anthropic API-nyckel",
      emoji: "🔑",
      color: "bg-purple-50",
      gradient: "from-purple-400/20 to-purple-300/20"
    },
    {
      title: "Virtuell miljö rekommenderas",
      emoji: "🏠",
      color: "bg-green-50",
      gradient: "from-green-400/20 to-green-300/20"
    },
    {
      title: "Grundkod finns",
      emoji: "📦",
      color: "bg-yellow-50",
      gradient: "from-yellow-400/20 to-yellow-300/20"
    }
  ];

  return (
    <div className="space-y-8">
      {/* Header Section */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center space-x-3">
          <Wrench size={40} className="text-blue-500 animate-spin-slow" />
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            Tekniska Krav 🛠️
          </h2>
        </div>
      </div>

      {/* Requirements Grid */}
      <div className="grid grid-cols-2 gap-6 mt-4">
        {requirements.map((req, index) => (
          <div 
            key={index}
            className={`rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105
                       bg-gradient-to-br ${req.gradient}`}
          >
            <div className={`p-6 relative`}>
              {/* Background Sparkle */}
              <div className="absolute top-2 right-2">
                <Sparkles className="text-gray-400/30" size={24} />
              </div>
              
              {/* Content */}
              <div className="flex items-center space-x-4">
                <div className="text-4xl">{req.emoji}</div>
                <h3 className="text-xl font-bold">{req.title}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Support Message */}
      <div className="bg-blue-50 p-4 rounded-xl shadow-md text-center">
        <p className="text-lg font-bold">
          VI FINNS HÄR FÖR ATT HJÄLPA! 🙌
        </p>
      </div>
    </div>
  );
};

export default TechnicalReqsSlide;