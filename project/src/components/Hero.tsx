import React from 'react';

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center pt-16">
      <div className="text-center animate-stagger">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text animate-float">
          Welcome to the Future
        </h1>
        <p className="text-text-secondary text-xl md:text-2xl max-w-2xl mx-auto mb-8 animate-slide-up balanced-text">
          Experience the next generation of digital innovation with our cutting-edge platform.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="btn-primary animate-bounce-soft">
            Get Started
          </button>
          <button className="btn glass text-text-primary hover:bg-white/10 animate-pulse-soft">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;