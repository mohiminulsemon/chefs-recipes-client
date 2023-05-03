import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { Circles } from "react-loader-spinner";

const PrivateRoute = ({children}) => {
      const { user, loading } = useContext(AuthContext);
      const location = useLocation();
      // console.log(location);
      // console.log('user in private route', user);
      if (loading) {
          return <Circles size={100}></Circles>
            
      }
  
      if (user) {
          return children;
      }
      return <Navigate state={{ from: location }} to="/login" replace></Navigate>;
};

export default PrivateRoute;