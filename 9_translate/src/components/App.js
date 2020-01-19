import React from 'react';
import UserCreate from './UserCreate';
import LanguageChange from '../contexts/LanguageContext';
import LanguageContext from '../contexts/LanguageContext';

class App extends React.Component {
  state = {language: 'english'};

  onLanguageChange = language => {
    this.setState ({language: language});
  };

  render () {
    return (
      <div className="ui container">
        <div>
          Select a language:
          <i
            className="flag us"
            onClick={() => this.onLanguageChange ('english')}
          />
          <i
            className="flag nl"
            onClick={() => this.onLanguageChange ('dutch')}
          />
        </div>
        Current Language: {this.state.language}

        <LanguageContext.Provider value={this.state.language}>
          <UserCreate />
        </LanguageContext.Provider>
      </div>
    );
  }
}

export default App;
