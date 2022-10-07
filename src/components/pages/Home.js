import React from "react";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import homesektop from "../../images/illustration-working.svg";

import icon_recog from "../../images/icon-brand-recognition.svg";
import icon_records from "../../images/icon-detailed-records.svg";
import icon_custom from "../../images/icon-fully-customizable.svg";

const Home = () => {
  return (
    <>
      <Navbar />
      <main>
        <section className="intro">
          <article>
            <h1>More than just shorter links</h1>
            <p>
              Build your brand’s recognition and get detailed insights on how
              your links are performing.
            </p>
            <a href="/" className="decorated-btn">
              Get Started
            </a>
          </article>
          <img src={homesektop} alt="" />
        </section>
        <section className="convertor-wrapper">
          <div className="convertor">
            <input
              type="text"
              aria-label="search"
              name="search"
              placeholder="shorten a link here"
            />
            <button className="decorated-btn" type="button">
              Shorten it!
            </button>
          </div>
          <div className="prev-url">
            <p>https://frontendmentor.io</p>
            <div className="short">
              <p>https://rel.ink/k4lkyk</p>
              <button className="decorated-btn" aria-expanded="false">
                Copy
              </button>
            </div>
          </div>
        </section>
        <section className="stats-wrapper">
          <article>
            <h2>Advanced Statistics</h2>
            <p>
              Track how your links are performing across the web with our
              advanced statistics dashboard.
            </p>
          </article>
          <div className="stats">
            <div className="stat">
              <div className="stat-img">
                <img src={icon_recog} alt="Recognition" />
              </div>
              <article>
                <h3>Brand Recognition</h3>
                <p>
                  Boost your brand recognition with each click. Generic links
                  don’t mean a thing. Branded links help instil confidence in
                  your content.
                </p>
              </article>
            </div>
            <div className="stat">
              <div className="stat-img">
                <img src={icon_records} alt="Records" />
              </div>
              <article>
                <h3>Detailed Records</h3>
                <p>
                  Gain insights into who is clicking your links. Knowing when
                  and where people engage with your content helps inform better
                  decisions.
                </p>
              </article>
            </div>
            <div className="stat">
              <div className="stat-img">
                <img src={icon_custom} alt="Customizable" />
              </div>
              <article>
                <h3>Fully Customizable</h3>
                <p>
                  Improve brand awareness and content discoverability through
                  customizable links, supercharging audience engagement.
                </p>
              </article>
            </div>
          </div>
        </section>
        <section className="boost">
          <h3>Boost your link today</h3>
          <a className="decorated-btn">Get started</a>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Home;
