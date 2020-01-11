import React from 'react';
import {Field, reduxForm} from 'redux-form';

class StreamCreate extends React.Component {
  // renderInput (formProps) {
  //   console.log (formProps);
  //   return <input {...formProps.input} />
  //   // return (
  //   //   <input
  //   //     onChange={formProps.input.onChange}
  //   //     value={formProps.input.value}
  //   //   />
  //   // );
  // }

  renderInput({input, label}) {
    return (
      <div className="field">
        <label>{label}</label>
        <input {...input} />
      </div>
    );
  }

  render () {
    //console.log (this.props);
    return (
      <form className="ui form">
        <Field name="title" component={this.renderInput} label="Enter Title" />
        <Field
          name="description"
          component={this.renderInput}
          label="Enter Description"
        />
      </form>
    );
  }
}

export default reduxForm ({
  form: 'streamCreate',
}) (StreamCreate);
