import React from 'react';
import { Users, Sparkles } from 'lucide-react';

const CrewAISlide = () => {
  const crewFeatures = [
    {
      emoji: "👥",
      title: "Ett Team av Experter",
      description: "Varje agent är specialist på sin uppgift",
      color: "bg-blue-100",
      gradient: "from-blue-400/20 to-blue-300/20"
    },
    {
      emoji: "🤝",
      title: "Samarbetar",
      description: "Agenterna löser uppgifter tillsammans",
      color: "bg-purple-100",
      gradient: "from-purple-400/20 to-purple-300/20"
    },
    {
      emoji: "🎯",
      title: "Målfokuserade",
      description: "Jobbar mot DITT mål",
      color: "bg-green-100",
      gradient: "from-green-400/20 to-green-300/20"
    },
    {
      emoji: "👑",
      title: "Du Bestämmer",
      description: "Du är projektledaren",
      color: "bg-yellow-100",
      gradient: "from-yellow-400/20 to-yellow-300/20"
    }
  ];

  return (
    <div className="space-y-8">
      {/* Header Section */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center space-x-3">
          <Users size={40} className="text-blue-500 animate-bounce" />
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            Vad är CrewAI? 🚀
          </h2>
        </div>
        
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Tänk dig ett helt team av specialiserade AI-agenter som samarbetar...
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-2 gap-6 mt-4">
        {crewFeatures.map((feature, index) => (
          <div 
            key={index}
            className={`rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105
                       bg-gradient-to-br ${feature.gradient}`}
          >
            <div className={`p-6 relative`}>
              {/* Background Sparkle */}
              <div className="absolute top-2 right-2">
                <Sparkles className="text-gray-400/30" size={24} />
              </div>
              
              {/* Content */}
              <div className="flex items-start space-x-4">
                <div className="text-4xl">{feature.emoji}</div>
                <div className="space-y-1">
                  <h3 className="text-xl font-bold">{feature.title}</h3>
                  <p className="text-gray-700">{feature.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Example Box */}
      <div className="bg-blue-50 p-4 rounded-xl shadow-md text-center">
        <p className="text-lg">
          Som ett proffs-team: En researchar, en analyserar, en sammanfattar - och DU är chefen! 💪
        </p>
      </div>
    </div>
  );
};

export default CrewAISlide;