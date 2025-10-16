// App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Images from "./Images";
import NavBar from "./Components/NavBar";
import Sign from "./Components/Sign";
import History from "./Components/History";

function App() {
  const [login, setLogin] = useState(true);

  const updateLogin = (isLoggedIn) => {
    setLogin(isLoggedIn);
  };

  return (
    <Router>
      {login ? (
        <div className="App">
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Images" element={<Images />} />
            <Route path="/History" element={<History />} />
          </Routes>
        </div>
      ) : (
        <div>
          <Sign updateLogin={updateLogin} />
        </div>
      )}
    </Router>
  );
}

export default App;
