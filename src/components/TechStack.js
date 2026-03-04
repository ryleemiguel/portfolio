import React from 'react';

const TechStack = () => {
  const technologies = [
    { 
      name: 'HTML', 
      icon: (props) => (
        <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 3l1.5 18 6.5 2 6.5-2L20 3H4z" />
          <path d="M16 8H8l.5 4H16l-.5 4-3.5 1-3.5-1-.5-2" />
        </svg>
      )
    },
    { 
      name: 'CSS', 
      icon: (props) => (
        <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 3l1.5 18 6.5 2 6.5-2L20 3H4z" />
          <path d="M16 12.5l-4 1.5-4-1.5M12 8v6" />
        </svg>
      )
    },
    { 
      name: 'JavaScript', 
      icon: (props) => (
        <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 3h18v18H3V3z" />
          <path d="M15 9c-.5-.5-1-1-2-1-1.5 0-3 1-3 3s1.5 3 3 3 3 1 3 3-1.5 3-3 3c-1 0-1.5-.5-2-1" />
        </svg>
      )
    },
    { 
      name: 'PHP', 
      icon: (props) => (
        <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 7h16v10H4z" />
          <path d="M8 10v4M16 10v4M12 10v4" />
        </svg>
      )
    },
    { 
      name: 'Python', 
      icon: (props) => (
        <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M8 8c0-2 1.5-4 4-4s4 2 4 4v8c0 2-1.5 4-4 4s-4-2-4-4V8z" />
          <path d="M16 12H8" />
        </svg>
      )
    },
    { 
      name: 'Next.js', 
      icon: (props) => (
        <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      )
    },
    { 
      name: 'React.js', 
      icon: (props) => (
        <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="2.5" />
          <path d="M12 5c3.5 0 6.5 1.5 8.5 4-2 2.5-5 4-8.5 4s-6.5-1.5-8.5-4c2-2.5 5-4 8.5-4z" />
          <path d="M12 19c-3.5 0-6.5-1.5-8.5-4 2-2.5 5-4 8.5-4s6.5 1.5 8.5 4c-2 2.5-5 4-8.5 4z" />
        </svg>
      )
    },
    { 
      name: 'Node.js', 
      icon: (props) => (
        <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2v20M2 7l10-5 10 5M2 17l10 5 10-5" />
          <path d="M2 7v10M22 7v10" />
        </svg>
      )
    },
    { 
      name: 'MySQL', 
      icon: (props) => (
        <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4h16v16H4z" />
          <path d="M9 8h6M9 12h6M9 16h4" />
          <circle cx="16.5" cy="16.5" r="1" fill="currentColor" stroke="none" />
        </svg>
      )
    },
    { 
      name: 'Supabase', 
      icon: (props) => (
        <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 12h16M8 4v16M16 4v16" />
          <path d="M12 4v16" />
          <circle cx="12" cy="8" r="1" fill="currentColor" stroke="none" />
          <circle cx="12" cy="16" r="1" fill="currentColor" stroke="none" />
        </svg>
      )
    },
  ];

  // Duplicate the technologies array to create a seamless loop
  const marqueeItems = [...technologies, ...technologies, ...technologies];

  return (
    <section id="tech-stack-section" className="py-20 bg-wood-panel-light overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-amber-900 mb-4">Tech Stack</h2>
          <div className="w-20 h-0.5 bg-amber-700/30 mx-auto mb-4"></div>
          <p className="text-amber-800/70 max-w-2xl mx-auto">
            Technologies I work with to bring ideas to life
          </p>
        </div>
      </div>

      {/* Marquee Container */}
      <div className="relative w-full">
        {/* Gradient fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-wood-panel-light to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-wood-panel-light to-transparent z-10"></div>
        
        {/* Scrolling marquee */}
        <div className="flex animate-marquee whitespace-nowrap">
          {marqueeItems.map((tech, index) => {
            const IconComponent = tech.icon;
            return (
              <div
                key={index}
                className="inline-block mx-4 group"
              >
                {/* Card */}
                <div className="relative bg-white/90 backdrop-blur-sm w-32 h-32 md:w-36 md:h-36 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-amber-200/50 overflow-hidden hover:scale-105">
                  {/* Subtle wood grain overlay */}
                  <div className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage: `repeating-linear-gradient(
                        45deg,
                        transparent,
                        transparent 2px,
                        rgba(160, 110, 60, 0.1) 2px,
                        rgba(160, 110, 60, 0.1) 4px
                      )`
                    }}
                  ></div>
                  
                  <div className="relative h-full flex flex-col items-center justify-center p-4">
                    {/* Icon container */}
                    <div className="mb-2 w-12 h-12 md:w-14 md:h-14">
                      <div className="w-full h-full flex items-center justify-center text-amber-700">
                        <IconComponent className="w-full h-full" />
                      </div>
                    </div>
                    
                    {/* Technology name */}
                    <h3 className="text-center font-medium text-amber-800 text-xs md:text-sm whitespace-normal">
                      {tech.name}
                    </h3>
                    
                    {/* Simple dot accent */}
                    <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-1 h-1 rounded-full bg-amber-300"></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Pause on hover instruction */}
      <div className="text-center mt-8">
        <p className="text-amber-600/60 text-sm italic">
          Hover to pause • Scroll to explore
        </p>
      </div>
    </section>
  );
};

export default TechStack;