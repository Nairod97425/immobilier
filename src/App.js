import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/navbar";
import Home from "./components/Accueil";
import Login from "./components/Connexion";
import Signup from "./components/inscription";
import Profil from "./components/Profil";
import Footer from "./components/Footer";
import ContactProfil from "./components/ContactPro";
import NavbarProfil from "./components/NavBarProfil"; // Importez la nouvelle composante NavbarProfil

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<><Nav /><Home /></>} />
          <Route path="/connexion" element={<><Nav /><Login /></>} />
          <Route path="/inscription" element={<><Nav /><Signup /></>} />
          <Route path="/profil" element={<><NavbarProfil /><Profil /></>} />
          <Route path="/contact" element={<><NavbarProfil /><ContactProfil /></>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
// App.js
// import React, { useState } from 'react';
// import { register, login } from './services/auth';

// const App = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [token, setToken] = useState(null);

//   const handleRegister = async () => {
//     try {
//       await register(username, password);
//       alert('Registration successful!');
//     } catch (error) {
//       alert('Registration failed: ' + error.response.data.error);
//     }
//   };

//   const handleLogin = async () => {
//     try {
//       const { token } = await login(username, password);
//       setToken(token);
//       localStorage.setItem('authToken', token);
//     } catch (error) {
//       alert('Login failed: ' + error.response.data.error);
//     }
//   };

//   return (
//     <div>
//       <h1>Auth App</h1>
//       <div>
//         <input 
//           type="text" 
//           placeholder="Username" 
//           value={username} 
//           onChange={(e) => setUsername(e.target.value)} 
//         />
//         <input 
//           type="password" 
//           placeholder="Password" 
//           value={password} 
//           onChange={(e) => setPassword(e.target.value)} 
//         />
//         <button onClick={handleRegister}>Register</button>
//         <button onClick={handleLogin}>Login</button>
//       </div>
//       {token && <p>Token: {token}</p>}
//     </div>
//   );
// };

// export default App;
