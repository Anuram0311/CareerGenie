import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';

import Login from './pages/Login';
import Register from './pages/Register';
import Domains from './pages/Domains';
import DomainBranches from './pages/DomainBranches';
import Professions from './pages/Professions';
import ProfessionDetails from './pages/ProfessionDetails';
import Quiz from './pages/Quiz';
import Result from './pages/Result';
import MarketData from './pages/MarketData';
import Roadmaps from './pages/Roadmaps';
import ResumeBuilder from './pages/ResumeBuilder';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full relative">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/domains" element={<Domains />} />
            <Route path="/domain/:domainPath" element={<DomainBranches />} />
            <Route path="/branch/:branchName" element={<Professions />} />
            <Route path="/profession/:id" element={<ProfessionDetails />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/result" element={<Result />} />
            <Route path="/market-data" element={<MarketData />} />
            <Route path="/roadmaps" element={<Roadmaps />} />
            <Route path="/resume-builder" element={<ResumeBuilder />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
