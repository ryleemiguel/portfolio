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
              <p className="text-amber-900/80 leading-relaxed mb-6">
                I'm an aspiring full-stack software engineer with hands-on experience building web applications and IoT systems. I work mainly with JavaScript, Python, and PHP, and I've led multiple academic, freelance, and capstone projects focused on automation, computer vision, and real-world problem solving.
              </p>
              <p className="text-amber-900/80 leading-relaxed">
                I'm also an active officer of the Fatinanian Computing and Multimedia Society.
              </p>

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