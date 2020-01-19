import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

// class Button extends React.Component {
//   static contextType = LanguageContext;

//   render () {
//     console.log (this.context);
//     const text = this.context === 'english' ? 'Submit' : 'Voorleggen';
//     return <button className="ui button primary">{text}</button>;
//   }
// }

// // Button.contextType = LanguageContext;

class Button extends React.Component {
  renderSubmit (value) {
    return value === 'english' ? 'Submit' : 'Voorleggen';
  }

  render () {
    return (
      <button className="ui button primary">
        <LanguageContext.Consumer>
          {value => this.renderSubmit (value)}
        </LanguageContext.Consumer>
      </button>
    );
  }
}

export default Button;
