import React, { useEffect } from 'react';
import profileImage from '../images/profile.png'; // Adjust the path to your image 

const Hero = () => {
  // Lock scroll when component mounts
  useEffect(() => {
    // Save the original overflow style
    const originalStyle = window.getComputedStyle(document.body).overflow;
    
    // Lock scroll
    document.body.style.overflow = 'hidden';
    
    // Cleanup function to restore scroll when component unmounts
    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, []);

  const scrollToExperiences = () => {
    // Restore scroll first
    document.body.style.overflow = 'auto';
    
    // Then scroll to experiences
    const experiencesSection = document.getElementById('experiences-section');
    if (experiencesSection) {
      experiencesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-wood-panel">
      {/* Decorative wooden accent lines */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-amber-800/30 via-amber-600/50 to-amber-800/30"></div>
      <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-amber-800/30 via-amber-600/50 to-amber-800/30"></div>
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile Image with wooden frame effect */}
          <div className="relative inline-block mb-8">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-amber-700 to-amber-900 transform scale-105 blur-sm opacity-50"></div>
            <div className="relative w-40 h-40 md:w-48 md:h-48 mx-auto rounded-full overflow-hidden border-4 border-white/90 shadow-xl">
              <img 
                src={profileImage} 
                alt="Rylee Pamintuan"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Name with elegant serif font */}
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-amber-900 mb-4 tracking-tight">
            Rylee Pamintuan
          </h1>

          {/* Subtitle with wooden accent */}
          <div className="relative inline-block">
            <p className="text-xl md:text-2xl text-amber-800/80 font-light mb-8">
              Web Developer | Tech Enthusiast | Lifelong Learner
            </p>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-0.5 bg-amber-700/30"></div>
          </div>



          {/* Get to Know Me Button */}
          <div className="mt-8">
            <button 
              onClick={scrollToExperiences}
              className="group relative px-8 py-4 bg-amber-900 text-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden animate-bounce"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-amber-800 to-amber-700 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <span className="relative flex items-center justify-center gap-2">
                Get to Know Me
                <svg 
                  className="w-5 h-5" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M19 14l-7 7-7-7m14-6l-7 7-7-7" 
                  />
                </svg>
              </span>
            </button>
          </div>

          {/* Decorative wooden knots */}
          <div className="flex justify-center gap-3 mt-12">
            <div className="w-2 h-2 rounded-full bg-amber-700/40"></div>
            <div className="w-2 h-2 rounded-full bg-amber-700/60"></div>
            <div className="w-2 h-2 rounded-full bg-amber-700/40"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;