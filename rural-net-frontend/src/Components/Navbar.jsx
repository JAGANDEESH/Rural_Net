import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between">
      <h1 className="text-xl font-bold">Rural Net</h1>
      <div className="space-x-4">
        <Link to="/">Home</Link>
        <Link to="/market-prices">Market Prices</Link>
        <Link to="/government-updates">Gov Updates</Link>
        <Link to="/weather">Weather</Link>
        <Link to="/login">Login</Link>
      </div>
    </nav>
  );
};

export default Navbar;
