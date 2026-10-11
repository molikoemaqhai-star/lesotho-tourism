
import React, { useEffect, useState } from "react";
import attractions from "../data/attractions";
import AttractionCard from "../components/AttractionCard";

function Attractions() {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("All");
  const [selectedAttraction, setSelectedAttraction] = useState(null);

  useEffect(() => {
    document.title = "Attractions | Explore Lesotho";
    window.scrollTo(0, 0);
  }, []);

  const categories = [
    "All",
    "Nature",
    "Culture",
    "Adventure",
    "Sightseeing"
  ];

  const filteredAttractions = attractions.filter((attraction) => {
    const matchesSearch = attraction.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesCategory =
      category === "All" || attraction.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <main className="attractions-page">

      <section className="attractions-hero">
        <div className="section-container">
          <p className="section-label">EXPLORE THE KINGDOM</p>

          <h1>
            Find Your Next
            <span> Adventure</span>
          </h1>

          <p className="attractions-intro">
            Discover breathtaking landscapes, cultural landmarks
            and unforgettable experiences throughout Lesotho.
          </p>
        </div>
      </section>

      <section className="attractions-content">
        <div className="section-container">

          <div className="search-filter-area">

            <div className="search-box">
              <label htmlFor="attraction-search">
                Search destinations
              </label>

              <input
                id="attraction-search"
                type="text"
                placeholder="Search by attraction name..."
                value={searchTerm}
                onChange={(event) =>
                  setSearchTerm(event.target.value)
                }
              />
            </div>

            <div className="filter-area">
              <p>Filter by category</p>

              <div className="filter-buttons">
                {categories.map((item) => (
                  <button
                    key={item}
                    type="button"
                    className={
                      category === item
                        ? "filter-button active-filter"
                        : "filter-button"
                    }
                    onClick={() => setCategory(item)}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

          </div>

          <div className="results-heading">
            <p>
              Showing <strong>{filteredAttractions.length}</strong>{" "}
              {filteredAttractions.length === 1
                ? "destination"
                : "destinations"}
            </p>
          </div>

          {filteredAttractions.length > 0 ? (
            <div className="attractions-grid">
              {filteredAttractions.map((attraction) => (
                <AttractionCard
                  key={attraction.id}
                  attraction={attraction}
                  onViewDetails={setSelectedAttraction}
                />
              ))}
            </div>
          ) : (
            <div className="no-results">
              <h2>No destinations found</h2>
              <p>
                Try another search or select a different category.
              </p>
            </div>
          )}

        </div>
      </section>

      {selectedAttraction && (
        <div
          className="modal-overlay"
          onClick={() => setSelectedAttraction(null)}
        >
          <div
            className="attraction-modal"
            role="dialog"
            aria-modal="true"
            aria-label={selectedAttraction.name}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="modal-close"
              aria-label="Close attraction details"
              onClick={() => setSelectedAttraction(null)}
            >
              ×
            </button>

            <div className="modal-image-area">
              <img
                src={selectedAttraction.image}
                alt={selectedAttraction.name}
                className="modal-image"
              />
            </div>

            <div className="modal-content">
              <p className="modal-category">
                {selectedAttraction.category}
              </p>

              <h2>{selectedAttraction.name}</h2>

              <p className="modal-location">
                {selectedAttraction.location}
              </p>

              <p className="modal-description">
                {selectedAttraction.description}
              </p>

              <div className="modal-section">
                <h3>Activities Available</h3>

                <div className="activities-tags">
                  {selectedAttraction.activities.map((activity) => (
                    <span key={activity}>{activity}</span>
                  ))}
                </div>
              </div>

              <div className="modal-cost">
                <span>Estimated Visiting Cost</span>
                <strong>{selectedAttraction.cost}</strong>
              </div>
            </div>
          </div>
        </div>
      )}

    </main>
  );
}

export default Attractions;
