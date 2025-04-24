import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="about-section">
      <div className="code-snippet">
        <div className="code-header">
          <span className="filename">bio.txt</span>
          <div className="buttons">
            <span className="button"></span>
            <span className="button"></span>
            <span className="button"></span>
          </div>
        </div>
        <div className="code-content">
          <pre>
            <code>
              <span className="highlight-4">3rd-year</span> CS student building
              full-stack apps with AI + Web3. One of the{" "}
              <span className="highlight-4">Founder </span>
              of <a target="_blank">Web3Enclave</a>, host of{" "}
              <span className="highlight-4">Blockfinity 1.0</span>. Created{" "}
              <span className="highlight-4">GPTDeck</span> &{" "}
              <span className="highlight-4">crowdFlow</span>. Solana Wayanad{" "}
              <span className="highlight-4">contributor</span> & hackathon
              regular. Loves startups, decentralization, and touching{" "}
              <span className="highlight-2">grass</span> (sometimes).
            </code>
          </pre>
        </div>
      </div>
    </section>
  );
};

export default About;
