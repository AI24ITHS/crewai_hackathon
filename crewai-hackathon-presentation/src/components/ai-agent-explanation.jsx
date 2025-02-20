import React from 'react';
import { Bot, Sparkles } from 'lucide-react';

const AIAgentSlide = () => {
  const agentTraits = [
    {
      emoji: "🎯",
      title: "Måldriven",
      description: "Jobbar självständigt mot uppsatta mål",
      color: "bg-blue-100",
      gradient: "from-blue-400/20 to-blue-300/20"
    },
    {
      emoji: "🛠️",
      title: "Verktygsanvändare",
      description: "Kan använda olika verktyg för att lösa uppgifter",
      color: "bg-purple-100",
      gradient: "from-purple-400/20 to-purple-300/20"
    },
    {
      emoji: "🤝",
      title: "Samarbetsvillig",
      description: "Jobbar effektivt med andra agenter",
      color: "bg-green-100",
      gradient: "from-green-400/20 to-green-300/20"
    },
    {
      emoji: "🌍",
      title: "Interaktiv",
      description: "Samspelar aktivt med sin omgivning",
      color: "bg-yellow-100",
      gradient: "from-yellow-400/20 to-yellow-300/20"
    }
  ];

  return (
    <div className="space-y-8">
      {/* Header Section */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center space-x-3">
          <Bot size={40} className="text-blue-500 animate-bounce" />
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            Vad är en AI-agent? 🤖
          </h2>
        </div>
        
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
        Ett autonomt system som jobbar mot ett mål genom att interagera med sin omgivning...
        </p>
      </div>

      {/* Traits Grid */}
      <div className="grid grid-cols-2 gap-6 mt-4">
        {agentTraits.map((trait, index) => (
          <div 
            key={index}
            className={`rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105
                       bg-gradient-to-br ${trait.gradient}`}
          >
            <div className={`p-6 relative`}>
              {/* Background Sparkle */}
              <div className="absolute top-2 right-2">
                <Sparkles className="text-gray-400/30" size={24} />
              </div>
              
              {/* Content */}
              <div className="flex items-start space-x-4">
                <div className="text-4xl">{trait.emoji}</div>
                <div className="space-y-1">
                  <h3 className="text-xl font-bold">{trait.title}</h3>
                  <p className="text-gray-700">{trait.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Example Box */}
      <div className="bg-blue-50 p-4 rounded-xl shadow-md text-center">
        <p className="text-lg">
        Tänk dig en digital assistent som självständigt hittar bästa vägen till målet! 🎯
        </p>
      </div>
    </div>
  );
};

export default AIAgentSlide;