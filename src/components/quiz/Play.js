import React, { Component, Fragment } from "react";
import Helmet from "react-helmet";
import M from "materialize-css";

import questions from "../../questions.json";
import isEmpty from "../../utils/is-empty";
import correctNotification from "../../assets/soundfx/correct_sfx.mp3";
import wrongNotification from "../../assets/soundfx/wrong_sfx.mp3";
import buttonSound from "../../assets/soundfx/click_sfx.mp3";

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
    questions,
    currentQuestion,
    nextQuestion,
    previousQuestion
  ) => {
    console.log(questions[this.state.currentQuestionIndex]);
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
        numberOfQuestions: questions.length,
        answer,
      });
    }
  };

  handleOptionClick = (e) => {
    if (e.target.innerHTML.toLowerCase() === this.state.answer.toLowerCase()) {
      setTimeout(() => {
        document.getElementById("correct-sound").play();
      }, 200);
      this.correctAnswer();
    } else {
      setTimeout(() => {
        document.getElementById("wrong-sound").play();
      }, 200);
      this.wrongAnswer();
    }
  };

  handleNextButtonClick = (e) => {
    this.playButtonSound();
    if (this.state.nextQuestion !== undefined) {
      this.setState(
        (prevState) => ({
          currentQuestionIndex: prevState.currentQuestionIndex + 1,
        }),
        () => {
          this.displayQuestions(
            // this.state.state,
            this.state.currentQuestion,
            this.state.nextQuestion,
            this.state.previousQuestion
          );
        }
      );
    }
  };
  handlePreviousButtonClick = (e) => {
    this.playButtonSound();
    if (this.state.previousQuestion !== undefined) {
      this.setState(
        (prevState) => ({
          currentQuestionIndex: prevState.currentQuestionIndex - 1,
        }),
        () => {
          this.displayQuestions(
            // this.state.state,
            this.state.currentQuestion,
            this.state.nextQuestion,
            this.state.previousQuestion
          );
        }
      );
    }
  };
  handleQuitButtonClick = (e) => {
    this.playButtonSound();
    if (window.confirm("Are you sure you want to quit?")) {
      this.props.history.push("/");
    }
  };

  handleButtonClick = (e) => {
    switch (e.target.id) {
      case "next-button":
        this.handleNextButtonClick();
        break;
      case "previous-button":
        this.handlePreviousButtonClick();
        break;
      case "quit-button":
        this.handleQuitButtonClick();
        break;
      default:
        break;
    }
  };

  playButtonSound = () => {
    document.getElementById("button-sound").play();
  };

  correctAnswer = () => {
    M.toast({
      html: "Correct Answer!",
      classes: "toast-valid",
      displayLength: 1500,
    });
    this.setState(
      (prevState) => ({
        score: prevState.score + 1,
        correctAnswers: prevState.correctAnswers + 1,
        currentQuestionIndex: prevState.currentQuestionIndex + 1,
        numberOfAnsweredQuestions: prevState.numberOfAnsweredQuestions + 1,
      }),
      () => {
        this.displayQuestions(
          this.state.questions,
          this.state.nextQuestion,
          this.state.previousQuestion
        );
      }
    );
  };

  wrongAnswer = () => {
    navigator.vibrate(1000);
    M.toast({
      html: "Wrong Answer!",
      classes: "toast-invalid ",
      displayLength: 1500,
    });
    this.setState(
      (prevState) => ({
        wrongAnswers: prevState.wrongAnswers + 1,
        currentQuestionIndex: prevState.currentQuestionIndex + 1,
        numberOfAnsweredQuestions: prevState.numberOfAnsweredQuestions + 1,
      }),
      () => {
        this.displayQuestions(
          this.state.questions,
          this.state.nextQuestion,
          this.state.previousQuestion
        );
      }
    );
  };

  render() {
    //console.log(questions);
    const {
      currentQuestion,
      currentQuestionIndex,
      numberOfQuestions,
    } = this.state;
    return (
      <Fragment>
        <Helmet>
          <title>දැනුම මිණුම - Play</title>
        </Helmet>
        <Fragment>
          <audio id="correct-sound" src={correctNotification}></audio>
          <audio id="wrong-sound" src={wrongNotification}></audio>
          <audio id="button-sound" src={buttonSound}></audio>
        </Fragment>
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
              <span className="left">
                {currentQuestionIndex + 1} of {numberOfQuestions}
              </span>
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
            <button id="previous-button" onClick={this.handleButtonClick}>
              Previos
            </button>
            <button id="next-button" onClick={this.handleButtonClick}>
              Next
            </button>
            <button id="quit-button" onClick={this.handleButtonClick}>
              Quit
            </button>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Play;
