import React from "react";

function Flag(props) {
  const url = `https://www.countryflags.io/${props.country}/flat/64.png`;
  return <img src={url} alt={props.country} />;
}

export default Flag;
