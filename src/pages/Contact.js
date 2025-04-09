import React, { useState } from 'react';
import '../styles/Contact.css';
import { db } from '../firebase';
import { collection, addDoc, Timestamp } from 'firebase/firestore';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await addDoc(collection(db, 'contacts'), {
        ...formData,
        timestamp: Timestamp.now()
      });
      setSubmitted(true);
      setFormData({ name: '', mobile: '', email: '', message: '' });
    } catch (err) {
      console.error("Error submitting contact form:", err);
    }

    setLoading(false);
  };

  return (
    <div id="contact-section" className="contact-container">
      <div className="contact-form">
        <h2>Contact Us</h2>
        {submitted && <p className="success-msg">Thank you! We'll get back to you soon.</p>}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="tel"
            name="mobile"
            placeholder="Mobile Number"
            required
            value={formData.mobile}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email (Optional)"
            value={formData.email}
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          <button type="submit" disabled={loading}>
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>

      <div className="contact-map">
        <iframe
          title="Company-Location"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15552.10565532847!2d77.6410754!3d12.9701616!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae156cb781ca29%3A0xe306aeb6cc032458!2sEcochoice%20Naturals!5e0!3m2!1sen!2sin!4v1742972601346!5m2!1sen!2sin"
          width="100%"
          height="350"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactSection;
