import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import AlertDetail from './pages/AlertDetail';
function App() {
  return (
    <div className="app-container">
      {/* Header displayed on all pages */}
      <Header />
      {/* Main content area */}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/alert/:id" element={<AlertDetail />} />
        </Routes>
      </main>
    </div>
  );
}
export default App;
