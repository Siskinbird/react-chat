import './style.scss'
import React from "react";
import {
    Route,
    Routes,
    BrowserRouter
} from "react-router-dom";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path='/'>
                <Route index element={<Home />} />
                  <Route path='login' element={<Login />} />
                  <Route path='register' element={<Register />} />
              </Route>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
