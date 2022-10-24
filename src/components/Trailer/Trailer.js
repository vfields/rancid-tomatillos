import React from "react";
import PropTypes from "prop-types";

const Trailer = ({ trailer }) => {
  if (trailer !== "None") {
    return (
      <div className="video-responsive">
        <iframe
          width="853"
          height="480"
          src={`https://www.youtube.com/embed/${trailer}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
        />
      </div>
    );
  } else {
    return <h1>Sorry, no trailer!</h1>;
  }
};

Trailer.propTypes = {
  trailer: PropTypes.string.isRequired,
};

export default Trailer;
