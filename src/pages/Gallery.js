import React, { useState } from "react";
import "../styles/Gallery.css";
import { motion } from "framer-motion";

const images = [
  { src: "./Picture1.png", title: "Award" },
  { src: "./Picture2.png", title: "Company Achievement" },
  { src: "./Picture3.png", title: "Team Achievement" },
  { src: "./Picture4.png", title: "Certificate of Recognition" },
  { src: "./Picture5.png", title: "Award Showcase" },
  { src: "./PR1.JPG", title: "Company Event" },
  { src: "./PR2.JPG", title: "Company Event" },
  { src: "./PR3.JPG", title: "Company Event" },
  { src: "./PR4.JPG", title: "Company Event" },
  { src: "./PR5.JPG", title: "Company Event" },
  { src: "./PR6.jpg", title: "BTS event 2022" },
  { src: "./PR7.jpg", title: "Millet Mela 2023" },
  { src: "./PR8.jpg", title: "Millet Mela 2023" },
  { src: "./smga1.jpg", title: "Malnad Expo, Shivamogga 2025" },
  { src: "./smga2.jpg", title: "Malnad Expo, Shivamogga 2025" },
  { src: "./anvesana.jpg", title: "Award Showcase" },
];

// ✅ List of YouTube video IDs
const youtubeVideos = [
  { id: "TjoaJAUOPNs", title: "Company-Journey" },
  { id: "wCHVUyFNN94", title: "Awards & Recognition" },
  { id: "pTtxRD6cWys", title: "NASSCOM video" },
];

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);

  const openPopup = (index) => {
    setCurrentIndex(index);
    setSelectedImage(images[index].src);
  };

  const closePopup = () => {
    setSelectedImage(null);
    setCurrentIndex(null);
  };

  const showNext = () => {
    const nextIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(nextIndex);
    setSelectedImage(images[nextIndex].src);
  };

  const showPrev = () => {
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(prevIndex);
    setSelectedImage(images[prevIndex].src);
  };

  return (
    <div className="gallery-container">
      <h1 className="gallery-title">Gallery - Awards & Achievements</h1>
      <p className="gallery-subtitle">A glimpse of our journey and milestones</p>

      {/* Image Gallery */}
      <div className="gallery-grid">
        {images.map((img, index) => (
          <motion.div
            className="gallery-item"
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            onClick={() => openPopup(index)}
          >
            <img src={img.src} alt={img.title} />
            <div className="image-title">{img.title}</div>
          </motion.div>
        ))}
      </div>

      {/* Popup Modal */}
      {selectedImage && (
        <div className="image-popup">
          <button className="close-btn" onClick={closePopup}>×</button>
          <button className="prev-btn" onClick={showPrev}>‹</button>
          <img src={selectedImage} alt="Gallery Preview" className="popup-image" />
          <button className="next-btn" onClick={showNext}>›</button>
        </div>
      )}

      {/* YouTube Video Gallery */}
      <div className="youtube-section">
        <h2 className="youtube-title">Watch Our Journey</h2>
        <p className="youtube-subtitle">
          Explore our events, achievements, and company milestones.
        </p>
        <div className="youtube-grid">
          {youtubeVideos.map((video, index) => (
            <div key={index} className="youtube-item">
              <iframe
                src={`https://www.youtube.com/embed/${video.id}`}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
              <p className="video-title">{video.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Gallery;
