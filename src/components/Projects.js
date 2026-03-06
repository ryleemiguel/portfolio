import React, { useState } from 'react';

// Import all design images (1-54)
import design1 from '../images/designs/1.jpg';
import design2 from '../images/designs/2.jpg';
import design3 from '../images/designs/3.jpg';
import design4 from '../images/designs/4.jpg';
import design5 from '../images/designs/5.jpg';
import design6 from '../images/designs/6.jpg';
import design7 from '../images/designs/7.jpg';
import design8 from '../images/designs/8.jpg';
import design9 from '../images/designs/9.jpg';
import design10 from '../images/designs/10.jpg';
import design11 from '../images/designs/11.jpg';
import design12 from '../images/designs/12.jpg';
import design13 from '../images/designs/13.jpg';
import design14 from '../images/designs/14.jpg';
import design15 from '../images/designs/15.jpg';
import design16 from '../images/designs/16.jpg';
import design17 from '../images/designs/17.jpg';
import design18 from '../images/designs/18.jpg';
import design19 from '../images/designs/19.jpg';
import design20 from '../images/designs/20.jpg';
import design21 from '../images/designs/21.jpg';
import design22 from '../images/designs/22.jpg';
import design23 from '../images/designs/23.jpg';
import design24 from '../images/designs/24.jpg';
import design25 from '../images/designs/25.jpg';
import design26 from '../images/designs/26.jpg';
import design27 from '../images/designs/27.jpg';
import design28 from '../images/designs/28.jpg';
import design29 from '../images/designs/29.jpg';
import design30 from '../images/designs/30.jpg';
import design31 from '../images/designs/31.jpg';
import design32 from '../images/designs/32.jpg';
import design33 from '../images/designs/33.jpg';
import design34 from '../images/designs/34.jpg';
import design35 from '../images/designs/35.jpg';
import design36 from '../images/designs/36.jpg';
import design37 from '../images/designs/37.jpg';
import design38 from '../images/designs/38.jpg';
import design39 from '../images/designs/39.jpg';
import design40 from '../images/designs/40.jpg';
import design41 from '../images/designs/41.jpg';
import design42 from '../images/designs/42.jpg';
import design43 from '../images/designs/43.jpg';
import design44 from '../images/designs/44.jpg';
import design45 from '../images/designs/45.jpg';
import design46 from '../images/designs/46.jpg';
import design47 from '../images/designs/47.jpg';
import design48 from '../images/designs/48.jpg';
import design49 from '../images/designs/49.jpg';
import design50 from '../images/designs/50.jpg';
import design51 from '../images/designs/51.jpg';
import design52 from '../images/designs/52.jpg';
import design53 from '../images/designs/53.jpg';
import design54 from '../images/designs/54.jpg';

// Import DPWH inventory system screenshots
import dpwhLogin from '../images/dpwh/login.png';
import dpwhDashboard from '../images/dpwh/dashboard.png';
import dpwhEquipment from '../images/dpwh/equipment.png';
import dpwhAddEquip from '../images/dpwh/addequip.png';
import dpwhImportEquip from '../images/dpwh/importequip.png';

// Import BioSort images
import biosortJpeg from '../images/capstone/biosort.JPEG';
import biosortDashboard from '../images/capstone/biosort-dashboard.png';
import biosortFinetune from '../images/capstone/biosort-finetune.png';

// Create arrays of imported images
const socialImages = [
  design1, design2, design3, design4, design5, design6, design7, design8, design9, design10,
  design11, design12, design13, design14, design15, design16, design17, design18, design19, design20,
  design21, design22, design23, design24
];

const menuImages = [
  design25, design26, design27, design28, design29, design30, design31, design32, design33, design34,
  design35, design36, design37, design38, design39
];

