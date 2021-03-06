import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Div1 from "./Div1"
import Div2 from "./Div2"
import Div3 from "./Div3"
import HOME from "./Home"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<HOME/>}> </Route>
        <Route path="/div1" element={<Div1 />}> </Route>
        <Route path="/div2" element={<Div2 />}> </Route>
        <Route path="/div3" element={<Div3 />}> </Route>
      </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;
