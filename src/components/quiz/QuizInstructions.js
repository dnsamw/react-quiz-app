import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import Helmet from "react-helmet";

import answers from "../../assets/img/answers.jpg";
import fiftyFifty from "../../assets/img/fifty50.jpg";
import hints from "../../assets/img/hints.jpg";
import options from "../../assets/img/options.jpg";

const QuizInstructions = () => (
  <Fragment>
    <Helmet>
      <title>Quiz - Instructions</title>
    </Helmet>
    <div className="container instructions">
      <h3>නීති රීති සහ ක්‍රීඩා කරන ආකාරය.</h3>
      <h6>
        ඔබ <b>පළමු වරට</b> දැනුම මිණුම තරඟයට සහභාගිවන තරඟ කරුවෙක් නම්, තරඟය
        ආරම්භ කිරීමට පෙර පහත සඳහන් උපදෙස් සියල්ල කියවා අවබෝධ කරගැනීම අත්‍යාවශ්‍ය
        වේ.
      </h6>
      <ol className className="browser-default" id="main-list">
        <li>
          සෑම ප්‍රශ්ණ වටයක්ම බහුවරන ප්‍රශ්ණ 25 කින් සමන්විත වේ. එක් ප්‍රශ්ණයකට
          ලකුනු 4 ක් ලැබේ. ( 25x4 = 100).
        </li>
        <li>
          එක් ප්‍රශ්ණ වටයක් සඳහා ඔබට මිනිත්තු 20 ක කාලයක් ලැබෙන අතර එම මිනිත්තු
          20 ඇතුලත සියලුම ප්‍රශ්ණ වලට පිළිතුරු තේරීමට උත්සාහ කරන්න.
        </li>
        <li>
          සෑම ප්‍රශ්නයකටම පිළිතුරු 4 ක් ඔබට යොමු කෙරෙනු ඇත. ඒවා අතුරින් වඩාත්ම
          නිවැරදි පිලිතුර තේරීම කළ යුතුවේ.
          <img src={options} alt="Options example" />
        </li>
        <li>
          නිවැරදි හෝ වඩාත් ගැලපෙන පිළිතුර මත ක්ලික් (click / touch) කිරීම මගින්
          එම පිලිතුර තෝරන්න : වැරදීමකින් වෙනත් පිළිතුරක් තේරුවහොත් ලකුණු
          අහිමිවේ. එම නිසා හොඳින් කල්පනාකාරී වන්න.
          <img src={answers} alt="Answers example" />
        </li>
        <li>
          සෑම තරඟ වටයක සඳහාම ඔබට උපකාරක අවස්ථා 2ක් ලැබේ.
          <ul id="sublist">
            <li>
              i){" "}
              <span className="mdi mdi-set-center mdi-24px lifeline-icon"></span>{" "}
              50-50 අවස්ථාව - උපරිම වශයෙන් 2 වරක් භාවිතා කළ හැක
            </li>
            <li>
              ii){" "}
              <span className="mdi mdi-lightbulb-on mdi-24px lifeline-icon"></span>{" "}
              ඉඟි - උපරිම වශයෙන් 5 වරක් භාවිතා කළ හැක
            </li>
          </ul>
        </li>
        <li>
          50-50 අවස්තාව ලබාගැනීමට{" "}
          <span className="mdi mdi-set-center mdi-24px lifeline-icon"></span>{" "}
          සලකුණ මත ක්ලික් කල යුතු වේ. එමගින් වැරදි පිළිතුරු 2 ක් ඉවත් වී යයි.
          <img src={fiftyFifty} alt="Fifty fifty example" />
        </li>
        <li>
          නිවැරදි පිලිතුර සඳහා ඉඟියක් ලබා ගැනීම සඳහා{" "}
          <span className="mdi mdi-lightbulb-on mdi-24px lifeline-icon"></span>{" "}
          සලකුණ මත ක්ලික් කල යුතු වේ.
          <img src={hints} alt="Hints example" />
        </li>
        <li>මීලඟ පියවරට පිවුසුන විගස කාලය මැණීම ආරම්භවේ..!</li>
        <li>
          ඔබ සූදානම් නම් <b>ආරම්භ කරන්න</b> බොත්තම මත ක්ලික් කරන්න. ඔබට ජය!
        </li>
      </ol>
      <div>
        <span className="left">
          <Link to="/">{"<< ආපසු හැරෙන්න"}</Link>
        </span>
        <span className="right">
          <Link to="/play">{"ආරම්භ කරන්න >>"}</Link>
        </span>
      </div>
    </div>
  </Fragment>
);

export default QuizInstructions;
