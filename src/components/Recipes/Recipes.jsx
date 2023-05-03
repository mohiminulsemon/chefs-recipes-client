import React, { useEffect, useState } from "react";
import "./Recipes.css";
import { useParams } from "react-router-dom";
import { Circles } from  'react-loader-spinner'

const Recipes = () => {
  const { id } = useParams();

  const [chef,setChef] = useState({});
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

  const {picture,name,bio,experience,numbers_of_recipes,likes , recipes} = chef;
  // console.log(chef)
  console.log(recipes);

//   console.log(id);
  return (
    <div>
        <div className="bio">
        {
          isLoading?  (
            <div className="loader">
              <Circles size={100} color="#00BFFF" loading={isLoading} />
            </div>
          ): <img src={picture} alt={name} />
        }
          <h3>{name}</h3>
          <p>{bio}</p>
          <p>Years of experience: {experience}</p>
          <p>Number of chef: {numbers_of_recipes}</p>
          <p>Likes: {likes}</p>
        </div>

        {

          // console.log(chef.recipes)
        // <div className="recipes" key={item.id}>
        //   <h2>{item.name}</h2>
          
        // </div>

      }
        
    </div>
  );
};

export default Recipes;
