import  { useContext } from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Nav = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user);
  const handleLogout = () => {
    logOut()
      .then((result) => {})
      .catch((error) => console.error(error));
  };

  return (
    <nav className="Nav">
      <h2>Chef's Recipes</h2>
      <div>
        <Link to="/">Home</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Sign Up</Link>
        {user && (
          <span className="text-white">
            Welcome {user.email}{" "}
            <button className="button" onClick={handleLogout}>
              SignOut
            </button>
          </span>
        )}
      </div>
    </nav>
  );
};

export default Nav;
