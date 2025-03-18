import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Rocket, Shield, Zap } from "lucide-react";

const steps = [
  {
    title: "Create Your Account",
    description: "Sign up for a free account to access all our features and start your journey.",
    icon: <Rocket className="w-6 h-6 text-primary" />,
    buttonText: "Create Account",
  },
  {
    title: "Complete Your Profile",
    description: "Set up your profile with your preferences and requirements for a personalized experience.",
    icon: <Shield className="w-6 h-6 text-primary" />,
    buttonText: "View Profile Settings",
  },
  {
    title: "Explore Features",
    description: "Discover our powerful features and tools designed to enhance your experience.",
    icon: <Zap className="w-6 h-6 text-primary" />,
    buttonText: "Explore Features",
  },
];

const GetStarted = () => {
  return (
    <div className="py-12 bg-gray-900 text-white">
      {/* Header */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text">
          Get Started with Rural Net
        </h1>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          Follow these simple steps to begin your journey with us.
        </p>
      </motion.div>

      {/* Steps */}
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="grid gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="p-6 bg-gray-800 rounded-lg shadow-lg flex items-start gap-4 hover:scale-[1.02] transition-transform duration-200"
              whileHover={{ scale: 1.03 }}
            >
              <div className="p-3 rounded-lg bg-blue-500/20">{step.icon}</div>
              <div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
                <button className="mt-4 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg hover:opacity-80 transition flex items-center gap-2">
                  {step.buttonText} <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Support Section */}
        <motion.div
          className="mt-12 p-8 bg-gray-800 rounded-lg shadow-lg text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h3 className="text-2xl font-bold mb-4">Need Help Getting Started?</h3>
          <p className="text-gray-300 mb-6">
            Our support team is here to help you every step of the way.
          </p>
          <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg hover:opacity-80 transition">
            Contact Support
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default GetStarted;
    