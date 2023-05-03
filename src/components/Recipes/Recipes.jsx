import React, { useEffect, useState } from "react";
import "./Recipes.css";
import { useParams } from "react-router-dom";

const Recipes = () => {
  const { id } = useParams();

  const [recipes,setRecipes] = useState({});


  useEffect(() => {
    fetch(`https://chefs-recipe.vercel.app/information/0${id}`)
      .then((res) => res.json())
    //   .then((data) => console.log(data));
      .then((data) => setRecipes(data.item));
  }, []);

//   console.log(id);
  return (
    <div>
        <h2>{recipes.name}</h2>
      {/* <img src={recipes.picture} alt="" /> */}
    </div>
  );
};

export default Recipes;
