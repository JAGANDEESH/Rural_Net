import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";

import Weather from "./components/Weather";
import Login from "./components/Login";

import MarketPrice from "./Components/Marketprice";
import GovernmentUpdates from "./Components/GovernmentUpdates";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/market-prices" element={<MarketPrice/>} />
          <Route path="/government-updates" element={<GovernmentUpdates/>} />
          <Route path="/weather" element={<Weather />} />
          <Route path="/login" element={<Login />} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
