import React, { useEffect } from "react";
import "../styles/About.css";
import { motion } from "framer-motion";

function About() {
  const points = [
    "AI Quality Assessment: Our platform uses artificial intelligence to evaluate crop quality, ensuring transparency and trust.",
    "Sustainability at Heart: Every step we take is rooted in sustainability — supporting eco-friendly farming practices that preserve nature.",
    "To build a future where technology and agriculture work hand in hand — a world where farmers thrive, buyers trust, and nature is respected.",
  ];

  useEffect(() => {
    const items = document.querySelectorAll(".choose-item");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.5 }
    );
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="about-page-container">
      {/* About Section with Parallax Background */}
      <div className="parallax-bg"></div>
      <div className="about-container">
        <motion.h1
          className="about-title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          About Us
        </motion.h1>
        <motion.p
          className="about-description"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Ecochoice Naturals Pvt Ltd. is an e-sourcing company that helps growers
          and buyers of natural, chemical-free, organic food producers to find
          each other. We are certified organic company. It is certified by APEDA,
          an agency of the Government of India for supply in domestic and
          international markets. We support sustainable organic and natural
          farming by working with both producers and consumers. Ecochoice Naturals
          provides a platform to engage with small and marginal farmers, farmer
          cooperatives, organizations, and end consumers. It also engages in
          providing viable conduits for producers to market their produce and stay
          committed.
        </motion.p>
      </div>

      {/* Leadership Team Section */}
      <div className="leadership-container">
        <h2 className="leadership-title">Leadership Team</h2>
        <div className="leadership-profiles">
          <div className="leader-card">
            <img src="./img11.jpg" alt="CEO" className="leader-image" />
            <h3>Dr. R Srinivas</h3>
            <p><strong>Founder & Chief Executive Officer (CEO)</strong></p>
            <p>Visionary leader driving Ecochoice Naturals towards sustainable agricultural innovations and global organic markets.</p>
          </div>
          <div className="leader-card">
            <img src="./profile.png" alt="COO" className="leader-image" />
            <h3> Lakshmi Priya Srinivas</h3>
            <p><strong>Co-Founder & Chief Operating Officer (COO)</strong></p>
            <p>Oversees operations ensuring seamless supply chain, farmer relationships, and product delivery with utmost efficiency.</p>
          </div>
          <div className="leader-card">
            <img src="./profile.png" alt="CTO" className="leader-image" />
            <h3>Mr. Shanth Kumar</h3>
            <p><strong>Chief Technology Officer (CTO)</strong></p>
            <p>Leads the technology and AI development team, building intelligent tools for quality analysis and digital transformation.</p>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="choose-container">
        <h2 className="choose-title">Why Choose Us</h2>
        <ul className="choose-list">
          {points.map((point, index) => (
            <li className="choose-item hidden" key={index}>
              {point}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default About; 
