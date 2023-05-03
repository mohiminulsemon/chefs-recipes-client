import React from "react";
import "./Error.css";
import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const { error, status } = useRouteError();
  return (
    <div className="error">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Error.svg/1200px-Error.svg.png"
        alt=""
      />
      <div className="error-text">
        <h2>
          <span>Error</span> {status || 404}
        </h2>
        <p>{error?.message}</p>
        <Link to="/">
          <button>Back to Homepage</button>
        </Link>
      </div>
    </div>
  );
};

export default Error;
