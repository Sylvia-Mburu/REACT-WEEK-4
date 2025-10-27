import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import { TaskProvider } from "./context/TaskContext";

function About() {
  return <div className="p-4">This is the About page.this app gives you the freedom and pleasure to keep your life free from being disorganized.</div>;
}

export default function App() {
  return (
    <Router>
      <TaskProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </TaskProvider>
    </Router>
  );
}
