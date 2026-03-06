import React from 'react';

const About = () => {
  return (
    <section id="about-section" className="py-20 bg-white/95 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Section header with wooden accent */}
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl text-amber-900 mb-4">About</h2>
            <div className="w-20 h-0.5 bg-amber-700/30 mx-auto"></div>
          </div>

          {/* Content with wooden panel effect */}
          <div className="relative">
            <div className="absolute inset-0 bg-amber-100/50 rounded-2xl transform rotate-1"></div>
            <div className="relative bg-white p-8 md:p-10 rounded-2xl shadow-lg border border-amber-200/50">
              
              {/* The Basics */}
              <div className="mb-8">
                <h3 className="font-serif text-xl text-amber-900 mb-3 flex items-center gap-2">
                  <span className="w-1 h-6 bg-amber-700 rounded-full"></span>
                  The Basics
                </h3>
                <p className="text-amber-900/80 leading-relaxed">
                  Hi there, I'm <span className="font-semibold">Rylee Miguel N. Pamintuan</span>! I'm an aspiring web and app developer. Whether I'm writing code or solving problems, I'm deeply passionate about using my craft to make digital business ideas come to life.
                </p>
              </div>

              {/* Professional Life */}
              <div className="mb-8">
                <h3 className="font-serif text-xl text-amber-900 mb-3 flex items-center gap-2">
                  <span className="w-1 h-6 bg-amber-700 rounded-full"></span>
                  Professional Life
                </h3>
                <p className="text-amber-900/80 leading-relaxed">
                  Currently, I'm working as a web and app developer at a pioneering company called <span className="font-medium text-amber-800">Growth Gains Solution</span>. Alongside my professional work, I am completing my studies and will be graduating soon, around July.
                </p>
                <p className="text-amber-900/80 leading-relaxed mt-3">
                  Day-to-day, I'm heavily focused on expanding my skills in app development. I love diving into the technical details, specifically using APIs to enhance workflows and elevate the overall quality of my outputs. My ultimate goal is to contribute tangible value to a company by turning complex digital concepts into beautifully functional, real-world applications.
                </p>
              </div>

              {/* Personal Life */}
              <div className="mb-8">
                <h3 className="font-serif text-xl text-amber-900 mb-3 flex items-center gap-2">
                  <span className="w-1 h-6 bg-amber-700 rounded-full"></span>
                  Personal Life
                </h3>
                <p className="text-amber-900/80 leading-relaxed">
                  When I'm not developing or staring at lines of code, I love going out to discover new coffee shops and taking nature trips to visit mesmerizing places. I also enjoy unwinding with a good gaming session in my free time—I'm a big fan of MOBA games, especially <span className="font-medium text-amber-800">League of Legends: Wild Rift</span>.
                </p>
              </div>

              {/* Wood grain detail */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-700/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;