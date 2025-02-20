import React from 'react';
import { Lightbulb, Sparkles } from 'lucide-react';

const TipsSlide = () => {
  const tips = [
    {
      emoji: "🎯",
      title: "Använd AI i alla steg",
      description: "För att undvika att fastna",
      color: "bg-blue-50",
      gradient: "from-blue-400/20 to-blue-300/20"
    },
    {
      emoji: "💻",
      title: "En huvuddator för projektet",
      description: "Medan andra kan experimentera på sina datorer",
      color: "bg-purple-50",
      gradient: "from-purple-400/20 to-purple-300/20"
    },
    {
      emoji: "🤝",
      title: "Dela erfarenheter",
      description: "Gå runt till andra grupper och bolla idéer",
      color: "bg-green-50",
      gradient: "from-green-400/20 to-green-300/20"
    },
    {
      emoji: "📤",
      title: "Dela koden",
      description: "Dela gärna er kod med andra vid dagens slut",
      color: "bg-yellow-50",
      gradient: "from-yellow-400/20 to-yellow-300/20"
    },
    {
      emoji: "✨",
      title: "Ha kul!",
      description: "Det spelar ingen roll om man blir klar!",
      color: "bg-pink-50",
      gradient: "from-pink-400/20 to-pink-300/20",
      featured: true
    }
  ];

  return (
    <div className="space-y-8">
      {/* Header Section */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center space-x-3">
          <Lightbulb size={40} className="text-yellow-500 animate-bounce" />
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            Tips för en Awesome Hackathon! 💡
          </h2>
        </div>
      </div>

      {/* Tips Grid */}
      <div className="grid grid-cols-1 gap-4">
        {tips.map((tip, index) => (
          <div 
            key={index}
            className={`${tip.color} rounded-xl shadow-md transform transition-all duration-200 
                       ${tip.featured ? 'border-2 border-pink-200 hover:scale-102 p-6' : 'hover:translate-x-2 p-4'}`}
          >
            <div className="flex items-center space-x-4">
              <div className="text-4xl">{tip.emoji}</div>
              <div className="space-y-1 flex-grow">
                <h3 className={`font-bold ${tip.featured ? 'text-2xl' : 'text-xl'}`}>{tip.title}</h3>
                <p className="text-gray-600">{tip.description}</p>
              </div>
              {tip.featured && (
                <Sparkles className="text-pink-400 animate-pulse" size={24} />
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Reminder Box */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-xl shadow-md text-center">
        <p className="text-lg font-bold text-gray-700">
          Målet är att lära sig och ha kul tillsammans! 🌟
        </p>
      </div>
    </div>
  );
};

export default TipsSlide;