const promoImages = [
  design40, design41, design42, design43, design44, design45, design46, design47, design48, design49,
  design50, design51, design52, design53, design54
];

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);
  const [filter, setFilter] = useState('all');
  const [previewImage, setPreviewImage] = useState(null);
  const [previewIndex, setPreviewIndex] = useState(0);
  const [previewGallery, setPreviewGallery] = useState(null);
  const [galleryProject, setGalleryProject] = useState(null);

  // Generate array of image objects from imported images
  const generateBorisImages = (imagesArray, startNum, category, baseCaption) => {
    return imagesArray.map((img, index) => ({
      url: img,
      caption: `${baseCaption} ${startNum + index}`,
      description: `Boris Cafe design ${startNum + index}`,
      date: "2025"
    }));
  };

  const projects = [
    // ========== WEB DEVELOPMENT / IOT PROJECTS ==========
    {
      id: 1,
      title: "BioSort - Automated Waste Sorting System",
      category: "web",
      type: "IoT • Computer Vision",
      description: "An automated waste sorting bin that converts biodegradable materials into biogas using computer vision and IoT sensors.",
      longDescription: "As Lead Programmer for BioSort, I developed the core computer vision system using Roboflow for object detection and integrated their API into our web application. The system identifies biodegradable materials in real-time and triggers the sorting mechanism. I also built a comprehensive monitoring dashboard using React that displays real-time data from the Roboflow API, including waste detection results with confidence scores, sorting status, and biogas conversion metrics. Additionally, I designed a fine-tuning interface that allows users to upload new images to improve the model, enabling continuous learning and increased accuracy.",
      tech: ["Python", "Roboflow", "React", "OpenCV", "Raspberry Pi"],
      role: "Lead Programmer",
      duration: "4 months",
      coverImage: biosortJpeg,
      images: [
        { url: biosortJpeg, caption: "BioSort - Automated Waste Sorting Bin", description: "The physical system with computer vision capabilities for waste identification and sorting." },
        { url: biosortDashboard, caption: "Real-time Monitoring Dashboard", description: "React dashboard displaying waste detection results, confidence scores, and biogas conversion metrics from the Roboflow API." },
        { url: biosortFinetune, caption: "Model Fine-tuning Interface", description: "Web interface that allows users to upload new images to retrain and improve the object detection model." }
      ],
      features: [
        "Real-time object detection with Roboflow API",
        "Automated waste sorting mechanism",
        "Biogas conversion monitoring",
        "Interactive analytics dashboard",
        "Model fine-tuning capabilities",
        "Continuous learning system"
      ],
      results: [
        "2nd place in regional hackathon",
        "Successfully identifies 85% of waste types",
        "Reduces manual sorting time by 70%",
        "Featured as university capstone project"
      ],
      highlights: ["Hackathon Winner", "Capstone Project"]
    },
    {
      id: 6,
      title: "DPWH Equipment Inventory System",
      category: "web",
      type: "Full Stack",
      description: "A comprehensive equipment inventory management system for the Department of Public Works and Highways.",
      longDescription: "During my internship at DPWH, I developed a full-stack inventory management system that digitized their equipment tracking processes. The system features secure authentication, real-time dashboard analytics, equipment management, and bulk import capabilities—reducing manual data entry time by 80% and providing instant visibility into equipment status across projects.",
      tech: ["PHP", "MySQL", "JavaScript", "Bootstrap"],
      role: "Full Stack Developer",
      duration: "2 months",
      coverImage: dpwhDashboard,
      images: [
        { url: dpwhLogin, caption: "Secure Login System", description: "Role-based authentication with session management to ensure only authorized personnel can access sensitive equipment data." },
        { url: dpwhDashboard, caption: "Analytics Dashboard", description: "Real-time dashboard showing equipment statistics, status distribution, and recent activities for data-driven decision making." },
        { url: dpwhEquipment, caption: "Equipment Management", description: "Comprehensive equipment listing with search, filter, and sort capabilities—reducing search time by over 60%." },
        { url: dpwhAddEquip, caption: "Add Equipment Form", description: "Intuitive form interface with validation that automatically generates property numbers and ensures data consistency." },
        { url: dpwhImportEquip, caption: "Bulk Import Feature", description: "CSV import functionality that allows administrators to upload hundreds of equipment records in seconds instead of days." }
      ],
      features: [
        "Role-based authentication",
        "Interactive analytics dashboard",
        "Equipment tracking with search/filter",
        "Automated property number generation",
        "Bulk CSV import/export",
        "Activity logging"
      ],
      results: [
        "40% reduction in processing time",
        "500+ equipment items tracked",
        "80% faster data entry",
        "Used by 50+ personnel"
      ],
      disclaimer: "All data shown in screenshots are mock-ups and for demonstration purposes only. No actual government data is displayed.",
      highlights: ["Real-world government deployment", "Digitized manual processes"]
    },

    // ========== BORIS CAFE DESIGN PROJECTS ==========
    {
      id: 7,
      title: "Boris Cafe - Social Media Posts",
      category: "design",
      type: "Social Media Design",
      description: "Complete collection of social media posts (24 designs) created for Boris Cafe's Instagram and Facebook.",
      longDescription: "As Graphic Designer at Boris Cafe, I created a consistent visual identity across all social media platforms. This collection showcases 24 social media posts I designed to engage customers and promote products.",
      tools: ["Canva", "Instagram", "Facebook"],
      role: "Graphic Designer & Social Media Marketer",
      duration: "2025",
      coverImage: design1,
      images: generateBorisImages(socialImages, 1, "social", "Social Media Post"),
      features: [
        "Consistent brand identity",
        "Engaging visual content",
        "Strategic posting schedule",
        "Audience engagement",
        "Product promotions",
        "Event announcements"
      ],
      results: [
        "40% increase in engagement",
        "24 posts created",
        "10k+ monthly reach"
      ]    },
    {
      id: 8,
      title: "Boris Cafe - Menu Designs",
      category: "design",
      type: "Menu Design",
      description: "Digital and print menu designs (15 designs) for Boris Cafe.",
      longDescription: "Created a complete set of menu designs including main menu, seasonal specials, and drink collections. Each design focuses on visual hierarchy and appetizing presentation.",
      tools: ["Canva"],
      role: "Graphic Designer",
      duration: "2025",
      coverImage: design25,
      images: generateBorisImages(menuImages, 25, "menu", "Menu Design"),
      features: [
        "Clear visual hierarchy",
        "Appetizing food photography",
        "Easy-to-read layout",
        "Brand consistency",
        "Seasonal variations",
        "Digital and print formats"
      ],
      results: [
        "Used in cafe daily",
        "Positive customer feedback",
        "15 menu variations"
      ]
    },
    {
      id: 9,
      title: "Boris Cafe - Promotional Campaigns",
      category: "design",
      type: "Marketing Design",
      description: "Special promotional materials (15 designs) for events and campaigns.",
      longDescription: "Designed promotional graphics for special events, holiday seasons, and marketing campaigns. These designs helped drive customer engagement and boost sales during key periods.",
      tools: ["Canva"],
      role: "Graphic Designer",
      duration: "2025",
      coverImage: design40,
      images: generateBorisImages(promoImages, 40, "promo", "Promotional Design"),
      features: [
        "Seasonal themes",
        "Event announcements",
        "Special offers",
        "Holiday campaigns",
        "Anniversary celebrations",
        "Loyalty program promos"
      ],
      results: [
        "30% sales boost during campaigns",
        "200+ loyalty signups",
        "15 promotional designs"
      ]
    }
  ];

  const filters = [
    { value: 'all', label: 'All Projects' },
    { value: 'web', label: 'Web Development / IoT' },
    { value: 'design', label: 'Graphic Design' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  // Function to close all modals
  const closeAllModals = () => {
    setActiveProject(null);
    setPreviewImage(null);
    setPreviewGallery(null);
    setGalleryProject(null);
  };

  // Open preview with specific image and its gallery
  const openPreview = (image, index, gallery) => {
    setPreviewImage(image);
    setPreviewIndex(index);
    setPreviewGallery(gallery);
  };

  // Navigate to next image
  const nextImage = () => {
    if (previewGallery && previewIndex < previewGallery.length - 1) {
      const newIndex = previewIndex + 1;
      setPreviewIndex(newIndex);
      setPreviewImage(previewGallery[newIndex]);
    }
  };

  // Navigate to previous image
  const prevImage = () => {
    if (previewGallery && previewIndex > 0) {
      const newIndex = previewIndex - 1;
      setPreviewIndex(newIndex);
      setPreviewImage(previewGallery[newIndex]);
    }
  };

  // Go back to gallery
  const backToGallery = () => {
    setPreviewImage(null);
    setPreviewGallery(null);
  };

  return (
    <section id="projects-section" className="py-16 bg-amber-50/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-10">
            <h2 className="font-serif text-3xl text-amber-900 mb-3">Projects</h2>
            <div className="w-12 h-0.5 bg-amber-700/30 mx-auto mb-4"></div>
            <p className="text-amber-700 text-sm max-w-2xl mx-auto">
              Web development projects and Canva designs from Boris Cafe
            </p>
          </div>

          {/* Filter buttons */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {filters.map((f) => (
              <button
                key={f.value}
                onClick={() => setFilter(f.value)}
                className={`px-4 py-2 text-sm rounded-lg transition-all duration-200 ${
                  filter === f.value
                    ? 'bg-amber-800 text-white'
                    : 'bg-white text-amber-800 border border-amber-200/70 hover:bg-amber-50'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* Projects grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-lg overflow-hidden border border-amber-200/70 shadow-sm hover:shadow-md transition-all duration-300 group"
              >
                {/* Project image - Clickable to open gallery */}
                <div 
                  className="relative h-48 overflow-hidden cursor-pointer"
                  onClick={() => {
                    if (project.images) {
                      setGalleryProject(project);
                    }
                  }}
                >
                  <img
                    src={project.coverImage}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  
                  {/* Category badges */}
                  <div className="absolute top-2 right-2 flex gap-1 z-10">
                    <span className={`text-xs px-2 py-1 rounded ${
                      project.category === 'web' 

                    }`}>
                    </span>
                    {project.images && (
                      <span className="bg-amber-800/90 text-white text-xs px-2 py-1 rounded flex items-center gap-1">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                        </svg>
                        {project.images?.length}
                      </span>
                    )}
                  </div>

                  {/* Click indicator on hover */}
                  {project.images && (
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-20">
                      <span className="bg-white text-amber-800 text-sm px-3 py-1 rounded-full">
                        Click to view {project.images.length} {project.category === 'web' ? 'screenshots' : 'designs'}
                      </span>
                    </div>
                  )}
                </div>

                {/* Project content */}
                <div className="p-5">
                  <h3 className="font-serif text-lg text-amber-900 mb-2">{project.title}</h3>
                  <p className="text-amber-700 text-sm mb-3 line-clamp-2">{project.description}</p>
                  
                  {/* Tools tags */}
                  <div className="flex flex-wrap gap-1 mb-3">
                    {(project.tools || project.tech || []).slice(0, 3).map((item) => (
                      <span
                        key={item}
                        className="text-xs bg-amber-100 text-amber-800 px-2 py-0.5 rounded"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  {/* Preview thumbnails for projects with images */}
                  {project.images && (
                    <div className="flex gap-1 mb-3">
                      {project.images.slice(0, 3).map((img, idx) => (
                        <button
                          key={idx}
                          onClick={(e) => {
                            e.stopPropagation();
                            openPreview(img, idx, project.images);
                          }}
                          className="w-8 h-8 rounded overflow-hidden border border-amber-200 hover:border-amber-500 transition-colors"
                        >
                          <img src={img.url} alt="" className="w-full h-full object-cover" />
                        </button>
                      ))}
                      {project.images.length > 3 && (
                        <span className="text-xs text-amber-500 ml-1">+{project.images.length - 3}</span>
                      )}
                    </div>
                  )}

                  {/* Disclaimer badge for DPWH project */}
                  {project.disclaimer && (
                    <div className="mb-2">
                      <span className="text-xs bg-amber-100 text-amber-600 px-2 py-0.5 rounded-full inline-flex items-center gap-1">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Demo Data
                      </span>
                    </div>
                  )}

                  {/* Action buttons */}
                  <div className="flex items-center justify-between mt-4 pt-3 border-t border-amber-200/50">
                    <button
                      onClick={() => {
                        setActiveProject(project);
                        if (project.images) {
                          setGalleryProject(null);
                        }
                      }}
                      className="text-sm text-amber-800 hover:text-amber-900 font-medium flex items-center gap-1"
                    >
                      View Details
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                    
                    {project.images && (
                      <button
                        onClick={() => setGalleryProject(project)}
                        className="text-xs text-amber-600 hover:text-amber-800 flex items-center gap-1"
                      >
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                        </svg>
                        Gallery
                      </button>
                    )}
                  </div>

                  {/* Highlight badge */}
                  {project.highlights && (
                    <div className="mt-2">
                      <span className="text-xs bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full">
                        ⭐ {project.highlights[0]}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Message if no projects in category */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-amber-600">No projects found in this category.</p>
            </div>
          )}
        </div>
      </div>

      {/* Image Preview Modal with Carousel */}
      {previewImage && previewGallery && (
        <div 
          className="fixed inset-0 bg-black/95 z-[60] flex items-center justify-center p-4"
          onClick={backToGallery}
        >
          <div className="relative max-w-5xl w-full" onClick={e => e.stopPropagation()}>
            {/* Header with navigation */}
            <div className="absolute -top-12 left-0 right-0 flex justify-between items-center text-white">
              <div className="flex items-center gap-2">
                <button
                  onClick={backToGallery}
                  className="flex items-center gap-1 text-white/80 hover:text-white transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  <span>Back to Gallery</span>
                </button>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-sm text-white/60">
                  {previewIndex + 1} / {previewGallery.length}
                </span>
                <button
                  onClick={backToGallery}
                  className="text-white/80 hover:text-white"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Image container */}
            <div className="relative">
              {/* Previous arrow */}
              {previewIndex > 0 && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    prevImage();
                  }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-3 transition-all z-10"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
              )}

              {/* Next arrow */}
              {previewIndex < previewGallery.length - 1 && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    nextImage();
                  }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-3 transition-all z-10"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              )}

              {/* Main image */}
              <img
                src={previewImage.url}
                alt={previewImage.caption}
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
              />
            </div>

            {/* Image caption */}
            <div className="absolute -bottom-12 left-0 right-0 text-center">
              <p className="text-white text-lg">{previewImage.caption}</p>
              <p className="text-white/60 text-sm mt-1">Image {previewIndex + 1} of {previewGallery.length}</p>
            </div>

            {/* Thumbnail strip */}
            <div className="absolute -bottom-24 left-0 right-0 flex justify-center gap-2 overflow-x-auto pb-2">
              {previewGallery.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => openPreview(img, idx, previewGallery)}
                  className={`flex-shrink-0 w-16 h-16 rounded overflow-hidden border-2 transition-all ${
                    idx === previewIndex ? 'border-amber-500 scale-110' : 'border-transparent opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={img.url} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Full Gallery Modal */}
      {galleryProject && !previewImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeAllModals}
        >
          <div 
            className="relative max-w-6xl w-full bg-white rounded-xl max-h-[90vh] overflow-y-auto"
            onClick={e => e.stopPropagation()}
          >
            {/* Gallery Header */}
            <div className="sticky top-0 bg-amber-900 text-white p-4 rounded-t-xl flex justify-between items-center z-10">
              <div>
                <h3 className="font-serif text-xl">{galleryProject.title}</h3>
                <p className="text-amber-200 text-sm">{galleryProject.images.length} {galleryProject.category === 'web' ? 'screenshots' : 'designs'}</p>
              </div>
              <button
                onClick={closeAllModals}
                className="text-white/80 hover:text-white"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Disclaimer banner for DPWH gallery */}
            {galleryProject.category === 'web' && galleryProject.title.includes('DPWH') && (
              <div className="bg-amber-50 border-b border-amber-200/70 px-6 py-3">
                <div className="flex items-center gap-2 text-xs text-amber-600">
                  <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p>All data shown in these screenshots are mock-ups and for demonstration purposes only. No actual government data is displayed.</p>
                </div>
              </div>
            )}

            {/* Gallery Grid */}
            <div className="p-6">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {galleryProject.images.map((image, index) => (
                  <div
                    key={index}
                    onClick={(e) => {
                      e.stopPropagation();
                      openPreview(image, index, galleryProject.images);
                    }}
                    className="group relative aspect-square rounded-lg overflow-hidden border border-amber-200/70 cursor-pointer hover:shadow-lg transition-all"
                  >
                    <img
                      src={image.url}
                      alt={image.caption}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-amber-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="absolute bottom-0 left-0 right-0 p-3">
                        <p className="text-white text-sm font-medium truncate">{image.caption}</p>
                        <p className="text-amber-200 text-xs">Click to enlarge</p>
                      </div>
                    </div>

                    {/* Image number badge */}
                    <div className="absolute top-2 left-2">
                      <span className="text-xs bg-white/90 text-amber-800 px-2 py-1 rounded-full">
                        #{index + 1}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Gallery Footer */}
              <div className="mt-6 text-center text-sm text-amber-600 border-t border-amber-200/50 pt-4">
                <p>📸 {galleryProject.images.length} {galleryProject.category === 'web' ? 'screenshots' : 'designs'} of {galleryProject.title}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Project Details Modal */}
      {activeProject && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={closeAllModals}>
          <div className="bg-white rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
            {/* Modal header with image */}
            <div className="relative h-64">
              <img
                src={activeProject.coverImage}
                alt={activeProject.title}
                className="w-full h-full object-cover"
              />
              <button
                onClick={closeAllModals}
                className="absolute top-4 right-4 bg-white/90 rounded-full p-2 hover:bg-white transition-colors"
              >
                <svg className="w-5 h-5 text-amber-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <h3 className="text-2xl font-serif text-white">{activeProject.title}</h3>
                <p className="text-white/80 text-sm">{activeProject.role} • {activeProject.duration}</p>
              </div>
            </div>

            {/* Modal content */}
            <div className="p-6">
              {/* Disclaimer for DPWH project */}
              {activeProject.disclaimer && (
                <div className="mb-4 p-3 bg-amber-50 rounded-lg border border-amber-200/50 flex items-start gap-2">
                  <svg className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-xs text-amber-600">{activeProject.disclaimer}</p>
                </div>
              )}

              <p className="text-amber-800 mb-4">{activeProject.longDescription}</p>

              {/* Tech stack or tools */}
              <div className="mb-4">
                <h4 className="text-sm font-medium text-amber-900 mb-2">
                  {activeProject.category === 'web' ? 'Technologies Used:' : 'Tools Used:'}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {(activeProject.tech || activeProject.tools || []).map(item => (
                    <span key={item} className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div className="mb-4">
                <h4 className="text-sm font-medium text-amber-900 mb-2">Key Features:</h4>
                <ul className="grid grid-cols-2 gap-2">
                  {(activeProject.features || []).map(feature => (
                    <li key={feature} className="text-sm text-amber-700 flex items-center gap-1">
                      <span className="w-1 h-1 bg-amber-600 rounded-full"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Results */}
              {activeProject.results && (
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-amber-900 mb-2">Results:</h4>
                  <ul className="space-y-1">
                    {activeProject.results.map(result => (
                      <li key={result} className="text-sm text-amber-700 flex items-center gap-1">
                        <span>📈</span> {result}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Gallery button for projects with images */}
              {activeProject.images && (
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-amber-900 mb-2">
                    {activeProject.category === 'web' ? 'Screenshots:' : 'Gallery:'}
                  </h4>
                  <button
                    onClick={() => {
                      setGalleryProject(activeProject);
                      setActiveProject(null);
                    }}
                    className="flex items-center gap-2 text-amber-800 bg-amber-100 px-4 py-2 rounded-lg hover:bg-amber-200 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                    </svg>
                    View All {activeProject.images.length} {activeProject.category === 'web' ? 'Screenshots' : 'Designs'}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;