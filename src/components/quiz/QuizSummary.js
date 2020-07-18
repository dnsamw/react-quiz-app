import React, { Component, Fragment } from "react";
import Helmet from "react-helmet";
import { Link } from "react-router-dom";

class QuizSummary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
      numberOfQuestions: 0,
      numberOfAnsweredQuestions: 0,
      correctAnswers: 0,
      wrongAnswers: 0,
      hintsUsed: 0,
      fiftyFiftyUsed: 0,
    };
    //console.log(props);
  }

  componentDidMount() {
    const { state } = this.props.location;
    //console.log(state);
    if (state) {
      this.setState({
        score: (state.score / state.numberOfQuestions) * 100,
        numberOfQuestions: state.numberOfQuestions,
        numberOfAnsweredQuestions: state.numberOfAnsweredQuestions,
        correctAnswers: state.correctAnswers,
        wrongAnswers: state.wrongAnswers,
        hintsUsed: state.hintsUsed,
        fiftyFiftyUsed: state.fiftyFiftyUsed,
      });
    } else {
      console.log(state);
    }
    //console.log((state.score / state.numberOfQuestions) * 100);
  }

  render() {
    const { score } = this.state;
    const { state } = this;
    let stats, remark;

    // console.log(this.state);
    // console.log(state);
    // console.log(score);

    if (score < 30) {
      remark = "You need more practice!";
    } else if (score > 30 && score <= 50) {
      remark = "Better luck next time";
    } else if (score > 50 && score <= 70) {
      remark = "You can do better";
    } else if (score > 70 && score <= 84) {
      remark = "Good Job!";
    } else {
      remark = "You are a Genius!";
    }
    //console.log(remark);
    if (state.numberOfQuestions !== 0) {
      console.log(state.numberOfQuestions);
      stats = (
        <Fragment>
          <div className="summary">
            <div className="success-icon">
              <span className="mdi mdi-check-circle-outline "></span>
            </div>
            <h1>ප්‍රශ්න වටය අවසන්!</h1>
            <div className="container">
              <h4>{remark}</h4>
              <h2>ඔබේ ලකුණු මට්ටම : {this.state.score.toFixed(0)}&#37;</h2>
              <span className="stat left">මුලු ප්‍රශ්ණ ගනන: </span>
              <span className="stat right">{state.numberOfQuestions}</span>
              <br></br>
              <span className="stat left">පිළිතුරු දුන් ප්‍රශ්ණ ගනන: </span>
              <span className="stat right">
                {state.numberOfAnsweredQuestions}
              </span>
              <br></br>
              <span className="stat left">
                නිවැරදි පිළිතුරු දුන් ප්‍රශ්ණ ගනන:{" "}
              </span>
              <span className="stat right">{state.correctAnswers}</span>
              <br></br>
              <span className="stat left">
                වැරදි පිළිතුරු දුන් ප්‍රශ්ණ ගනන:{" "}
              </span>
              <span className="stat right">{state.wrongAnswers}</span>
              <br></br>
              <span className="stat left">භාවිත කල ඉඟි ගනන: </span>
              <span className="stat right">{state.hintsUsed}</span>
              <br></br>
              <span className="stat left">භාවිත කල 50/50 අවස්ථා ගනන: </span>
              <span className="stat right">{state.fiftyFiftyUsed}</span>
            </div>
            <section></section>
            <div className="buttons-container">
              <ul>
                <li>
                  <Link className="left" to="/">
                    මුල් පිටුවට
                  </Link>
                </li>
                <li>
                  <Link className="right" to="/play/quiz">
                    නැවත් ක්‍රීඩා කරන්න
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </Fragment>
      );
    } else {
      stats = (
        <section>
          <h1 className="No stats available">
            ප්‍රතිඵල නැත!, කරුනාකර ප්‍රශ්ණ වටයක් අවසන් කරන්න.
          </h1>
          <ul>
            <li>
              <Link to="/">මුල් පිටුවට</Link>
            </li>
            <li>
              <Link to="/play/quiz">ක්‍රීඩා කරන්න</Link>
            </li>
          </ul>
        </section>
      );
    }
    return (
      <Fragment>
        <Helmet>
          <title>දැනුම මිණුම - Summary</title>
        </Helmet>
        {stats}
      </Fragment>
    );
  }
}

export default QuizSummary;
