import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const NavLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
    <Link
      to={to}
      className={`nav-link ${isActive(to) ? 'text-primary after:w-full' : ''}`}
      onClick={() => setIsOpen(false)}
    >
      {children}
    </Link>
  );

  return (
    <nav className="fixed w-full backdrop-blur-lg bg-background/80 border-b border-white/10 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-heading font-bold bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">
              Logo
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/market">Market</NavLink>
            <NavLink to="/updates">Updates</NavLink>
            <NavLink to="/weather">Weather</NavLink>
            <NavLink to="/events">Events</NavLink>
            <Link to="/login" className="btn-primary">Login</Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-text-primary hover:text-primary transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="flex flex-col space-y-4 px-2 pt-2 pb-4">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/market">Market</NavLink>
              <NavLink to="/updates">Updates</NavLink>
              <NavLink to="/weather">Weather</NavLink>
              <NavLink to="/events">Events</NavLink>
              <Link to="/login" className="btn-primary w-full text-center">Login</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;