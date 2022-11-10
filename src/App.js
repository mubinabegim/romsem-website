import React, {useEffect, useState} from "react";
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
import Detailed from "./pages/details/Detailed";


function App() {
  const [meals, setMeals] = useState([]);

  const mealData = [
    {
      price: "599 СОМ",
      discount: "1599 СОМ",
      weight: "1260 грамм 36 кусочек",
    },
    {
      price: "599 СОМ",
      discount: "1599 СОМ",
      weight: "1260 грамм 36 кусочек",
    },
    {
      price: "599 СОМ",
      discount: "1599 СОМ",
      weight: "1260 грамм 36 кусочек",
    },
    {
      price: "599 СОМ",
      discount: "1599 СОМ",
      weight: "1260 грамм 36 кусочек",
    },
    {
      price: "599 СОМ",
      discount: "1599 СОМ",
      weight: "1260 грамм 36 кусочек",
    },
    {
      price: "599 СОМ",
      discount: "1599 СОМ",
      weight: "1260 грамм 36 кусочек",
    },
    {
      price: "599 СОМ",
      discount: "1599 СОМ",
      weight: "1260 грамм 36 кусочек",
    },
    {
      price: "599 СОМ",
      discount: "1599 СОМ",
      weight: "1260 грамм 36 кусочек",
    },
    {
      price: "599 СОМ",
      discount: "1599 СОМ",
      weight: "1260 грамм 36 кусочек",
    },
  ];

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast")
      .then((json) => json.json())
      .then((data) => {
        setMeals(
          data.meals.map((m, index) => {
            return {
              title: m.strMeal,
              image: m.strMealThumb,
              id: m.idMeal,
              price: mealData[index].price,
              discount: mealData[index].discount,
              weight: mealData[index].weight,
            };
          })
        );
      });
  }, []);

  return (
    <div className="App">
      <div className='wrapper'>
        <Router>
          <Routes>
            <Route path="/" element={<MainPage meals={meals} />}></Route>
            <Route path="/goods" element={<Goods />}></Route>
            <Route path="/cards" element={<GoodsCard />}></Route>
            <Route path="/review" element={<Review />}></Route>
            <Route path="/oformleniye" element={<Ofermleniye/>}></Route>
            <Route path="/product/:id" element={<Detailed meals={meals} />}></Route> 
          </Routes>
        </Router>
      </div>
    </div >
  );
}

export default App;
