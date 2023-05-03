import React, { useEffect, useState } from "react";
import "./Recipes.css";
import { useParams } from "react-router-dom";
import { Circles } from "react-loader-spinner";
import { ToastContainer, toast } from 'react-toastify';

const Recipes = () => {
  const { id } = useParams();

  const [chef, setChef] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`https://chefs-recipe.vercel.app/information/0${id}`)
      .then((res) => res.json())
      //   .then((data) => console.log(data));
      .then((data) => {
        setChef(data.item);
        setIsLoading(false);
      });
  }, []);

  const { picture, name, bio, experience, numbers_of_recipes, likes, recipes } =
    chef;
  // console.log(chef)
  // console.log(recipes?recipes[0]:recipes);

  //   console.log(id);

  const [isFavorite, setIsFavorite] = useState(false);

  const onToggleFavorite = () => {
    setIsFavorite((prevIsFavorite) => !prevIsFavorite);
    toast.success(`Recipe ${isFavorite ? 'removed from' : 'added to'} favorites!`);
  };
  return (
    <div>
      <div className="bio">
        {isLoading ? (
          <div className="loader">
            <Circles size={100} color="#00BFFF" loading={isLoading} />
          </div>
        ) : (
          <img src={picture} alt={name} />
        )}
        <h3>{name}</h3>
        <p>{bio}</p>
        <p>Years of experience: {experience}</p>
        <p>Number of chef: {numbers_of_recipes}</p>
        <p>Likes: {likes}</p>
      </div>

      {recipes ? (
        <div>
          {recipes.map((recipe) => (
            <div className="card" key={recipe.id}>
              <h3>{recipe.name}</h3>
              <ul>
                {recipe.ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
              <p>Rating: {recipe.rating}</p>
              <button onClick={onToggleFavorite}>
                {isFavorite ? "Remove Favorite" : "Add Favorite"}
              </button>
              <ToastContainer/>
            </div>
          ))}
        </div>
      ) : (
        console.log(recipes)
      )}
    </div>
  );
};

export default Recipes;
