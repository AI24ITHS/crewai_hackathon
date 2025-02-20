import React from 'react';
import { Target, Sparkles } from 'lucide-react';

const ChallengeSlide = () => {
  const challenges = [
    {
      emoji: "📚",
      title: "Research-crew",
      description: "Ett team som läser, sammanfattar och skapar quiz",
      color: "bg-blue-100",
      gradient: "from-blue-400/20 to-blue-300/20"
    },
    {
      emoji: "⚡️",
      title: "GitHub-crew",
      description: "Håller koll på nya uppgifter och hittar resurser",
      color: "bg-purple-100",
      gradient: "from-purple-400/20 to-purple-300/20"
    },
    {
      emoji: "🧠",
      title: "Study-crew",
      description: "Planerar, strukturerar och organiserar studierna",
      color: "bg-green-100",
      gradient: "from-green-400/20 to-green-300/20"
    },
    {
      emoji: "💼",
      title: "JobHunt-crew",
      description: "Hittar jobb, anpassar CV, förbereder intervjuer",
      color: "bg-yellow-100",
      gradient: "from-yellow-400/20 to-yellow-300/20"
    }
  ];

  return (
    <div className="space-y-8">
      {/* Header Section */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center space-x-3">
          <Target size={40} className="text-blue-500 animate-bounce" />
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            Utmaningen 🎯
          </h2>
        </div>
        
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Skapa ett AI-team som hjälper dig plugga smartare...
        </p>
      </div>

      {/* Challenge Examples Grid */}
      <div className="grid grid-cols-2 gap-6 mt-4">
        {challenges.map((challenge, index) => (
          <div 
            key={index}
            className={`rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105
                       bg-gradient-to-br ${challenge.gradient}`}
          >
            <div className={`p-6 relative`}>
              {/* Background Sparkle */}
              <div className="absolute top-2 right-2">
                <Sparkles className="text-gray-400/30" size={24} />
              </div>
              
              {/* Content */}
              <div className="flex items-start space-x-4">
                <div className="text-4xl">{challenge.emoji}</div>
                <div className="space-y-1">
                  <h3 className="text-xl font-bold">{challenge.title}</h3>
                  <p className="text-gray-700">{challenge.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Inspiration Box */}
      <div className="bg-blue-50 p-4 rounded-xl shadow-md text-center">
        <p className="text-lg">
          Välj en av dessa eller hitta på något eget - det viktiga är att bygga något som hjälper DIG! ✨
        </p>
      </div>
    </div>
  );
};

export default ChallengeSlide;