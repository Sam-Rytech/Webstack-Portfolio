// import { useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import Home from "./Components/Home.js"
import Login from "./Components/Login.js"
import Signup from "./Components/Signup.js"
// import { AuthProvider } from "./Components/auth.js"
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
}

export default App;
