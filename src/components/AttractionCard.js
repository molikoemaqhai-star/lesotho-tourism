
import React from "react";

function AttractionCard({ attraction, onViewDetails }) {
  return (
    <article className="attraction-card">

      <div className="attraction-image-wrapper">
        <img
          src={attraction.image}
          alt={attraction.name}
          className="attraction-image"
        />

        <span className="attraction-category">
          {attraction.category}
        </span>
      </div>

      <div className="attraction-card-content">
        <p className="attraction-location">
          {attraction.location}
        </p>

        <h2>{attraction.name}</h2>

        <p className="attraction-description">
          {attraction.description}
        </p>

        <div className="attraction-cost">
          <span>Estimated Visit</span>
          <strong>{attraction.cost}</strong>
        </div>

        <button
          type="button"
          className="details-button"
          onClick={() => onViewDetails(attraction)}
        >
          View Details
        </button>
      </div>

    </article>
  );
}

export default AttractionCard;
