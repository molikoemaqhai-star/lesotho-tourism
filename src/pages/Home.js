import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import heroImage from "../images/lesotho-hero.jpg";

function Home() {

  useEffect(() => {
    document.title = "Explore Lesotho | Kingdom in the Sky";
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>

      {/* HERO SECTION */}
      <section
        className="home-hero"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="hero-overlay"></div>

        <div className="hero-content">
          <p className="hero-label">
            WELCOME TO THE KINGDOM IN THE SKY
          </p>

          <h1>
            Discover the
            <span> Beauty of Lesotho</span>
          </h1>

          <p className="hero-description">
            Journey through breathtaking mountains, discover rich
            Basotho culture and experience unforgettable adventures
            in the heart of Southern Africa.
          </p>

          <div className="hero-buttons">
            <Link to="/attractions" className="btn-primary">
              Explore Attractions
            </Link>

            <Link to="/enquiry" className="btn-outline">
              Plan Your Visit
            </Link>
          </div>
        </div>

        <div className="hero-scroll">
          <span>EXPLORE</span>
          <div className="scroll-line"></div>
        </div>
      </section>


      {/* ABOUT LESOTHO */}
      <section className="about-lesotho">
        <div className="section-container about-grid">

          <div className="about-heading">
            <p className="section-label">
              DISCOVER LESOTHO
            </p>

            <h2>
              A Kingdom
              <span> Above the Clouds</span>
            </h2>
          </div>

          <div className="about-content">
            <p>
              Known as the Kingdom in the Sky, Lesotho offers
              extraordinary mountain landscapes, welcoming
              communities and a proud cultural heritage.
            </p>

            <p>
              From spectacular waterfalls and mountain passes to
              historic sites and traditional Basotho experiences,
              every journey reveals another side of this remarkable
              country.
            </p>

            <Link to="/attractions" className="text-link">
              Discover our destinations →
            </Link>
          </div>

        </div>


        <div className="experience-grid section-container">

          <div className="experience-item">
            <span className="experience-number">01</span>
            <h3>Mountains</h3>
            <p>
              Explore dramatic highlands, valleys and breathtaking
              mountain scenery.
            </p>
          </div>

          <div className="experience-item">
            <span className="experience-number">02</span>
            <h3>Culture</h3>
            <p>
              Experience Basotho traditions, heritage, communities
              and historic landmarks.
            </p>
          </div>

          <div className="experience-item">
            <span className="experience-number">03</span>
            <h3>Adventure</h3>
            <p>
              Discover hiking, pony trekking, skiing and unforgettable
              outdoor experiences.
            </p>
          </div>

        </div>
      </section>


      {/* FEATURED DESTINATIONS */}
      <section className="featured-section">
        <div className="section-container">

          <div className="section-heading-center">
            <p className="section-label">EXPLORE THE KINGDOM</p>
            <h2>Featured Destinations</h2>
            <p>
              Begin your journey with some of Lesotho's remarkable
              places.
            </p>
          </div>

          <div className="featured-grid">

            <div className="featured-card">
              <div className="featured-number">01</div>
              <div>
                <span>SEMONKONG</span>
                <h3>Maletsunyane Falls</h3>
                <p>
                  Discover spectacular mountain scenery surrounding
                  one of Lesotho's best-known waterfalls.
                </p>
              </div>
            </div>

            <div className="featured-card">
              <div className="featured-number">02</div>
              <div>
                <span>LESOTHO HIGHLANDS</span>
                <h3>Katse Dam</h3>
                <p>
                  Experience impressive highland landscapes and one
                  of Lesotho's major engineering landmarks.
                </p>
              </div>
            </div>

            <div className="featured-card">
              <div className="featured-number">03</div>
              <div>
                <span>MASERU DISTRICT</span>
                <h3>Thaba Bosiu</h3>
                <p>
                  Explore a place of major historical and cultural
                  importance to the Basotho nation.
                </p>
              </div>
            </div>

          </div>

          <div className="featured-button">
            <Link to="/attractions" className="btn-dark">
              View All Attractions
            </Link>
          </div>

        </div>
      </section>


      {/* POPULAR ACTIVITIES */}
      <section className="activities-section">
        <div className="section-container">

          <div className="activities-heading">
            <div>
              <p className="section-label">FIND YOUR ADVENTURE</p>
              <h2>Popular Activities</h2>
            </div>

            <p>
              From peaceful cultural experiences to thrilling
              mountain adventures, there is something for every
              traveller.
            </p>
          </div>

          <div className="activities-grid">

            <div className="activity-card">
              <span>01</span>
              <h3>Hiking</h3>
              <p>Explore mountain trails and spectacular landscapes.</p>
            </div>

            <div className="activity-card">
              <span>02</span>
              <h3>Pony Trekking</h3>
              <p>Experience Lesotho's highlands on horseback.</p>
            </div>

            <div className="activity-card">
              <span>03</span>
              <h3>Culture</h3>
              <p>Discover Basotho heritage, traditions and history.</p>
            </div>

            <div className="activity-card">
              <span>04</span>
              <h3>Mountain Adventure</h3>
              <p>Experience unforgettable outdoor adventures.</p>
            </div>

          </div>
        </div>
      </section>


      {/* CTA */}
      <section className="home-cta">
        <div className="cta-content">
          <p className="section-label">YOUR JOURNEY STARTS HERE</p>

          <h2>Ready to Discover Lesotho?</h2>

          <p>
            Let the Kingdom in the Sky become your next unforgettable
            destination.
          </p>

          <Link to="/enquiry" className="btn-primary">
            Plan Your Visit
          </Link>
        </div>
      </section>

    </main>
  );
}

export default Home;