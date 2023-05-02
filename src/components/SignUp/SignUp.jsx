import { useContext, useState } from 'react';
import './SignUp.css'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';


const SignUp = () => {
    const [error, setError] = useState("");
    const { createUser } = useContext(AuthContext);
  
    const handleSignUp = (event) => {
      // for preventing reload of form input
      event.preventDefault();
  
      const form = event.target;
      const email = form.email.value;
      const password = form.password.value;
      const confirm = form.confirm.value;
    //   const photoUrl = form.photoUrl.value;
  
      // console.log(email,password,confirm)
  
      if (password !== confirm) {
        setError("password doesn't match!");
        return;
      } else if (password < 6) {
        setError("password length should be atleast 6 character");
      }
  
      createUser(email, password)
        .then((result) => {
          const loggedUser = result.user;
          console.log(loggedUser);
        })
        .catch((error) => {
          console.log(error);
          setError(error.message);
        });
    };
  
    return (
      <div className="form-container">
        <h2 className="form-title">Sign Up</h2>
        <form onSubmit={handleSignUp} action="">
          <div className="form-control">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="" required />
          </div>
          <div className="form-control">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="" required />
          </div>
          <div className="form-control">
            <label htmlFor="password">Confirm Password</label>
            <input type="password" name="confirm" id="" required />
          </div>
          <div className="form-control">
          <label htmlFor="photoUrl">Photo URL</label>
          <input type="text" name="photoUrl" id="" />
        </div>
          <input className="btn-submit" type="submit" value="Sign Up" />
  
          <p>
            <small>
              Already have an account? <Link to="/login">Login</Link>
            </small>
          </p>
  
          <p className="text-error">{error}</p>
        </form>
      </div>
    );
};

export default SignUp;