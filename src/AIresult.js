import React from "react";

export const AIresult = props => {
  const { one, two, three, four, five, six, AIChoice } = props.allstates;
  if (AIChoice === 1) {
    return (
      <div className="result">
        <div>SEGUN:</div> <img alt="dice" width="15%" src={one} />
      </div>
    );
  } else if (AIChoice === 2) {
    return (
      <div className="result">
        <div>OLATIDE:</div> <img alt="dice" width="15%" src={two} />
      </div>
    );
  } else if (AIChoice === 3) {
    return (
      <div className="result">
        <div>ANDREW:</div> <img alt="dice" width="15%" src={three} />
      </div>
    );
  } else if (AIChoice === 4) {
    return (
      <div className="result">
        <div>DANIEL:</div> <img alt="dice" width="15%" src={four} />
      </div>
    );
  } else if (AIChoice === 5) {
    return (
      <div className="result">
        <div>COLLINS:</div> <img alt="dice" width="15%" src={five} />
      </div>
    );
  } else if (AIChoice === 6) {
    return (
      <div className="result">
        <div>SAMUEL:</div> <img alt="dice" width="15%" src={six} />
      </div>
    );
  } else {
    return null;
  }
};