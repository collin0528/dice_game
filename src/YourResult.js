import React from "react";

export const YourResult = props => {
  const { one, two, three, four, five, six, yourChoice } = props.allstates;
  if (yourChoice === 1) {
    return (
      <div className="result">
        <div>FEMI:</div> <img alt="dice" width="15%" src={one} />
      </div>
    );
  } else if (yourChoice === 2) {
    return (
      <div className="result">
        <div>MARUF:</div> <img alt="dice" width="15%" src={two} />
      </div>
    );
  } else if (yourChoice === 3) {
    return (
      <div className="result">
        <div>MATHEW:</div> <img alt="dice" width="15%" src={three} />
      </div>
    );
  } else if (yourChoice === 4) {
    return (
      <div className="result">
        <div>CHRISTIAN:</div> <img alt="dice" width="15%" src={four} />
      </div>
    );
  } else if (yourChoice === 5) {
    return (
      <div className="result">
        <div>DOCTOR:</div> <img alt="dice" width="15%" src={five} />
      </div>
    );
  } else if (yourChoice === 6) {
    return (
      <div className="result">
        <div>CYCLOBOLD:</div> <img alt="dice" width="15%" src={six} />
      </div>
    );
  } else {
    return null;
  }
};