import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Result from "./Pages/Result";
import {RecoilRoot} from 'recoil';


const App: React.FC = () => {
  return (
    <RecoilRoot>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/results" element={<Result/>} />
      </Routes>
    </Router>
    </RecoilRoot>
  );
};

export default App;
