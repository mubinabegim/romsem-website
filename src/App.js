import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Goods from "./pages/goods/Goods";
import MainPage from "./pages/main_page/mainPage";
import GoodsCard from './pages/GoodsCard/GoodsCard'
import Review from './pages/Review/Review'
import Ofermleniye from "./pages/oformleniye-zakaza/index.js";


function App() {
  return (
    <div className="App">
      <div className='wrapper'>
        <Router>
          <Routes>
            <Route path="/" element={<MainPage />}></Route>
            <Route path="/goods" element={<Goods />}></Route>
            <Route path="/cards" element={<GoodsCard />}></Route>
            <Route path="/review" element={<Review />}></Route>
            <Route path="/oformleniye" element={<Ofermleniye/>}></Route>
          </Routes>
        </Router>
      </div>
    </div >
  );
}

export default App;
