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

  renderInput({input, label, meta}) {
    //console.log (meta);
    return (
      <div className="field">
        <label>{label}</label>
        <input {...input} />
        <div>{meta.error}</div>
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

const validate = formValues => {
  const errors = {};

  if (!formValues.title) {
    // only ran if the user did not enter a title
    errors.title = 'You must enter a title';
  }

  if (!formValues.description) {
    errors.description = 'You must enter a description';
  }

  return errors;
};

export default reduxForm ({
  form: 'streamCreate',
  validate: validate,
}) (StreamCreate);
