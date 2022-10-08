import React, { useState, useEffect } from "react";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import homesektop from "../../images/illustration-working.svg";

import icon_recog from "../../images/icon-brand-recognition.svg";
import icon_records from "../../images/icon-detailed-records.svg";
import icon_custom from "../../images/icon-fully-customizable.svg";
import { getPrevURl, getShortenURl, pushUrl } from "../../utilities/utility";

const Home = () => {
  const [inputUrl, setinputUrl] = useState("");
  const [data, setdata] = useState(null);
  const [prevurl, setprevurl] = useState(null);
  const [error, seterror] = useState(false);
  const [copyStyle, setcopyStyle] = useState(false);

  function copyhandler(e) {
    navigator.clipboard.writeText(e.target.value);
    console.log("coied");

    setcopyStyle(true);
    setTimeout(() => {
      setcopyStyle(false);
    }, 30000);
  }

  const shortenUrl = async () => {
    let obj = await getShortenURl(inputUrl);

    if (obj.ok) {
      pushUrl(obj.result.original_link, obj.result.short_link);
      seterror(false);
    } else {
      seterror(true);
    }
    setdata(obj);
  };

  useEffect(() => {
    setprevurl(JSON.parse(getPrevURl()));
  }, [data]);

  return (
    <>
      <Navbar />
      <main>
        <section
          aria-label="intro-section"
          className="intro"
        >
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
        <section
          aria-label="shorten-url"
          className="convertor-wrapper"
        >
          <form className="convertor">
            <label htmlFor="search">Enter Url</label>
            <input
              type="text"
              aria-label="search"
              name="search"
              id="search"
              className={error ? "error" : ""}
              placeholder="shorten a link here"
              onChange={(e) => {
                setinputUrl(e.target.value);
              }}
            />
            <button
              className="decorated-btn"
              type="button"
              onClick={() => {
                shortenUrl();
              }}
            >
              Shorten it!
            </button>
          </form>

          {prevurl &&
            prevurl
              .slice(0)
              .reverse()
              .map((prev, index) => {
                if (!prev) return <></>;

                return (
                  <div className="prev-url" key={`prev.shorturl${index}`}>
                    <p>{prev.url}</p>
                    <div className="short">
                      <p>{prev.shorturl}</p>
                      <button
                        className={
                          copyStyle ? "copy decorated-btn" : "decorated-btn"
                        }
                        aria-expanded="false"
                        value={prev.shorturl}
                        onClick={(e) => {
                          copyhandler(e);
                        }}
                      >
                        Copy
                      </button>
                    </div>
                  </div>
                );
              })}
        </section>
        <section
          aria-label="statistics"
          className="stats-wrapper"
        >
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
        <section
          role="contentinfo"
          aria-labelledby="boost-links"
          className="boost"
        >
          <h3>Boost your link today</h3>
          <a className="decorated-btn" href="/">
            Get started
          </a>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Home;
