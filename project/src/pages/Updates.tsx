import React from 'react';
import { Bell, FileText, Globe } from 'lucide-react';

const updates = [
  {
    id: 1,
    title: 'New Economic Policy Announcement',
    category: 'Economy',
    date: 'March 15, 2024',
    summary: 'Major changes in fiscal policy to boost economic growth...',
  },
  {
    id: 2,
    title: 'Infrastructure Development Plan',
    category: 'Development',
    date: 'March 14, 2024',
    summary: 'Government announces $2B investment in infrastructure...',
  },
  {
    id: 3,
    title: 'Education Reform Initiative',
    category: 'Education',
    date: 'March 13, 2024',
    summary: 'New education policies to be implemented nationwide...',
  },
];

const Updates = () => {
  return (
    <div className="py-12 animate-fade-in">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">
          Government Updates
        </h1>
        <p className="text-text-secondary text-lg max-w-2xl mx-auto">
          Stay informed with the latest government announcements and policies
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="card">
          <Bell className="w-8 h-8 text-primary mb-4" />
          <h3 className="text-xl font-bold mb-2">Latest Updates</h3>
          <p className="text-text-secondary">Real-time government announcements</p>
        </div>
        <div className="card">
          <FileText className="w-8 h-8 text-primary mb-4" />
          <h3 className="text-xl font-bold mb-2">Policy Changes</h3>
          <p className="text-text-secondary">Track policy updates and changes</p>
        </div>
        <div className="card">
          <Globe className="w-8 h-8 text-primary mb-4" />
          <h3 className="text-xl font-bold mb-2">Global Impact</h3>
          <p className="text-text-secondary">International policy implications</p>
        </div>
      </div>

      <div className="space-y-6">
        {updates.map((update) => (
          <div key={update.id} className="card hover:scale-[1.02] transition-transform">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold">{update.title}</h3>
              <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">
                {update.category}
              </span>
            </div>
            <p className="text-text-secondary mb-4">{update.summary}</p>
            <div className="flex justify-between items-center">
              <span className="text-sm text-text-secondary">{update.date}</span>
              <button className="text-primary hover:text-secondary transition-colors">
                Read More →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Updates;