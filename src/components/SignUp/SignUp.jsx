import { useContext, useState } from 'react';
import './SignUp.css'
import { Link , useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';


const SignUp = () => {
  const { createUser , setuserprofilepicture } = useContext(AuthContext);

  const [error, setError] = useState('');

  const navigate = useNavigate();
  const location = useLocation();
  // console.log('register page location', location)

  const from = location.state?.from?.pathname || '/';
  // console.log(from);

  const handleRegister = event => {
      event.preventDefault();
      // setError();

      const form = event.target;
      const name = form.name.value;
      const photo = form.photo.value;
      const email = form.email.value;
      const password = form.password.value;

      // console.log(name, photo, email, password)

      //validation
      
      if (password.length < 6) {
          setError('Please add at least 6 characters in your password');
          return;
      }

      createUser(  email, password )
          .then(result => {
              const createdUser = result.user;
              console.log(createdUser);
              setError('');
              setuserprofilepicture(name, photo)
              .then(result=>{
                console.log(result.displayName);
              })
              .catch(error => {
                console.log(error);
              })
              navigate(from, { replace: true })
          })
          .catch(error => {
              console.log(error);
          })
  }
  
    return (
      <div className="form-container">
        <h2 className="form-title">Sign Up</h2>
        <form onSubmit={handleRegister} action="">
        <div className="form-control">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="" required />
          </div>
          <div className="form-control">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="" required />
          </div>
          <div className="form-control">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="" required />
          </div>
          <div className="form-control">
          <label htmlFor="photoURL">Photo URL</label>
          <input type="text" name="photo" id="" />
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