import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout";
import Register from "./pages/register";
import Login from "./pages/login";
import Home from "./pages/home";
import About from "./pages/about";
import Movies from "./pages/movies";
import Notfound from './pages/notfound';
import Moviedetails from "./pages/moviedetails";
import Search from "./pages/search";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies/>} />
          <Route path="about" element={<About />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="search" element={<Search/>} />
          <Route path="/:movieId" element={<Moviedetails/>} />
        </Route>
        <Route path="*" element={<Notfound/>} />
      </Routes>
    </div>
  );
}

export default App;
