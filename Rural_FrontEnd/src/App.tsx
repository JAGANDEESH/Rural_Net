import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Market from './pages/Market';
import Updates from './pages/Updates';
import Weather from './pages/Weather';
import Events from './pages/Events';
import Login from './pages/Login';
import GetStarted from './pages/GetStarted';
function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="container mx-auto px-4 pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/market" element={<Market />} />
            <Route path="/updates" element={<Updates />} />
            <Route path="/weather" element={<Weather />} />
            <Route path="/events" element={<Events />} />
            <Route path="/login" element={<Login />} />
            <Route path='/get-started' element={<GetStarted/>}/>
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;