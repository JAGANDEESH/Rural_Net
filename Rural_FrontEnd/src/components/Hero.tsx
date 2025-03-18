import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Hero = () => {
  const navigate = useNavigate();
  useEffect(() => {
    document.title = "Rural Net: A Digital Initiative for Community Empowerment in Padalur";
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-background text-text-primary overflow-hidden px-6">
      {/* Animated Gradient Background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/10 to-primary/20 blur-[120px] opacity-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ duration: 2 }}
      />

      {/* Main Hero Content */}
      <motion.div
        className="text-center z-10 max-w-4xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.p
          className="text-lg md:text-xl text-text-secondary mb-6 animate-slide-up"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <strong>"Rural Net"</strong> is a community-driven web application developed for Padalur village to provide essential services and bridge the digital divide. The platform includes features such as a market price checker for real-time agricultural prices, a government service update section for new schemes and benefits, a local directory for essential contacts and emergency services, an event update system for community engagement, and a small-scale job listing section to connect villagers with employment opportunities. The project focuses on delivering accessible and reliable information tailored to rural communities, improving digital literacy and socio-economic development.
        </motion.p>

        <motion.h1
          className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text animate-float"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
        >
          Welcome to Rural Net
        </motion.h1>

        <motion.p
          className="text-lg md:text-2xl text-text-secondary max-w-2xl mx-auto mb-8 animate-slide-up"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Empowering rural communities with digital solutions. Explore market prices, weather updates, government schemes, and more!
        </motion.p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/get-started")}
            className="px-6 py-3 text-lg bg-gradient-to-r from-primary to-secondary rounded-lg shadow-lg hover:opacity-80 transition animate-bounce-soft"
          >
            Get Started
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 text-lg bg-black border border-gray-400 rounded-lg hover:bg-white/10 transition animate-pulse-soft"
          >
            Learn More
          </motion.button>
        </div>

        {/* ✅ Quotes Section */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1 }}
        >
          <p className="text-xl italic text-secondary">
            "Bridging the gap between technology and community, one step at a time."
          </p>
          <p className="text-lg italic text-primary mt-2">
            "Stay Connected, Stay Informed!"
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
