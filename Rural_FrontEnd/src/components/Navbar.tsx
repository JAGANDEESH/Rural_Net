import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const NavLink = ({ to, children }) => (
    <Link
      to={to}
      className={`relative px-4 py-2 text-lg transition-all duration-300 ${
        isActive(to) ? "text-primary after:w-full" : "text-text-secondary hover:text-white"
      }`}
      onClick={() => setIsOpen(false)}
    >
      {children}
      {isActive(to) && (
        <motion.div
          className="absolute bottom-0 left-0 w-full h-[2px] bg-primary"
          layoutId="underline"
        />
      )}
    </Link>
  );

  return (
    <nav className="fixed top-0 left-0 w-full backdrop-blur-lg bg-background/80 border-b border-white/10 shadow-md z-50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">
            RuralNet
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/market">Market</NavLink>
            <NavLink to="/updates">Updates</NavLink>
            <NavLink to="/weather">Weather</NavLink>
            <NavLink to="/events">Events</NavLink>
            <Link
              to="/login"
              className="px-4 py-2 text-white bg-gradient-to-r from-primary to-secondary rounded-lg hover:opacity-80 transition"
            >
              Login
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-text-secondary hover:text-primary transition-all"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="md:hidden bg-background/90 backdrop-blur-md absolute top-16 left-0 w-full shadow-lg border-t border-white/10"
            >
              <div className="flex flex-col space-y-4 px-6 py-4">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/market">Market</NavLink>
                <NavLink to="/updates">Updates</NavLink>
                <NavLink to="/weather">Weather</NavLink>
                <NavLink to="/events">Events</NavLink>
                <Link
                  to="/login"
                  className="w-full py-2 text-center text-white bg-gradient-to-r from-primary to-secondary rounded-lg hover:opacity-80 transition"
                >
                  Login
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
