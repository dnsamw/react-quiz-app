import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import QuizInstructions from "./components/quiz/QuizInstructions";
import Play from "./components/quiz/Play";

function App() {
  return (
    <Router>
      <Route path="/" exact component={Home}></Route>
      <Route
        path="/play/instructions"
        exact
        component={QuizInstructions}
      ></Route>
      <Route path="/play/quiz" exact component={Play}></Route>
    </Router>
  );
}

export default App;
