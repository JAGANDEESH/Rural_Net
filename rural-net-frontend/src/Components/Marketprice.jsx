import { useEffect, useState } from "react";
import axios from "axios";

const MarketPrice = () => {
  const [prices, setPrices] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/market/prices")
      .then(response => setPrices(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold">Market Prices</h2>
      {prices.map(item => (
        <p key={item.id}>{item.product_name}: ₹{item.price}</p>
      ))}
    </div>
  );
};

export default MarketPrice;
