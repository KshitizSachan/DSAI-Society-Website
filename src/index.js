import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Components/Home';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from './Components/About';
import Blog from './Components/Blog';

ReactDOM.render(
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </Router>,
  
    document.getElementById("root")
);