import React from 'react';
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="landing">
      <div className="dark-overlay landing-inner text-light">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h1 className="display-3 mb-4">Givifun</h1>
              <p className="lead">
                {' '}
                An online fundraising app that makes donation process fun & engaging!
              </p>
              <hr />
              <Link to="/register" className="btn btn-lg btn-primary mr-2">
                Sign Up
              </Link>
              <Link to="/login" className="btn btn-lg btn-light">
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;