import React, { useState } from 'react';

// Import all local images
import biosortJpeg from '../images/capstone/biosort.JPEG';
import biosortDashboard from '../images/capstone/biosort-dashboard.png';
import biosortFinetune from '../images/capstone/biosort-finetune.png';
import design2 from '../images/designs/2.jpg';
import design6 from '../images/designs/6.jpg';
import design10 from '../images/designs/10.jpg';
import design17 from '../images/designs/17.jpg';
import design36 from '../images/designs/36.jpg';

// Import DPWH internship images
import dpwhLogin from '../images/dpwh/login.png';
import dpwhDashboard from '../images/dpwh/dashboard.png';
import dpwhEquipment from '../images/dpwh/equipment.png';
import dpwhAddEquip from '../images/dpwh/addequip.png';
import dpwhImportEquip from '../images/dpwh/importequip.png';

const Experiences = () => {
  const [activeExperience, setActiveExperience] = useState('dpwh');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showGallery, setShowGallery] = useState(false);
  const [galleryImages, setGalleryImages] = useState([]);

  // Carousel images for each experience with unique descriptions
  const carousels = {
    university: {
      title: 'University',
      images: [
        {
          id: 1,
          url: biosortJpeg,
          caption: 'BioSort - Automated Waste Sorting Bin',
          description: 'I developed the core computer vision system for BioSort using Roboflow for object detection. I integrated their API into our website to identify biodegradable materials in real-time and trigger the sorting mechanism.'
        },
        {
          id: 2,
          url: biosortDashboard,
          caption: 'BioSort Monitoring Dashboard',
          description: 'I created the dashboard that displays real-time data from the Roboflow API, including what the camera sees, waste detection results with confidence scores, sorting status, and biogas conversion metrics. I built this using React to provide an intuitive interface for monitoring system performance.'
        },
        {
          id: 3,
          url: biosortFinetune,
          caption: 'BioSort Fine-Tuning Interface',
          description: 'I designed and built the fine-tuning page where users can upload new images to improve the Roboflow model. The interface sends data to Roboflow\'s API to retrain the model, allowing the object detection system to continuously learn and become more accurate at identifying different types of waste.'
        }
      ]
    },
    boris: {
      title: 'Boris Cafe',
      description: 'Graphic Designer & Social Media Manager',
      fullDescription: `I led the strategic curation and visual direction of Boris Cafe's Instagram presence, transforming the feed into a cohesive and brand-aligned digital storefront. Designed high-impact promotional graphics, menu launch visuals, and store announcements that elevated brand perception and strengthened audience engagement.`,
      stats: {
        designs: '25+',
        engagement: '40%',
        reach: '10k+',
        tools: 'Canva'
      },
      images: [
        {
          id: 1,
          url: design2,
          caption: 'Promotional Campaign Design',
          category: 'Social Media',
          description: 'I designed eye-catching promotional graphics that highlighted seasonal offers and special promotions, driving customer engagement and foot traffic to the cafe.',
          date: '2024'
        },
        {
          id: 2,
          url: design6,
          caption: 'Menu Update Announcement',
          category: 'Menu Design',
          description: 'I created visually appealing menu announcement posts whenever new drinks or food items were introduced, ensuring customers were always informed about the latest offerings.',
          date: '2024'
        },
        {
          id: 3,
          url: design10,
          caption: 'Store Update & Announcement',
          category: 'Social Media',
          description: 'I designed graphics for important store updates including holiday hours, special events, and operational announcements, maintaining clear communication with customers.',
          date: '2024'
        },
        {
          id: 4,
          url: design17,
          caption: 'Featured Product Showcase',
          category: 'Social Media',
          description: 'I created standout product showcase posts that highlighted Boris Cafe\'s best-selling drinks and food items, using appetizing visuals to attract customers.',
          date: '2024'
        },
        {
          id: 5,
          url: design36,
          caption: 'Brand Consistency Series',
          category: 'Social Media',
          description: 'I developed a consistent visual identity across all posts, ensuring that every graphic aligned with Boris Cafe\'s brand aesthetic while maintaining freshness and variety in the feed.',
          date: '2024'
        }
      ]
    },
    dpwh: {
      title: 'DPWH Internship',
      fullDescription: `During my internship at the Department of Public Works and Highways (DPWH), I developed a digital inventory system to improve the tracking and management of ICT equipment across departments. Integrated CSV import and export capabilities to streamline bulk data processing and simplify report generation, reducing manual workload and improving data accuracy.`,
      stats: {
        efficiency: '40%',
        users: '50+',
        equipment: '500+',
        features: '5+'
      },
      images: [
        {
          id: 1,
          url: dpwhLogin,
          caption: 'Secure Authentication System',
          description: 'I implemented a role-based authentication system with secure login and session management, ensuring that only authorized personnel can access sensitive equipment data. This added a critical layer of security to protect government assets.',
          category: 'Security',
          date: '2024'
        },
        {
          id: 2,
          url: dpwhDashboard,
          caption: 'Analytics Dashboard',
          description: 'I built an interactive dashboard that provides real-time visibility into equipment inventory, status distribution, and usage patterns. This allows managers to make data-driven decisions about equipment allocation and maintenance scheduling.',
          category: 'Analytics',
          date: '2024'
        },
        {
          id: 3,
          url: dpwhEquipment,
          caption: 'Equipment Management Interface',
          description: 'I designed and developed a comprehensive equipment listing interface with advanced filtering, search, and sorting capabilities. Users can quickly locate specific equipment, view detailed information, and track assignment history—reducing search time by over 60%.',
          category: 'Management',
          date: '2024'
        },
        {
          id: 4,
          url: dpwhAddEquip,
          caption: 'Streamlined Equipment Addition',
          description: 'I created an intuitive form interface for adding new equipment with validation and error handling. The system automatically generates property numbers and ensures data consistency, eliminating manual entry errors and saving approximately 15 minutes per equipment entry.',
          category: 'Workflow',
          date: '2024'
        },
        {
          id: 5,
          url: dpwhImportEquip,
          caption: 'Bulk Import Functionality',
          description: 'I implemented a powerful CSV import feature that allows administrators to upload hundreds of equipment records in seconds. The system validates data, handles errors gracefully, and provides clear feedback—transforming what used to be a days-long process into a 5-minute task.',
          category: 'Automation',
          date: '2024'
        }
      ]
    }
  };

  const activeCarousel = carousels[activeExperience];
  const currentImage = activeCarousel.images?.[currentImageIndex];

  const handleExperienceChange = (experience) => {
    setActiveExperience(experience);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (!activeCarousel.images) return;
    setCurrentImageIndex((prev) => 
      prev === activeCarousel.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    if (!activeCarousel.images) return;
    setCurrentImageIndex((prev) => 
      prev === 0 ? activeCarousel.images.length - 1 : prev - 1
    );
  };

  const openGallery = () => {
    if (activeExperience === 'boris' && activeCarousel.images) {
      setGalleryImages(activeCarousel.images);
      setShowGallery(true);
    }
  };

  return (
    <section id="experiences-section" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Section header with wood tone */}
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl text-amber-900 mb-3">Experiences</h2>
            <div className="w-12 h-0.5 bg-amber-700/30 mx-auto"></div>
          </div>

          {/* Unified container with wooden border */}
          <div className="border border-amber-200/70 rounded-lg overflow-hidden bg-white shadow-sm">
            <div className="flex flex-col md:flex-row">
              {/* Left sidebar - warm wood background */}
              <div className="md:w-1/4 border-r border-amber-200/70 bg-amber-50/30">
                <div className="p-4">
                  <h3 className="font-serif text-sm uppercase tracking-wider text-amber-800 mb-3">
                    Experiences
                  </h3>
                  <div className="space-y-1">
                    {['university', 'boris', 'dpwh'].map((exp) => (
                      <button
                        key={exp}
                        onClick={() => handleExperienceChange(exp)}
                        className={`w-full text-left px-3 py-2 rounded transition-all duration-200 ${
                          activeExperience === exp
                            ? 'bg-amber-800 text-white'
                            : 'text-amber-800 hover:bg-amber-100/50'
                        }`}
                      >
                        <span className="text-sm font-medium">
                          {exp === 'university' && (
                            <span className="flex items-center gap-1">
                              University
                              <span className="text-xs bg-amber-200 text-amber-800 px-1.5 py-0.5 rounded-full ml-1">
                                BioSort
                              </span>
                            </span>
                          )}
                          {exp === 'boris' && (
                            <span className="flex items-center gap-1">
                              Boris Cafe
                              <span className="text-xs bg-amber-200 text-amber-800 px-1.5 py-0.5 rounded-full ml-1">
                                Design
                              </span>
                            </span>
                          )}
                          {exp === 'dpwh' && (
                            <span className="flex items-center gap-1">
                              DPWH Internship
                              <span className="text-xs bg-amber-200 text-amber-800 px-1.5 py-0.5 rounded-full ml-1">
                                Dev
                              </span>
                            </span>
                          )}
                        </span>
                      </button>
                    ))}
                  </div>
                  
                  {/* Image counter */}
                  {activeCarousel.images && (
                    <div className="mt-4 pt-3 border-t border-amber-200/70">
                      <div className="flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-amber-600"></div>
                        <p className="text-xs text-amber-700">
                          {currentImageIndex + 1} / {activeCarousel.images.length} images
                        </p>
                      </div>
                      
                      {/* Wood grain decoration */}
                      <div className="mt-3 flex gap-1">
                        <div className="w-1 h-1 rounded-full bg-amber-300"></div>
                        <div className="w-1 h-1 rounded-full bg-amber-400"></div>
                        <div className="w-1 h-1 rounded-full bg-amber-300"></div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Right side */}
              <div className="md:w-3/4">
                <div className="p-4">
                  {/* Experience title */}
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-serif text-lg text-amber-900">
                      {activeCarousel.title}
                    </h3>
                    
                    {/* Gallery button for Boris Cafe */}
                    {activeExperience === 'boris' && (
                      <button
                        onClick={openGallery}
                        className="flex items-center gap-1 text-xs bg-amber-100 text-amber-700 px-3 py-1 rounded-full hover:bg-amber-200 transition-colors"
                      >
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                        </svg>
                        View Full Gallery
                        <span className="bg-amber-800 text-white text-xs rounded-full px-1.5">
                          {activeCarousel.images?.length || 0}
                        </span>
                      </button>
                    )}
                  </div>

                  {/* Enhanced Role/Context for Boris Cafe */}
                  {activeExperience === 'boris' && (
                    <div className="mb-4 p-4 bg-amber-50 rounded-lg border border-amber-200/50">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="bg-amber-200 px-3 py-1 rounded-full text-xs font-medium text-amber-800">🎨 Graphic Designer</span>
                        <span className="bg-amber-200 px-3 py-1 rounded-full text-xs font-medium text-amber-800">📱 Social Media Manager</span>
                      </div>
                      <p className="text-sm text-amber-800 leading-relaxed">
                        I led the strategic curation and visual direction of Boris Cafe's Instagram presence, transforming the feed into a cohesive and brand-aligned digital storefront. Designed high-impact promotional graphics, menu launch visuals, and store announcements that elevated brand perception and strengthened audience engagement.
                      </p>
                    </div>
                  )}

                  {/* Biosort context for University */}
                  {activeExperience === 'university' && (
                    <div className="mb-4 p-3 bg-amber-50 rounded-lg border border-amber-200/50">
                      <div className="flex items-center gap-2 text-sm text-amber-800 mb-1">
                        <span className="bg-amber-200 px-2 py-0.5 rounded-full text-xs">💻 Lead Programmer</span>
                        <span className="bg-amber-200 px-2 py-0.5 rounded-full text-xs">Roboflow • React</span>
                      </div>
                      <p className="text-xs text-amber-600 mt-1">I integrated Roboflow's object detection API into our website for BioSort, an automated waste sorting bin that converts biodegradable materials into biogas</p>
                    </div>
                  )}

                  {/* DPWH context */}
                  {activeExperience === 'dpwh' && (
                    <div className="mb-4 p-3 bg-amber-50 rounded-lg border border-amber-200/50">
                      <div className="flex items-center gap-2 text-sm text-amber-800 mb-1">
                        <span className="bg-amber-200 px-2 py-0.5 rounded-full text-xs">💻 Full Stack Developer</span>
                        <span className="bg-amber-200 px-2 py-0.5 rounded-full text-xs">PHP • MySQL • JavaScript</span>
                      </div>
                      <p className="text-xs text-amber-600 mt-1">*Disclaimer: All data in the screenshots are Mockup data / Fake data*</p>
                      <p className="text-xs text-amber-600 mt-1">I developed a digital inventory system to improve the tracking and management of ICT equipment across departments. Integrated CSV import and export capabilities to streamline bulk data processing and simplify report generation, reducing manual workload and improving data accuracy.</p>
                    </div>
                  )}

                  {/* Main image with navigation - conditional orientation */}
                  {activeCarousel.images && (
                    <>
                      {/* Main image container - conditional aspect ratio */}
                      <div className={`relative w-full ${
                        activeExperience === 'boris' 
                          ? 'max-w-[400px] mx-auto aspect-[4/5]' 
                          : 'aspect-video'
                      } rounded-lg overflow-hidden bg-amber-100 group border border-amber-200/50`}>
                        <img
                          src={currentImage.url}
                          alt={currentImage.caption}
                          className="w-full h-full object-cover"
                        />
                        
                        {/* Navigation arrows */}
                        <button
                          onClick={prevImage}
                          className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 border border-amber-200/50 shadow-sm"
                        >
                          <svg className="w-4 h-4 text-amber-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
                          </svg>
                        </button>
                        
                        <button
                          onClick={nextImage}
                          className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 border border-amber-200/50 shadow-sm"
                        >
                          <svg className="w-4 h-4 text-amber-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                          </svg>
                        </button>

                        {/* Image caption */}
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-amber-900/70 to-transparent py-2 px-3">
                          <p className="text-xs text-white/90">
                            {currentImage.caption}
                          </p>
                        </div>

                        {/* Category badge for Boris Cafe and DPWH */}
                        {(activeExperience === 'boris' || activeExperience === 'dpwh') && currentImage.category && (
                          <div className="absolute top-2 left-2">
                            <span className={`text-xs ${
                              activeExperience === 'dpwh' 
                                ? 'bg-blue-600/90 text-white' 
                                : 'bg-white/90 text-amber-800'
                            } px-2 py-1 rounded-full`}>
                              {currentImage.category}
                            </span>
                          </div>
                        )}

                        {/* Wooden corner accents */}
                        <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-white/40 rounded-tl-lg"></div>
                        <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-white/40 rounded-br-lg"></div>
                      </div>

                      {/* Thumbnail strip - conditional thumbnail aspect ratio */}
                      <div className="flex gap-1 mt-2 justify-center">
                        {activeCarousel.images.map((image, index) => (
                          <button
                            key={image.id}
                            onClick={() => setCurrentImageIndex(index)}
                            className={`${
                              activeExperience === 'boris' 
                                ? 'w-16 h-20' 
                                : 'flex-1 h-10'
                            } rounded overflow-hidden transition-all duration-200 border ${
                              index === currentImageIndex 
                                ? 'border-amber-700 ring-1 ring-amber-700/30 opacity-100' 
                                : 'border-amber-200/50 opacity-60 hover:opacity-100'
                            }`}
                          >
                            <img
                              src={image.url}
                              alt={image.caption}
                              className="w-full h-full object-cover"
                            />
                          </button>
                        ))}
                      </div>

                      {/* Image description */}
                      <div className="mt-2 pt-3 border-t border-amber-200/70">
                        <div className="bg-amber-50/50 p-3 rounded-lg">
                          <div className="flex items-start gap-2">
                            <div className="w-1 h-1 rounded-full bg-amber-600 mt-1.5"></div>
                            <p className="text-xs text-amber-800/80 leading-relaxed">
                              {currentImage.description}
                            </p>
                          </div>
                          
                          {/* Tools used for Boris Cafe */}
                          {activeExperience === 'boris' && (
                            <div className="mt-2 flex items-center gap-2">
                              <span className="text-xs bg-amber-200 text-amber-700 px-2 py-0.5 rounded">
                                ✦ Made with Canva
                              </span>
                              {currentImage.date && (
                                <span className="text-xs text-amber-500">📅 {currentImage.date}</span>
                              )}
                            </div>
                          )}

                          {/* Tech stack for DPWH */}
                          {activeExperience === 'dpwh' && (
                            <div className="mt-2 flex items-center gap-2">
                              <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded">
                                💻 PHP • MySQL • JavaScript
                              </span>
                              {currentImage.date && (
                                <span className="text-xs text-amber-500">📅 {currentImage.date}</span>
                              )}
                            </div>
                          )}
                          
                          {/* Subtle wood grain */}
                          <div className="mt-2 h-px bg-gradient-to-r from-transparent via-amber-200/50 to-transparent"></div>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Modal for Boris Cafe */}
      {showGallery && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setShowGallery(false)}
        >
          <div 
            className="relative max-w-6xl w-full bg-white rounded-xl max-h-[90vh] overflow-y-auto"
            onClick={e => e.stopPropagation()}
          >
            {/* Gallery Header */}
            <div className="sticky top-0 bg-amber-900 text-white p-4 rounded-t-xl flex justify-between items-center">
              <h3 className="font-serif text-xl">Boris Cafe Instagram Gallery</h3>
              <button
                onClick={() => setShowGallery(false)}
                className="text-white/80 hover:text-white"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Gallery Grid - portrait orientation for Instagram posts */}
            <div className="p-6">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {galleryImages.map((image, index) => (
                  <div
                    key={image.id}
                    onClick={() => {
                      setCurrentImageIndex(index);
                      setShowGallery(false);
                    }}
                    className="group relative aspect-[4/5] rounded-lg overflow-hidden border border-amber-200/70 cursor-pointer hover:shadow-lg transition-all"
                  >
                    <img
                      src={image.url}
                      alt={image.caption}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-amber-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="absolute bottom-0 left-0 right-0 p-3">
                        <p className="text-white text-sm font-medium">{image.caption}</p>
                        <p className="text-amber-200 text-xs">{image.category}</p>
                      </div>
                    </div>

                    {/* Category indicator */}
                    <div className="absolute top-2 right-2">
                      <span className="text-xs bg-white/90 text-amber-800 px-2 py-1 rounded-full">
                        {image.category === 'Social Media' ? '📱' : '📋'}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Gallery Footer */}
              <div className="mt-6 text-center text-sm text-amber-600 border-t border-amber-200/50 pt-4">
                <p>📱 Instagram posts I designed for Boris Cafe using Canva (2024)</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Experiences;