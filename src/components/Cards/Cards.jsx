import React, { useEffect, useState } from "react";
import "./Cards.css";
import { Link } from "react-router-dom";
import { Circles } from "react-loader-spinner";
import LazyLoad from 'react-lazyload';

const Cards = () => {
  const [card, setCard] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch("https://chefs-recipe.vercel.app/information")
      .then((res) => res.json())
      .then((data) => {
        setCard(data);
        setIsLoading(false);
      });
  }, []);
  //   console.log(card);
  return (
    <div className="cards">
      {isLoading ? (
        <div className="cards-loader">
          <Circles size={100} color="#00BFFF" loading={isLoading} />
        </div>
      ) : (
        card.map((item) => (
          <div className="card" key={item.id}>
            {/* <img src={item.picture} alt={item.name} /> */}
            <LazyLoad height={50} offset={-100}>
              <img src={item.picture} alt="" />
            </LazyLoad>
            <h3>{item.name}</h3>
            <p>Years of experience: {item.experience}</p>
            <p>Number of recipes: {item.numbers_of_recipes}</p>
            <p>Likes: {item.likes}</p>
            <Link to={`/${parseInt(item.id)}`}>
              <button>View Recipes</button>
            </Link>
          </div>
        ))
      )}
    </div>
  );
};

export default Cards;
