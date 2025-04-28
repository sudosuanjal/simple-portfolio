import React from "react";
import "./Dream.css";

const Dream = () => {
  return (
    <section className="dream-section">
      <div className="image-snippet">
        <div className="image-header">
          <span className="filename">dream.png</span>
          <div className="buttons">
            <span className="button"></span>
            <span className="button"></span>
            <span className="button"></span>
          </div>
        </div>
        <div className="image-content">
          <img src="/dream.png" alt="Dream" />
        </div>
      </div>
    </section>
  );
};

export default Dream;
