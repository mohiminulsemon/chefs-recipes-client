import React, { useEffect, useState } from "react";
import "./Cards.css";

const Cards = () => {
  const [card, setCard] = useState([]);
  useEffect(() => {
    fetch("https://chefs-recipe.vercel.app/information")
      .then((res) => res.json())
      .then((data) => setCard(data));
  }, []);
  //   console.log(card);
  return (
    <div className="cards">
      {card.map((item) => (
        <div className="card" key={item.id}>
          <img src={item.picture} alt={item.name} />
          <h3>{item.name}</h3>
          <p>Years of experience: {item.yearsOfExperience}</p>
          <p>Number of recipes: {item.numberOfRecipes}</p>
          <p>Likes: {item.likes}</p>
          <button>View Recipes</button>
        </div>
      ))}
    </div>
  );
};

export default Cards;
