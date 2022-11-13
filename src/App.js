import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Switch,
  Route,
  Link,
} from "react-router-dom";

import Goods from "./pages/goods/Goods";
import MainPage from "./pages/main_page/mainPage";
import GoodsCard from "./pages/GoodsCard/GoodsCard";
import Review from "./pages/Review/Review";
import Ofermleniye from "./pages/oformleniye-zakaza/index.js";
import Detailed from "./pages/details/Detailed";
import { mealData } from "./constants";

function App() {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast")
      .then((json) => json.json())
      .then((data) => {
        let dataM = data.meals.map((m, index) => {
          return {
            title: m.strMeal,
            image: m.strMealThumb,
            id: m.idMeal,
            price: mealData[index].price,
            discount: mealData[index].discount,
            weight: mealData[index].weight,
            comments: [],
          };
        });
        setMeals(dataM);
        localStorage.setItem("meals", JSON.stringify(dataM));
      });
  }, []);

  const addComment = (id, text) => {
    let obj;
    let data = meals.map((meal) => {
      if (meal.id == id) {
        meal.comments.push(text);
        obj = meal;
        return meal;
      }
      return meal;
    })
    setMeals(data);
    localStorage.setItem("meals", JSON.stringify(data));
    return obj;
  };

  return (
    <div className="App">
      <div className="wrapper">
        <Router>
          <Routes>
            <Route path="/" element={<MainPage meals={meals} />}></Route>
            <Route path="/goods" element={<Goods />}></Route>
            <Route path="/cards" element={<GoodsCard />}></Route>
            <Route path="/review" element={<Review />}></Route>
            <Route path="/oformleniye" element={<Ofermleniye />}></Route>
            <Route
              path="/product/:id"
              element={<Detailed meals={meals} addComment={addComment} />}
            ></Route>
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
