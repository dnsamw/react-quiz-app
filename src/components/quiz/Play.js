import React, { Component, Fragment } from "react";
import Helmet from "react-helmet";

class Play extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Fragment>
        <Helmet>
          <title>දැනුම මිණුම - Play</title>
        </Helmet>
        <div className="questions">
          <h2>Free Quiz Mode</h2>
          <div className="lifeline-container">
            <p>
              <span className="mdi mdi-set-center mdi-24px lifeline-icon">
                <span className="lifeline">2</span>
              </span>
            </p>

            <p>
              <span className="mdi mdi-lightbulb-on mdi-24px lifeline-icon"></span>
              <span className="lifeline">5</span>
            </p>
          </div>

          <div>
            <p>
              <span className="left">1 of 15</span>
              <span className="right">
                2:20
                <span className="mdi mdi-clock-outline mdi-24px"></span>
              </span>
            </p>
          </div>

          <h5>What is HTML Stands for?</h5>
          <div className="options-container">
            <p className="option">Hi Tech Media Library</p>
            <p className="option">Hypo Text Markup Language</p>
          </div>
          <div className="options-container">
            <p className="option">Hyper Text Markup Language</p>
            <p className="option">Hyper Tags Markup Language</p>
          </div>

          <div className="bottom-container">
            <button>Previos</button>
            <button>Next</button>
            <button>Quit</button>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Play;
