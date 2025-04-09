import React, { useRef } from "react";
import "../styles/OurSolution.css";
import { motion, useInView } from "framer-motion";

function OurSolutions() {
  const raithaRef1 = useRef(null);
  const raithaRef2 = useRef(null);
  const kissanRef1 = useRef(null);
  const kissanRef2 = useRef(null); // Ensure this ref is working

  const raithaInView1 = useInView(raithaRef1, { once: false, amount: 0.2 });
  const raithaInView2 = useInView(raithaRef2, { once: false, amount: 0.2 });
  const kissanInView1 = useInView(kissanRef1, { once: false, amount: 0.2 });
  const kissanInView2 = useInView(kissanRef2, { once: false, amount: 0.2 }); // This was not firing properly

  return (
    <>
      {/* Raitha Sahayak Section */}
      <div className="solutions-container">
        <motion.div
          className="Raitha-Sahaya"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 10 }}
          transition={{ duration: 1 }}
        >
          <div className="raitha-content">
            <h1 className="solutions-title">Raitha Sahayak</h1>
            <h4>Digital Application For Farm Produces Quality Analysis</h4>
            <p>
              Empower Farmers with 'Raitha Sahayak' – Our Effortless App for
              Showcasing Produce: Capture images and add details for
              AI-generated quality reports. Boost sales and agricultural success
              effortlessly.
            </p>

            <motion.div
              ref={raithaRef1}
              className="rs-app-img image1"
              initial={{ x: 300, opacity: 0 }}
              animate={
                raithaInView1 ? { x: 0, opacity: 1 } : { x: 300, opacity: 0 }
              }
              transition={{ duration: 1.5 }}
            >
              <img src="./app1.png" alt="Raitha App 1" className="image1" />
            </motion.div>

            <motion.div
              ref={raithaRef2}
              className="rs-app-img image2"
              initial={{ x: 300, opacity: 0 }}
              animate={
                raithaInView2 ? { x: 0, opacity: 1 } : { x: 300, opacity: 0 }
              }
              transition={{ duration: 1.5 }}
            >
              <img src="./app3.png" alt="Raitha App 2" className="image1" />
            </motion.div>
          </div>
        </motion.div>

        {/* Mobile Images */}
        <div className="mobile-images-wrapper">
          <motion.img
            src="./app1.png"
            alt="Mobile Raitha 1"
            height={150}
            width={80}
            initial={{ x: 300, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 1.5 }}
          />
          <motion.img
            src="./app3.png"
            alt="Mobile Raitha 2"
            height={150}
            width={80}
            initial={{ x: 300, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 1.5 ,delay:.5}}
          />
        </div>
      </div>

      {/* Kissan Connect Section */}
      <div className="solutions-container">
        <motion.div
          className="krishi-connect"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 10 }}
          transition={{ duration: 1 }}
        >
          <div className="Krishi-connect">
            <h1 className="solutions-title">Krishi Connect</h1>
            <h4>Connecting Farmers and Buyers with Ease</h4>
            <p>
              Explore top-tier agricultural goods, from legumes to spices,
              backed by AI-verified quality checks. Enjoy a diverse selection,
              direct farmer connections, seamless transactions, and trustworthy
              transparency. Our innovative app enables buyers to access
              AI-verified quality reports, ensuring transparent, informed
              purchasing decisions and fostering a seamless connection with
              top-quality produce. Elevate your culinary journey with Krishi
              Connect and support sustainable agriculture.
            </p>

            <motion.div
              ref={kissanRef1}
              className="ks-app-img ks-image1"
              initial={{ x: -300, opacity: 0 }}
              animate={
                kissanInView1 ? { x: 0, opacity: 1 } : { x: -300, opacity: 0 }
              }
              transition={{ duration: 1.5 ,delay:.5}}
            >
              <img src="./app2.png" alt="Kissan App 1" className="ks-image1" />
            </motion.div>

            <motion.div
              ref={kissanRef2}
              className="ks-app-img ks-image2"
              initial={{ x: -300, opacity: 0 }}
              animate={
                kissanInView2 ? { x: 0, opacity: 1 } : { x: -300, opacity: 0 }
              }
              transition={{ duration: 1.5 }}
              style={{ minHeight: "200px" }} // ⬅️ Ensures the div is scroll-observable
            >
              <img src="./app4.png" alt="Kissan App 2" className="ks-image1" />
            </motion.div>
          </div>
        </motion.div>

        {/* Mobile Images */}
        <div className="mobile-images-wrapper">
          <motion.img
            src="./app2.png"
            alt="Mobile Kissan 1"
            height={150}
            width={80}
            initial={{ x: 300, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 1.5 }}
          />
          <motion.img
            src="./app4.png"
            alt="Mobile Kissan 2"
            height={150}
            width={80}
            initial={{ x: 300, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 1.5 }}
          />
        </div>
        
      </div>
    </>
  );
}

export default OurSolutions;