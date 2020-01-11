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

  renderInput({input}) {
    return <input {...input} />;
  }

  render () {
    //console.log (this.props);
    return (
      <form>
        <Field name="title" component={this.renderInput} />
        <Field name="description" component={this.renderInput} />
      </form>
    );
  }
}

export default reduxForm ({
  form: 'streamCreate',
}) (StreamCreate);
