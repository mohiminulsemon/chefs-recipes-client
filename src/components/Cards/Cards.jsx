import React, { useEffect, useState } from "react";
import "./Cards.css";
import { Link } from "react-router-dom";

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
          <p>Years of experience: {item.experience}</p>
          <p>Number of recipes: {item.numbers_of_recipes}</p>
          <p>Likes: {item.likes}</p>
          <Link to={`/${parseInt(item.id)}`}><button>View Recipes</button></Link>
          
        </div>
      ))}
    </div>
  );
};

export default Cards;
