import React, { useState, useEffect } from "react";

import "styles/newsletter.css";

const Newsletter = () => {
  const [styles, setStyles] = useState({});
  const [subscribers, setSubscribers] = useState("90");
  const ref = React.createRef();

  useEffect(() => {
    const api =
      "https://buttondown-subscribers-count.vercel.app/api/subscribers";
    fetch(api)
      .then((response) => response.json())
      .then(({ total = "90" }) => {
        setSubscribers(`${total}`);
      });
  }, []);

  return (
    <div className="newsletter-container">
      <div className="newsletter-title">
        <h3>
          <span aria-label="newsletter icon" role="img">
            📩
          </span>
          Join {subscribers} and growing developers
        </h3>
        <p>Learn about Web Development, Javascript, Designing and Books.</p>
        <p className="newsletter-spam">Get updates regularly from me.</p>
        <i>I promise you there won't be any spamming!.</i>
      </div>

      <div className="newsletter-content">
        <form
          action="https://buttondown.email/api/emails/embed-subscribe/gokul.site"
          method="post"
          target="popupwindow"
          className="embeddable-buttondown-form"
          autoComplete={"on"}
        >
          <input
            id="bd-email"
            className="email-address"
            placeholder="Email address"
            required
            name="email"
            type="email"
            ref={ref}
          />
          <input type="hidden" value="1" name="embed" />
          <input
            className="submit-btn"
            id="mc-embedded-subscribe"
            type="submit"
            value="Subscribe"
            onClick={() => {
              if (ref.current.checkValidity()) {
                setStyles({ display: "block" });
              }
            }}
          />
        </form>
        <p className="newsletter-confirmation" style={styles}>
          Your subscribtion is confirmed!{" "}
          <span role="img" aria-label="yeh!">
            🙌
          </span>
        </p>
      </div>
    </div>
  );
};

export default Newsletter;
