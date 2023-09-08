import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import About from './components/About/About';
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Headers from "./components/Headers/Headers";
import NotFound from "./components/NotFound/NotFound";
import Blog from "./components/Blog/Blog"; 
import Article from "./components/Article/Article"
import Footer from "./components/Footer/Footer";
import Doctors from "./components/Doctors/Doctors";
import Register from "./components/Register/Register"
import AuthProvider from "./components/providers/AuthProvider";
import PrivateRoute from "./routes/PrivateRoute";
import Detail from "./components/Services/Detail";

function App() {
  return (
    <div className="app">
      <AuthProvider>
        <Router>
          <Headers />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="blog" element={<Blog />} />
              <Route
                path="doctors"
                element={<PrivateRoute><Doctors /></PrivateRoute>}
              />
              <Route
                path="details/:id"
                element={<PrivateRoute><Detail /></PrivateRoute>}
              />
              <Route path="article" element={<Article />} />
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
              <Route path="/*" element={<NotFound />} />
            </Routes>
          <Footer />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
