import React from "react";
import "../styles/Home.css";
import { motion } from "framer-motion";
import ContactSection from "./Contact";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function Home() {
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    if (params.get("scrollTo") === "contact") {
      const section = document.getElementById("contact-section");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div className="home-container">
      {/* Animate Heading */}
      <motion.h1
        className="home-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Digitalizing Agriculture
      </motion.h1>

      {/* Animate Description */}
      <motion.p
        className="home-description"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Connecting Farmers and Buyers with AI Quality Assurance.
      </motion.p>

      <div className="section-gap"></div>

      {/* Mobile Only Content (above image) */}
      <div className="mobile-content">
        <h2>Empowering Farmers</h2>
        <p>AI-driven tools improve crop quality and market access.</p>
      </div>

      {/* Parallax Section */}
      <div className="parallax-section">
        <img src="/farmer.jpeg" alt="Agriculture" className="parallax-image" />

        {/* Desktop Animated Content Inside Image */}
        <motion.div
          className="content-inside top-content"
          initial={{ x: -300, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 1 }}
        >
          <h2>Empowering Farmers</h2>
          <p>AI-driven tools improve crop quality and market access.</p>
        </motion.div>

        <motion.div
          className="content-inside bottom-content"
          initial={{ x: -300, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <h2>Connecting Buyers</h2>
          <p>Verified crops and products delivered directly from farms.</p>
        </motion.div>
      </div>

      {/* Mobile Only Content (below image) */}
      <div className="mobile-content">
        <h2>Connecting Buyers</h2>
        <p>Verified crops and products delivered directly from farms.</p>
      </div>

      <div className="section-gap"></div>

      {/* Vision & Mission */}
      <div className="vision-mission-section-row">
        <motion.div
          className="vision-mission-box"
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 1 }}
        >
          <h2>Our Mission</h2>
          <p>
            Ecochoice Naturals is on a mission to empower farmers and
            revolutionize agriculture. Through AI technology, we elevate product
            quality, connecting farmers and buyers for a transparent,
            sustainable marketplace that benefits all.
          </p>
        </motion.div>

        <motion.div
          className="vision-mission-box"
          initial={{ x: 200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 1 }}
        >
          <h2>Our Vision</h2>
          <p>
            We're dedicated to revolutionizing agriculture. Envision farmers
            using AI-driven assessments to secure fair markets, while buyers
            make confident, informed choices. Through collaboration, innovation,
            and sustainability, we aim for an agricultural landscape that
            benefits all.
          </p>
        </motion.div>
      </div>

      {/* Responsive YouTube Video Section */}
      <div className="video-section">
        <h2 className="video-title">Explore Our Impact</h2>
        <p className="video-description">
          Learn how we are transforming agriculture with AI and digital
          solutions.
        </p>
        <div className="video-container">
          <iframe
            src="https://www.youtube.com/embed/pTtxRD6cWys?si=9lbWubpxIl1J_68m&amp;start=133"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      <ContactSection />
    </div>
  );
}

export default Home;
