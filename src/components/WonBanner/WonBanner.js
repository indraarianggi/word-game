import React from "react";
import Banner from "../Banner";

function WonBanner({ numOfGueses }) {
  return (
    <Banner status="happy">
      <p>
        <strong>Congratulations!</strong> Got it in{" "}
        <strong>
          {numOfGueses === 1 ? "1 guess" : `${numOfGueses} guesses`}
        </strong>
        .
      </p>
    </Banner>
  );
}

export default WonBanner;
