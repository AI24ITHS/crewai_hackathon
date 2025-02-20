import React from 'react';
import { Calendar, Sparkles, Camera } from 'lucide-react';

const ScheduleSlide = () => {
  const scheduleItems = [
    {
      time: "09:00-09:30",
      title: "Kickoff",
      description: "Vi kör igång! 🎬",
      color: "bg-blue-100",
      highlight: "border-blue-300",
      icon: "🎉"
    },
    {
      time: "09:30-10:00",
      title: "Installation & Gruppplanering",
      description: "Bolla ideér, planera, delegera, konfigurera! 💡",
      color: "bg-purple-100",
      highlight: "border-purple-300",
      icon: "⚙️"
    },
    {
      time: "10:00-15:00",
      title: "HACKA PÅ!",
      description: "Lunch och fika kommer finnas! ☕️🍕",
      color: "bg-gradient-to-r from-green-100 to-blue-100",
      highlight: "border-green-400",
      featured: true,
      icon: "💻"
    },
    {
      time: "15:00-16:00",
      title: "Presentationer",
      description: "Visa upp era coola AI-teams! 🎯",
      color: "bg-yellow-100",
      highlight: "border-yellow-300",
      icon: "🎤"
    },
    {
      time: "16:30 →",
      title: "Afterwork",
      description: "Hirschen/Älgen! 🎉",
      color: "bg-pink-100",
      highlight: "border-pink-300",
      icon: "🍻"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-white p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header with Animation */}
        <div className="flex items-center justify-center space-x-4 mb-12">
          <div className="relative">
            <div className="absolute -inset-2 bg-blue-200 rounded-full blur opacity-50"></div>
            <Calendar className="text-blue-500 animate-bounce relative" size={48} />
          </div>
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            Dagens Agenda
          </h2>
        </div>

        {/* Schedule Items with Enhanced Animations */}
        <div className="space-y-4">
          {scheduleItems.map((item, index) => (
            <div 
              key={index}
              className={`${item.color} rounded-xl shadow-md transform transition-all duration-300 
                         ${item.featured ? 'border-2 ' + item.highlight + ' hover:scale-105 p-6' : 'hover:scale-102 p-4'}
                         animate-fade-in`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-4">
                  <span className="text-3xl">{item.icon}</span>
                  <div className="space-y-1">
                    <h3 className={`font-bold ${item.featured ? 'text-2xl' : 'text-xl'}`}>
                      {item.title}
                      {item.featured && (
                        <span className="ml-2">
                          <Sparkles className="inline text-green-500 animate-pulse" size={24} />
                        </span>
                      )}
                    </h3>
                    <p className={`${item.featured ? 'text-lg' : 'text-base'} text-gray-600`}>
                      {item.description}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <span className={`font-mono ${item.featured ? 'text-base font-bold' : 'text-sm'} 
                                  bg-white px-3 py-1 rounded-full shadow-sm`}>
                    {item.time}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Fun Footer Note with Animation */}
        <div className="text-center text-gray-600 italic mt-8 animate-pulse">
          <p className="text-lg">
            PS: Vi har massor av kaffe, snacks och mat under dagen! ☕️✨
          </p>
        </div>

        {/* Photo Notice with Enhanced Design */}
        <div className="mt-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 shadow-md transform hover:scale-102 transition-all duration-200">
          <div className="flex items-center justify-center space-x-3 mb-3">
            <div className="relative">
              <div className="absolute -inset-1 bg-blue-200 rounded-full blur opacity-50"></div>
              <Camera className="text-blue-500 relative" size={28} />
            </div>
            <h3 className="font-bold text-xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Fotografering under dagen 📸
            </h3>
          </div>
          <p className="text-center text-gray-600">
            Vi kommer att ta bilder under dagen för att dokumentera eventet. 
            Om du inte vill vara med på bild, säg bara till! 😊
          </p>
        </div>
      </div>
    </div>
  );
};

// Add custom animation keyframes
const style = document.createElement('style');
style.textContent = `
  @keyframes fade-in {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .animate-fade-in {
    animation: fade-in 0.5s ease-out forwards;
  }
`;
document.head.appendChild(style);

export default ScheduleSlide;