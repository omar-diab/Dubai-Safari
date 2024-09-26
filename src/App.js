import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import { Header, Footer } from "./components";

import Home from "./pages/home/Home";
import SingleTour from './pages/tours/SingleTour'
import Login from './pages/forms/Login'
import Register from './pages/forms/Register'

function App() {
  return (
    <BrowserRouter className="App">
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tour/:id" element={<SingleTour />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
