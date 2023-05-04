import React from "react";
import Header from "../components/Banner/Header";
import './Home.css'
import Cards from "../components/Cards/Cards";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Cards></Cards>
      <section className="extra-section">
        <h2>Our Mission</h2>
        <p>
          At Chef's Recipes, we're dedicated to bringing you the best recipes
          from professional chefs around the world. Our mission is to inspire
          you to try new dishes and improve your cooking skills.
        </p>
      </section>
      <section className="extra-section">
        <h2>Join Our Community</h2>
        <p>
          Sign up for our newsletter and get the latest recipes, cooking tips,
          and exclusive offers delivered straight to your inbox. You'll also get
          access to our online community where you can share your own recipes
          and connect with other foodies.
        </p>
        <form action="">
            <label htmlFor=" ">enter your email :</label>
            <input type="email" id="enter your email : "></input>
            <button id="btn-submit" type="submit">submit</button>
        </form>
      </section>
    </div>
  );
};

export default Home;
