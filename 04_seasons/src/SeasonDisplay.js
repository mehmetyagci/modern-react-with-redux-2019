import React from 'react';

const SeasonDisplay = props => {
  console.log ('SeasonDisplay->props');
  console.log (props);
  return (
    <div>
      <h1>Season Display</h1>
      <h2>{props.lat}</h2>
    </div>
  );
};

export default SeasonDisplay;
