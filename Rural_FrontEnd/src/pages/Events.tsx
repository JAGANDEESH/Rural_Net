import React from 'react';
import { Calendar, MapPin, Clock, Users } from 'lucide-react';

const events = [
  {
    id: 1,
    title: 'Tech Conference 2024',
    date: 'March 20, 2024',
    time: '9:00 AM - 5:00 PM',
    location: 'Convention Center',
    category: 'Technology',
    attendees: 500,
  },
  {
    id: 2,
    title: 'Job Fair',
    date: 'March 22, 2024',
    time: '10:00 AM - 4:00 PM',
    location: 'City Hall',
    category: 'Career',
    attendees: 1000,
  },
  {
    id: 3,
    title: 'Community Festival',
    date: 'March 25, 2024',
    time: '11:00 AM - 8:00 PM',
    location: 'Central Park',
    category: 'Community',
    attendees: 2500,
  },
];

const Events = () => {
  return (
    <div className="py-12 animate-fade-in">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">
          Events & Jobs
        </h1>
        <p className="text-text-secondary text-lg max-w-2xl mx-auto">
          Discover upcoming events and job opportunities in your area
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event) => (
          <div key={event.id} className="card group hover:scale-[1.02] transition-all">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                {event.title}
              </h3>
              <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">
                {event.category}
              </span>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center text-text-secondary">
                <Calendar className="w-4 h-4 mr-2" />
                <span>{event.date}</span>
              </div>
              <div className="flex items-center text-text-secondary">
                <Clock className="w-4 h-4 mr-2" />
                <span>{event.time}</span>
              </div>
              <div className="flex items-center text-text-secondary">
                <MapPin className="w-4 h-4 mr-2" />
                <span>{event.location}</span>
              </div>
              <div className="flex items-center text-text-secondary">
                <Users className="w-4 h-4 mr-2" />
                <span>{event.attendees} Expected Attendees</span>
              </div>
            </div>

            <button className="w-full mt-6 btn-primary">
              Register Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;