import React, {Component} from 'react';

class SearchBar extends Component {
  state = {term: 'BMW'};

  onFormSubmit (event) {
    event.preventDefault (); // cancelation of form submit automatically

    console.log (this.state.term);
    this.props.onSearchSubmit (this.state.term);
  }

  render () {
    return (
      <div className="ui segment">
        <form onSubmit={event => this.onFormSubmit (event)} className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={e =>
                this.setState ({term: e.target.value.toUpperCase ()})}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
