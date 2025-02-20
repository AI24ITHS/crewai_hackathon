import React from 'react';
import { Cpu, Sparkles } from 'lucide-react';

const WelcomeSlide = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 relative">
      {/* Hero Section with Enhanced Animation */}
      <div className="relative mb-12">
        <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-75 blur animate-pulse"></div>
        <Cpu size={96} className="relative text-white animate-bounce" />
      </div>

      {/* Main Title with Gradient Animation */}
      <div className="text-center space-y-8 mb-16">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-fade-in">
          CrewAI Hackathon! 🚀
        </h1>
        
        <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
          Bygg ditt första AI-team idag!
        </p>
      </div>

      {/* Team Section with Hover Effects */}
      <div className="grid grid-cols-2 gap-8 w-full max-w-2xl">
        {[
          { name: "Lotta", emoji: "🐍", delay: "0" },
          { name: "Christian", emoji: "🤖", delay: "100" },
          { name: "Rafael", emoji: "🔧", delay: "200" },
          { name: "Sunny", emoji: "✨", delay: "300" }
        ].map(({ name, emoji, delay }) => (
          <div 
            key={name} 
            className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl shadow-md text-center transform hover:scale-105 transition-all duration-300"
            style={{ animationDelay: `${delay}ms` }}
          >
            <div className="text-3xl mb-3 animate-bounce" style={{ animationDelay: `${delay}ms` }}>{emoji}</div>
            <div className="font-bold text-2xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {name}
            </div>
          </div>
        ))}
      </div>

      {/* Decorative Elements */}
      <Sparkles className="absolute top-8 right-8 text-yellow-400 animate-pulse" size={32} />
      <Sparkles className="absolute bottom-8 left-8 text-purple-400 animate-bounce" size={32} />

      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-white opacity-50 -z-10" />
    </div>
  );
};

export default WelcomeSlide;