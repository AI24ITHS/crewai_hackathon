import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Sparkles, Star, Zap, Crown, Heart, Music, Rocket } from 'lucide-react';

// Import all slides
import WelcomeSlide from './components/welcome-slide';
import ScheduleSlide from './components/schedule-slide';
import AIAgentSlide from './components/ai-agent-explanation';
import CrewAISlide from './components/crew-ai-slide';
import ChallengeSlide from './components/challenge-slide';
import TechnicalReqsSlide from './components/tech-reqs-slide';
import TipsSlide from './components/hackathon-tips-slide';

// Create a component for individual group slides
const GroupSlide = ({ group }) => {
  const Icon = group.icon;
  return (
    <div className="flex flex-col items-center justify-center">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 1.5}s`,
              animationDuration: '3s'
            }}
          >
            <Icon className={`bg-gradient-to-r ${group.gradientFrom} ${group.gradientTo} bg-clip-text text-transparent`} size={24} />
          </div>
        ))}
      </div>

      {/* Group Header with Glow Effect */}
      <div className="text-center mb-8 relative">
        <div className={`absolute inset-0 bg-gradient-to-r ${group.gradientFrom} ${group.gradientTo} opacity-20 blur-xl rounded-full`}></div>
        <div className="text-6xl font-bold animate-bounce relative">
          {group.emoji} GRUPP {group.number} {group.emoji}
        </div>
      </div>

      {/* Team Members Card */}
      <div className={`bg-gradient-to-r ${group.gradientFrom}/10 ${group.gradientVia}/10 ${group.gradientTo}/10 p-8 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300 w-full max-w-2xl mx-auto relative`}>
        {['-top-2 -left-2', '-top-2 -right-2', '-bottom-2 -left-2', '-bottom-2 -right-2'].map((position, i) => (
          <div key={i} className={`absolute ${position} w-4 h-4 bg-gradient-to-r ${group.gradientFrom} ${group.gradientTo} rounded-full animate-pulse`}></div>
        ))}

        <div className="space-y-6">
          {group.members.map((member, idx) => (
            <div 
              key={idx}
              className="flex items-center justify-center space-x-4 group transform hover:scale-102 transition-all duration-200"
              style={{ animationDelay: `${idx * 200}ms` }}
            >
              <Icon className={`text-gradient-to-r ${group.gradientFrom} ${group.gradientTo} transform group-hover:rotate-12 transition-transform duration-200`} size={24} />
              <span className={`text-2xl font-bold bg-gradient-to-r ${group.gradientFrom} ${group.gradientVia} ${group.gradientTo} bg-clip-text text-transparent`}>
                {member}
              </span>
              <Icon className={`text-gradient-to-r ${group.gradientFrom} ${group.gradientTo} transform group-hover:-rotate-12 transition-transform duration-200`} size={24} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const App = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Define all groups
  const groups = [
    {
      number: 1,
      theme: "Festival",
      emoji: "🎪",
      members: ["Max Ekberg", "Astrid Rodin", "Jonathan Boetsch", "Asmaa Abdirizak"],
      gradientFrom: "from-pink-400",
      gradientVia: "via-purple-400",
      gradientTo: "to-blue-400",
      icon: Sparkles
    },
    {
      number: 2,
      theme: "Star",
      emoji: "🌟",
      members: ["Isak Forsberg", "Lukas Bråkenhielm", "Viktoria Wisenfelt", "Arezo Hazara jafari"],
      gradientFrom: "from-yellow-400",
      gradientVia: "via-orange-400",
      gradientTo: "to-red-400",
      icon: Star
    },
    {
      number: 3,
      theme: "Rocket",
      emoji: "🚀",
      members: ["Bagher Hassani", "Zainab Adnan", "David Rydman", "David Izquierdo Puentes"],
      gradientFrom: "from-blue-400",
      gradientVia: "via-purple-400",
      gradientTo: "to-red-400",
      icon: Rocket
    },
    {
      number: 4,
      theme: "Lightning",
      emoji: "⚡️",
      members: ["Olov Olsson", "Belle Sangthong", "Lucas Lindgren"],
      gradientFrom: "from-yellow-400",
      gradientVia: "via-blue-400",
      gradientTo: "to-purple-400",
      icon: Zap
    },
    {
      number: 5,
      theme: "Crown",
      emoji: "👑",
      members: ["Mikael Anttila-Eriksson", "Joel Söderberg", "Arvid Johansson"],
      gradientFrom: "from-yellow-400",
      gradientVia: "via-amber-400",
      gradientTo: "to-orange-400",
      icon: Crown
    },
    {
      number: 6,
      theme: "Heart",
      emoji: "💫",
      members: ["Jonas Johnsson", "Olivia Reponen", "Carl Daag"],
      gradientFrom: "from-pink-400",
      gradientVia: "via-red-400",
      gradientTo: "to-rose-400",
      icon: Heart
    },
  ];

  // Define all slides including group slides
  const slides = [
    { component: WelcomeSlide, title: "Välkommen!" },
    { component: ScheduleSlide, title: "Dagens Schema" },
    { component: AIAgentSlide, title: "Vad är en AI-agent?" },
    { component: CrewAISlide, title: "Vad är CrewAI?" },
    { component: ChallengeSlide, title: "Utmaningen" },
 
    { component: TechnicalReqsSlide, title: "Tekniska Krav" },
    { component: TipsSlide, title: "Tips" },
    // Add group slides with titles
    ...groups.map(group => ({
      component: () => <GroupSlide group={group} />,
      title: `Grupp ${group.number}: ${group.theme}`
    })),
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === 'ArrowRight') nextSlide();
      if (event.key === 'ArrowLeft') prevSlide();
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  const CurrentSlideComponent = slides[currentSlide].component;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-white">
      {/* Progress bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
        <div 
          className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
          style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
        />
      </div>

      {/* Slide navigation indicators */}
      <div className="fixed top-4 right-4 bg-white rounded-full px-3 py-1 shadow-md z-50">
        <span className="font-mono text-gray-600">
          {currentSlide + 1} / {slides.length}
        </span>
      </div>

      {/* Current slide wrapper */}
      <div className="h-screen w-full flex items-center justify-center">
        <div className="w-full max-w-6xl mx-auto px-8">
          <CurrentSlideComponent />
        </div>
      </div>

      {/* Navigation buttons */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 flex justify-center space-x-8 z-50">
        <button
          onClick={prevSlide}
          className="p-4 rounded-full bg-white shadow-lg hover:bg-gray-50 transition-colors duration-200"
          disabled={currentSlide === 0}
        >
          <ChevronLeft size={32} className="text-blue-500" />
        </button>
        <button
          onClick={nextSlide}
          className="p-4 rounded-full bg-white shadow-lg hover:bg-gray-50 transition-colors duration-200"
          disabled={currentSlide === slides.length - 1}
        >
          <ChevronRight size={32} className="text-blue-500" />
        </button>
      </div>
    </div>
  );
};

export default App;