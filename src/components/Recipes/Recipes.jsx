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

  // console.log(chef)
  // console.log(chef.recipes[0]);

//   console.log(id);
  return (
    <div>
        <div className="bio">
        {
          isLoading?  (
            <div className="loader">
              <Circles size={100} color="#00BFFF" loading={isLoading} />
            </div>
          ): <img src={chef.picture} alt={chef.name} />
        }
          <h3>{chef.name}</h3>
          <p>{chef.bio}</p>
          <p>Years of experience: {chef.experience}</p>
          <p>Number of chef: {chef.numbers_of_recipes}</p>
          <p>Likes: {chef.likes}</p>
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
