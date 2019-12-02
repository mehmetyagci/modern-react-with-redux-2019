import React from 'react';

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? 'summer' : 'winter';
  } else {
    return lat > 0 ? 'winter' : 'summer';
  }
};

const SeasonDisplay = props => {
  console.log ('SeasonDisplay->props');
  const season = getSeason (props.lat, new Date ().getMonth ());
  console.log (props);
  return (
    <div>
      <h1>Season Display</h1>
      <h2>{props.lat}</h2>
      <h3>{season}</h3>
    </div>
  );
};

export default SeasonDisplay;
