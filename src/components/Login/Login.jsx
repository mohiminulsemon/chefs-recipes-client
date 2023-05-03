import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import "./Login.css";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {
  const { signIn, signInWithGoogle, signInWithGithub } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  console.log('login page location', location)
  const from = location.state?.from?.pathname || '/'

  const handleLogin = event => {
      event.preventDefault();
      const form = event.target;
      const email = form.email.value;
      const password = form.password.value;
      console.log(email, password);

      signIn(email, password)
          .then(result => {
              const loggedUser = result.user;
              console.log(loggedUser);
              navigate(from, { replace: true })
          })
          .catch(error => {
              console.log(error);
          })
  }

  const handleGoogleSignIn = () => {
      signInWithGoogle()
          .then(result => {
              const loggedUser = result.user;
              console.log(loggedUser);
              navigate(from, { replace: true })
          })
          .catch(error => {
              console.log(error)
          })
  }

  const handleGithubSignIn = () => {
      signInWithGithub()
          .then(result => {
              const loggedUser = result.user;
              console.log(loggedUser);
              navigate(from, { replace: true })
          })
          .catch(error => {
              console.log(error)
          })
  }


  return (
    <div className="form-container">
      <h2 className="form-title">Login</h2>
      <form onSubmit={handleLogin} action="">
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="" required />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="" required />
        </div>

        <input className="btn-submit" type="submit" value="Login" />
        <button className="btn-submit" onClick={handleGoogleSignIn}>Login with google</button>
        <button className="btn-submit" onClick={handleGithubSignIn}>Login with github</button>
        
        <p>
          <small>
            New to website? <Link to="/signup">Create New Account</Link>
          </small>
        </p>
      </form>
    </div>
  );
};

export default Login;
