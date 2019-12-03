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
  const text = season === 'winter'
    ? 'burr, it is chilly'
    : 'Lets hit the beach';

  console.log (props);
  return (
    <div>
      {/*   {season === 'winter' ? 'burr, it is chilly' : 'Lets hit the beach'} */}
      <br />
      <hr />
      <h1>{text}</h1>
    </div>
  );
};

export default SeasonDisplay;
