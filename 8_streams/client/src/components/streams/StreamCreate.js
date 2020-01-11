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

  onSubmit (formValues) {
    console.log ('formValues:', formValues);
  }

  render () {
    console.log (this.props);
    return (
      <form
        className="ui form"
        onSubmit={this.props.handleSubmit (this.onSubmit)}
      >
        <Field name="title" component={this.renderInput} label="Enter Title" />
        <Field
          name="description"
          component={this.renderInput}
          label="Enter Description"
        />
        <button className="ui button priarmy">Submit</button>
      </form>
    );
  }
}

export default reduxForm ({
  form: 'streamCreate',
}) (StreamCreate);
