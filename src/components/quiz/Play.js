import React, { Component, Fragment } from "react";
import Helmet from "react-helmet";
import M from "materialize-css";

import questions from "../../questions.json";
import isEmpty from "../../utils/is-empty";

class Play extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: questions,
      currentQuestion: {},
      nextQuestion: {},
      previousQuestion: {},
      answer: "",
      numberOfQuestions: 0,
      numberOfAnsweredQuestions: 0,
      currentQuestionIndex: 0,
      score: 0,
      correctAnswers: 0,
      wrongAnswers: 0,
      hints: 5,
      fiftyFifty: 2,
      usedfiftyFifty: false,
      time: {},
    };
  }

  componentDidMount() {
    const {
      questions,
      currentQuestion,
      nextQuestion,
      previousQuestion,
    } = this.state;
    this.displayQuestions(
      questions,
      currentQuestion,
      nextQuestion,
      previousQuestion
    );
  }

  displayQuestions = (
    questions = this.state.questions,
    currentQuestion,
    nextQuestion,
    previousQuestion
  ) => {
    let { currentQuestionIndex } = this.state;
    if (!isEmpty(this.state.questions)) {
      questions = this.state.questions;
      currentQuestion = questions[currentQuestionIndex];
      nextQuestion = questions[currentQuestionIndex + 1];
      previousQuestion = questions[currentQuestionIndex - 1];
      const answer = currentQuestion.answer;
      this.setState({
        currentQuestion,
        nextQuestion,
        previousQuestion,
        answer,
      });
    }
  };

  handleOptionClick = (e) => {
    if (e.target.innerHTML.toLowerCase() === this.state.answer.toLowerCase()) {
      this.correctAnswer();
    } else {
      this.wrongAnswer();
    }
  };

  correctAnswer = () => {
    M.toast({
      html: "Correct Answer!",
      classes: "toast-valid",
      displayLength: 1500,
    });
    this.setState((previousState) => ({
      score: previousState.score + 1,
      correctAnswers: previousState.correctAnswers + 1,
      currentQuestionIndex: previousState.currentQuestionIndex + 1,
      numberOfAnsweredQuestions: previousState.numberOfAnsweredQuestions + 1,
    }));
  };

  wrongAnswer = () => {
    navigator.vibrate(1000);
    M.toast({
      html: "Wrong Answer!",
      classes: "toast-invalid ",
      displayLength: 1500,
    });
    this.setState((previousState) => ({
      wrongAnswers: previousState.wrongAnswers + 1,
      currentQuestionIndex: previousState.currentQuestionIndex + 1,
      numberOfAnsweredQuestions: previousState.numberOfAnsweredQuestions + 1,
    }));
  };

  render() {
    //console.log(questions);
    const { currentQuestion } = this.state;
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

          <h5>{currentQuestion.question}</h5>
          <div className="options-container">
            <p onClick={this.handleOptionClick} className="option">
              {currentQuestion.optionA}
            </p>
            <p onClick={this.handleOptionClick} className="option">
              {currentQuestion.optionB}
            </p>
          </div>
          <div className="options-container">
            <p onClick={this.handleOptionClick} className="option">
              {currentQuestion.optionC}
            </p>
            <p onClick={this.handleOptionClick} className="option">
              {currentQuestion.optionD}
            </p>
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
