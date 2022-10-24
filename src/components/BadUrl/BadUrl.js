import React from 'react';
import { Link } from "react-router-dom";
import "./BadUrl.css";
import { ReactComponent as Logo } from "../../assets/exit.svg";

function BadUrl(props) {
  return (
    <div className="error-container">
      <span className="error">Oops! Looks like that isn't a valid URL. Please try again.</span>
      <Link to="/">
        <button className="exit-button">
          <Logo className="logo" />
        </button>
      </Link>
    </div>
  )
}

export default BadUrl;
