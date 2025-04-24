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
              <span className="highlight-1">3rd-year</span> CS student building
              full-stack apps with AI + Web3. One of the{" "}
              <span className="highlight-2">Founder </span>
              of Web3Enclave, host of{" "}
              <span className="highlight-3">Blockfinity 1.0</span>. Created{" "}
              <span className="highlight-4">GPTDeck</span> &{" "}
              <span className="highlight-5">crowdFlow</span>. Solana Wayanad{" "}
              <span className="highlight-6">contributor</span> & hackathon
              regular. Loves startups, decentralization, and touching{" "}
              <span className="highlight-7">grass</span> (sometimes).
            </code>
          </pre>
        </div>
      </div>
    </section>
  );
};

export default About;
