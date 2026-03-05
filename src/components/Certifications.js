import React, { useState, useEffect, useRef } from 'react';

// Import all certificate images (1-20)
import cert1 from '../images/certificates/1.jpg';
import cert2 from '../images/certificates/2.jpg';
import cert3 from '../images/certificates/3.jpg';
import cert4 from '../images/certificates/4.jpg';
import cert5 from '../images/certificates/5.jpg';
import cert6 from '../images/certificates/6.jpg';
import cert7 from '../images/certificates/7.jpg';
import cert8 from '../images/certificates/8.jpg';
import cert9 from '../images/certificates/9.jpg';
import cert10 from '../images/certificates/10.jpg';
import cert11 from '../images/certificates/11.jpg';
import cert12 from '../images/certificates/12.png';
import cert13 from '../images/certificates/13.jpg';
import cert14 from '../images/certificates/14.jpg';
import cert15 from '../images/certificates/15.jpg';
import cert16 from '../images/certificates/16.jpg';
import cert17 from '../images/certificates/17.jpg';
import cert18 from '../images/certificates/18.jpg';
import cert19 from '../images/certificates/19.jpg';
import cert20 from '../images/certificates/20.jpg';

const Certifications = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [rotation, setRotation] = useState(0);
  const autoPlayRef = useRef(null);

  const certifications = {
    academic: [
      {
        id: 1,
        title: "Future-Proofing Your Career: Skills for the Digital Age",
        issuer: "Seminar",
        date: "2024",
        fullDescription: "Attended a seminar focused on developing in-demand digital skills and adapting to emerging technologies for long-term career success.",
        shortDescription: "Digital skills & career readiness",
        image: cert1,
        credentialId: "CERT-01",
        color: "from-blue-500 to-blue-600"
      },
      {
        id: 2,
        title: "NDG Linux Essentials",
        issuer: "Partner Certificate",
        date: "2024",
        fullDescription: "Completed foundational training in Linux systems, covering command-line usage, file management, and basic system administration.",
        shortDescription: "Linux fundamentals",
        image: cert2,
        credentialId: "CERT-02",
        color: "from-indigo-500 to-indigo-600"
      },
      {
        id: 3,
        title: "Networking Devices and Initial Configuration",
        issuer: "Cisco / Networking Course",
        date: "2024",
        fullDescription: "Learned how to set up and configure routers and switches, including initial device setup and basic network deployment.",
        shortDescription: "Router & switch configuration",
        image: cert3,
        credentialId: "CERT-03",
        color: "from-purple-500 to-purple-600"
      },
      {
        id: 4,
        title: "Network Addressing and Basic Troubleshooting",
        issuer: "Cisco / Networking Course",
        date: "2024",
        fullDescription: "Gained knowledge in IP addressing, subnetting, and diagnosing common network connectivity issues.",
        shortDescription: "IP addressing & troubleshooting",
        image: cert4,
        credentialId: "CERT-04",
        color: "from-yellow-500 to-yellow-600"
      },
      {
        id: 5,
        title: "Introduction to Packet Tracer Exam",
        issuer: "Cisco",
        date: "2024",
        fullDescription: "Demonstrated proficiency in using Cisco Packet Tracer for network simulation, configuration, and troubleshooting.",
        shortDescription: "Cisco Packet Tracer proficiency",
        image: cert5,
        credentialId: "CERT-05",
        color: "from-green-500 to-green-600"
      },
      {
        id: 6,
        title: "Introduction to Cybersecurity",
        issuer: "Cisco / Online Course",
        date: "2024",
        fullDescription: "Explored core cybersecurity concepts including threats, vulnerabilities, risk management, and digital protection strategies.",
        shortDescription: "Cybersecurity fundamentals",
        image: cert6,
        credentialId: "CERT-06",
        color: "from-teal-500 to-teal-600"
      },
      {
        id: 7,
        title: "SQL Intermediate",
        issuer: "Online Course",
        date: "2024",
        fullDescription: "Enhanced SQL skills with advanced queries, joins, subqueries, and data manipulation techniques.",
        shortDescription: "Advanced SQL queries",
        image: cert7,
        credentialId: "CERT-07",
        color: "from-cyan-500 to-cyan-600"
      },
      {
        id: 8,
        title: "Navigating the Dual Threat of AI and Cybersecurity in Software Development",
        issuer: "Tech Seminar",
        date: "2024",
        fullDescription: "Participated in a discussion on balancing AI innovation with cybersecurity risks in modern software development.",
        shortDescription: "AI & cybersecurity in dev",
        image: cert8,
        credentialId: "CERT-08",
        color: "from-pink-500 to-pink-600"
      },
      {
        id: 9,
        title: "I-AHEAD Program 2022",
        issuer: "OLFU Pampanga (STEM)",
        date: "2022",
        fullDescription: "Completed participation in a STEM enrichment program designed to strengthen academic and technical foundations.",
        shortDescription: "STEM enrichment program",
        image: cert9,
        credentialId: "CERT-09",
        color: "from-orange-500 to-orange-600"
      },
      {
        id: 10,
        title: "Elevate Your IT Career: Trends, Skills, Success Tips & Cloud-Managed Network",
        issuer: "IT Career Seminar",
        date: "2024",
        fullDescription: "Attended a career-focused seminar highlighting IT industry trends, cloud networking, and professional growth strategies.",
        shortDescription: "IT trends & cloud networking",
        image: cert10,
        credentialId: "CERT-10",
        color: "from-red-500 to-red-600"
      },
      {
        id: 11,
        title: "Developer Productivity Tools & Laravel Framework",
        issuer: "From Campus to Career",
        date: "2024",
        fullDescription: "Learned practical development tools and Laravel framework fundamentals to bridge academic learning and industry readiness.",
        shortDescription: "Laravel & dev tools",
        image: cert11,
        credentialId: "CERT-11",
        color: "from-amber-500 to-amber-600"
      },
      {
        id: 12,
        title: "Tech Talk Series",
        issuer: "Technology Seminar",
        date: "2024",
        fullDescription: "Participated in a technology seminar series featuring industry insights and emerging tech discussions.",
        shortDescription: "Industry & emerging tech insights",
        image: cert12,
        credentialId: "CERT-12",
        color: "from-lime-500 to-lime-600"
      },
      {
        id: 13,
        title: "Work-Life Balance & Logo Design Using Adobe Illustrator",
        issuer: "Workshop / Seminar",
        date: "2024",
        fullDescription: "Attended a seminar on maintaining work-life balance and applied creativity by designing logos using Adobe Illustrator.",
        shortDescription: "Design & wellness seminar",
        image: cert13,
        credentialId: "CERT-13",
        color: "from-emerald-500 to-emerald-600"
      },
      {
        id: 14,
        title: "Introduction to Java",
        issuer: "Online Course",
        date: "2024",
        fullDescription: "Learned Java programming fundamentals including syntax, OOP principles, and basic application development.",
        shortDescription: "Java OOP fundamentals",
        image: cert14,
        credentialId: "CERT-14",
        color: "from-violet-500 to-violet-600"
      },
      {
        id: 15,
        title: "Networking Basics",
        issuer: "Cisco / Online Course",
        date: "2024",
        fullDescription: "Studied foundational networking concepts such as protocols, network models, and basic infrastructure components.",
        shortDescription: "Network protocols & models",
        image: cert15,
        credentialId: "CERT-15",
        color: "from-fuchsia-500 to-fuchsia-600"
      },
      {
        id: 16,
        title: "Python Essentials 2",
        issuer: "Cisco / Online Course",
        date: "2024",
        fullDescription: "Advanced Python training covering object-oriented programming, modules, and more complex problem-solving.",
        shortDescription: "Advanced Python & OOP",
        image: cert16,
        credentialId: "CERT-16",
        color: "from-rose-500 to-rose-600"
      },
      {
        id: 17,
        title: "CCNA: Introduction to Networks",
        issuer: "Cisco",
        date: "2024",
        fullDescription: "Completed Cisco's foundational networking course covering network architecture, IP addressing, and basic configuration.",
        shortDescription: "CCNA network foundations",
        image: cert17,
        credentialId: "CERT-17",
        color: "from-sky-500 to-sky-600"
      },
      {
        id: 18,
        title: "Introduction to Data Science",
        issuer: "Online Course",
        date: "2024",
        fullDescription: "Explored data analysis fundamentals, data visualization concepts, and the role of data in decision-making.",
        shortDescription: "Data analysis & visualization",
        image: cert18,
        credentialId: "CERT-18",
        color: "from-blue-500 to-blue-600"
      },
      {
        id: 19,
        title: "Python Essentials 1",
        issuer: "Cisco / Online Course",
        date: "2024",
        fullDescription: "Built strong foundations in Python programming including variables, loops, functions, and logic building.",
        shortDescription: "Python programming basics",
        image: cert19,
        credentialId: "CERT-19",
        color: "from-indigo-500 to-indigo-600"
      },
      {
        id: 20,
        title: "Introduction to SQL",
        issuer: "Online Course",
        date: "2024",
        fullDescription: "Learned the basics of database management, SQL queries, and data retrieval techniques.",
        shortDescription: "SQL & database basics",
        image: cert20,
        credentialId: "CERT-20",
        color: "from-purple-500 to-purple-600"
      }
    ],
    technical: [],
    workshop: []
  };

  const categories = [
    { id: 'all', label: 'All Certifications', icon: '🎓' },
    { id: 'academic', label: 'Academic', icon: '📚' },
  ];

  const getCurrentCerts = () => {
    if (activeCategory === 'all') {
      return [...certifications.academic, ...certifications.technical, ...certifications.workshop];
    }
    return certifications[activeCategory] || [];
  };

  const currentCerts = getCurrentCerts();
  const totalSlides = currentCerts.length;
  const currentCert = currentCerts[currentIndex];

  useEffect(() => {
    setCurrentIndex(0);
    setRotation(0);
  }, [activeCategory]);

  const handleNext = () => {
    if (isAnimating || totalSlides === 0) return;
    setIsAnimating(true);
    setRotation(prev => prev - (360 / totalSlides));
    setCurrentIndex(prev => (prev + 1) % totalSlides);
    setTimeout(() => setIsAnimating(false), 600);
  };

  const handlePrev = () => {
    if (isAnimating || totalSlides === 0) return;
    setIsAnimating(true);
    setRotation(prev => prev + (360 / totalSlides));
    setCurrentIndex(prev => (prev - 1 + totalSlides) % totalSlides);
    setTimeout(() => setIsAnimating(false), 600);
  };

  useEffect(() => {
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    if (totalSlides > 0) {
      autoPlayRef.current = setInterval(handleNext, 5000);
    }
    return () => { if (autoPlayRef.current) clearInterval(autoPlayRef.current); };
  }, [activeCategory, totalSlides]);

  const pauseAutoPlay = () => { if (autoPlayRef.current) clearInterval(autoPlayRef.current); };

  const resumeAutoPlay = () => {
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    if (totalSlides > 0) {
      autoPlayRef.current = setInterval(handleNext, 5000);
    }
  };

  const goToCert = (index) => {
    if (isAnimating || index === currentIndex || totalSlides === 0) return;
    const diff = index - currentIndex;
    const rotationDiff = -diff * (360 / totalSlides);
    setIsAnimating(true);
    setRotation(prev => prev + rotationDiff);
    setCurrentIndex(index);
    setTimeout(() => setIsAnimating(false), 600);
  };

  const getImageStyle = (index) => {
    const radius = 320;
    const angleDeg = (index * (360 / totalSlides)) + rotation;
    const angleRad = angleDeg * (Math.PI / 180);

    const x = Math.sin(angleRad) * radius;
    const z = Math.cos(angleRad) * radius;

    const frontFactorLinear = (z / radius + 1) / 2;
    const frontFactor = Math.pow(frontFactorLinear, 2.5);

    const scale = 0.1 + frontFactor * 0.9;
    const opacity = 0.2 + frontFactor * 0.8;
    const blur = Math.max(0, (1 - frontFactor) * 16);
    const zIndex = Math.round(frontFactor * 200);

    return {
      transform: `translateX(${x}px) translateZ(${z}px) scale(${scale})`,
      opacity,
      filter: `blur(${blur}px)`,
      zIndex,
      transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.6s ease, filter 0.6s ease',
      position: 'absolute',
      left: '50%',
      top: '50%',
      width: '380px',
      height: '270px',
      marginLeft: '-190px',
      marginTop: '-135px',
      cursor: 'pointer',
    };
  };

  return (
    <section
      id="certifications"
      className="py-20 bg-gradient-to-b from-white to-amber-50/30 min-h-screen flex items-center"
      onMouseEnter={pauseAutoPlay}
      onMouseLeave={resumeAutoPlay}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl text-amber-900 mb-3">Certifications</h2>
            <div className="w-16 h-0.5 bg-amber-200 mx-auto mb-4"></div>
            <p className="text-amber-600 max-w-2xl mx-auto">
              Academic achievements, technical certifications, and workshops
            </p>
          </div>

          {/* Category pills */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat.id
                    ? 'bg-amber-800 text-white shadow-lg scale-105'
                    : 'bg-white text-amber-700 border border-amber-200 hover:bg-amber-50'
                }`}
              >
                <span className="mr-2">{cat.icon}</span>
                {cat.label}
              </button>
            ))}
          </div>

          {/* Main carousel container */}
          {totalSlides > 0 && currentCert && (
            <div className="relative">
              <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-amber-200/70 overflow-hidden">
                <div className="flex flex-col lg:flex-row">
                  {/* Left side - Description */}
                  <div className="lg:w-2/5 p-8 lg:p-10 bg-gradient-to-br from-amber-50 to-white">
                    <div className="h-full flex flex-col">
                      <div className="mb-4">
                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium text-white bg-gradient-to-r ${currentCert.color}`}>
                          {categories.find(c => c.id === activeCategory)?.label ?? 'Academic'}
                        </span>
                      </div>

                      <h3 className="font-serif text-2xl lg:text-3xl text-amber-900 mb-2">
                        {currentCert.title}
                      </h3>
                      <p className="text-amber-700 mb-1">{currentCert.issuer}</p>
                      <p className="text-sm text-amber-500 mb-6">{currentCert.date}</p>

                      <div className="flex-1">
                        <p className="text-amber-700 leading-relaxed mb-4">
                          {currentCert.fullDescription}
                        </p>
                        <div className="inline-block bg-amber-100 rounded-full px-3 py-1 mb-6">
                          <span className="text-xs text-amber-700">✨ {currentCert.shortDescription}</span>
                        </div>
                      </div>

                      <div className="mt-auto">
                        <div className="bg-amber-100/50 rounded-lg p-3 border border-amber-200/50">
                          <p className="text-xs text-amber-500 mb-1">Credential ID</p>
                          <p className="text-sm font-mono text-amber-800">{currentCert.credentialId}</p>
                        </div>
                      </div>

                      <div className="flex justify-center lg:justify-start gap-2 mt-6">
                        {currentCerts.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => goToCert(index)}
                            className={`transition-all duration-300 ${
                              index === currentIndex
                                ? 'w-8 h-2 bg-amber-800 rounded-full'
                                : 'w-2 h-2 bg-amber-300 rounded-full hover:bg-amber-400'
                            }`}
                            aria-label={`Go to certification ${index + 1}`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right side - Carousel */}
                  <div className="lg:w-3/5 relative overflow-hidden bg-gradient-to-br from-amber-900/5 to-amber-800/5 h-[600px]">
                    <div
                      className="absolute inset-0"
                      style={{
                        perspective: '1400px',
                        perspectiveOrigin: '50% 50%',
                      }}
                    >
                      <div
                        className="absolute inset-0"
                        style={{ transformStyle: 'preserve-3d' }}
                      >
                        {currentCerts.map((cert, index) => (
                          <div
                            key={cert.id}
                            style={getImageStyle(index)}
                            onClick={() => goToCert(index)}
                          >
                            <div className="relative w-full h-full rounded-xl overflow-hidden shadow-2xl bg-white">
                              <img
                                src={cert.image}
                                alt={cert.title}
                                className="w-full h-full object-cover"
                              />

                              {index === currentIndex && (
                                <div className="absolute inset-0 border-4 border-amber-400/60 rounded-xl pointer-events-none"></div>
                              )}

                              <div className={`absolute bottom-2 right-2 ${
                                index === currentIndex
                                  ? 'bg-amber-600 text-white'
                                  : 'bg-black/50 text-white/80'
                              } backdrop-blur-sm text-xs px-2 py-1 rounded-full`}>
                                #{index + 1}
                              </div>

                              <div className="absolute bottom-2 left-2 opacity-0 hover:opacity-100 transition-opacity">
                                <div className="bg-black/70 text-white text-xs px-2 py-1 rounded-full whitespace-nowrap">
                                  {cert.title}
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Center glow */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-amber-400/10 rounded-full blur-3xl pointer-events-none"></div>

                    {/* Navigation arrows */}
                    <button
                      onClick={handlePrev}
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm shadow-lg flex items-center justify-center transition-all duration-300 z-[300] hover:scale-110 opacity-70 hover:opacity-100"
                    >
                      <svg className="w-6 h-6 text-amber-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>

                    <button
                      onClick={handleNext}
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm shadow-lg flex items-center justify-center transition-all duration-300 z-[300] hover:scale-110 opacity-70 hover:opacity-100"
                    >
                      <svg className="w-6 h-6 text-amber-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>

                    {/* Current title indicator */}
                    <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-amber-800/90 text-white text-sm px-4 py-2 rounded-full z-[300] whitespace-nowrap">
                      {currentCert.title}
                    </div>

                    {/* Image counter */}
                    <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-sm text-white text-sm px-4 py-2 rounded-full z-[300]">
                      {currentIndex + 1} / {totalSlides}
                    </div>

                    {/* Progress bar */}
                    <div className="absolute bottom-4 left-4 flex gap-1 z-[300]">
                      <div className="w-20 h-1.5 bg-white/30 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-amber-500 rounded-full transition-all duration-300"
                          style={{ width: `${((currentIndex + 1) / totalSlides) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Empty state */}
          {totalSlides === 0 && (
            <div className="text-center py-16 bg-white/50 rounded-2xl border border-amber-200/70">
              <p className="text-amber-600">No certifications found in this category.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Certifications;