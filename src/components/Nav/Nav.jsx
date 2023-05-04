import { useContext } from "react";
import "./Nav.css";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Nav = () => {
  const location = useLocation();

  const { user, logOut } = useContext(AuthContext);
  // console.log(user);
  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => console.log(error));
  };

  return (
    <nav className="Nav">
      <h2>Chef's Recipes</h2>
      <div className="navigation">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/blog">Blog</NavLink>
      </div>
      <div>
        {user ? (
          <span className="profile">
            <img src={user.photoURL} title={user.displayName} alt="" />
            <button className="btn" onClick={handleLogOut}>
              SignOut
            </button>
          </span>
        ) : (
          <span>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/signup">Sign Up</NavLink>
          </span>
        )}
      </div>
    </nav>
  );
};

export default Nav;
