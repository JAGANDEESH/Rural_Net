import React from 'react';
import { TrendingUp, DollarSign, BarChart } from 'lucide-react';

const marketData = [
  { id: 1, name: 'Bitcoin', price: '$45,232.50', change: '+5.2%', volume: '$2.1B' },
  { id: 2, name: 'Ethereum', price: '$3,120.75', change: '+3.8%', volume: '$1.5B' },
  { id: 3, name: 'Gold', price: '$1,845.30', change: '+0.5%', volume: '$850M' },
  { id: 4, name: 'Silver', price: '$24.65', change: '-0.3%', volume: '$320M' },
];

const Market = () => {
  return (
    <div className="py-12 animate-fade-in">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">
          Market Overview
        </h1>
        <p className="text-text-secondary text-lg max-w-2xl mx-auto">
          Track real-time market prices and trends across multiple assets
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="card">
          <TrendingUp className="w-8 h-8 text-primary mb-4" />
          <h3 className="text-xl font-bold mb-2">Market Trends</h3>
          <p className="text-text-secondary">Real-time analysis of market movements</p>
        </div>
        <div className="card">
          <DollarSign className="w-8 h-8 text-primary mb-4" />
          <h3 className="text-xl font-bold mb-2">Price Alerts</h3>
          <p className="text-text-secondary">Set custom alerts for price changes</p>
        </div>
        <div className="card">
          <BarChart className="w-8 h-8 text-primary mb-4" />
          <h3 className="text-xl font-bold mb-2">Trading Volume</h3>
          <p className="text-text-secondary">Monitor daily trading volumes</p>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-white/10">
              <th className="text-left py-4 px-6">Asset</th>
              <th className="text-right py-4 px-6">Price</th>
              <th className="text-right py-4 px-6">24h Change</th>
              <th className="text-right py-4 px-6">Volume</th>
            </tr>
          </thead>
          <tbody>
            {marketData.map((item) => (
              <tr
                key={item.id}
                className="border-b border-white/5 hover:bg-white/5 transition-colors"
              >
                <td className="py-4 px-6 font-medium">{item.name}</td>
                <td className="text-right py-4 px-6">{item.price}</td>
                <td className={`text-right py-4 px-6 ${
                  item.change.startsWith('+') ? 'text-green-400' : 'text-red-400'
                }`}>
                  {item.change}
                </td>
                <td className="text-right py-4 px-6 text-text-secondary">{item.volume}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Market;