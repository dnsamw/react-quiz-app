import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import QuizInstructions from "./components/quiz/QuizInstructions";
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <Route path="/" exact component={Home}></Route>
      <Route
        path="/play/instructions"
        exact
        component={QuizInstructions}
      ></Route>
    </Router>
  );
}

export default App;
