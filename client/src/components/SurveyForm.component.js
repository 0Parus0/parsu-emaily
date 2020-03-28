import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { reduxForm, Field } from 'redux-form';
import SurveyField from './SurveyField.component';
import validateEmails from '../utils/validateEmail';
import formFields from '../utils/formFields';

class SurveyForm extends Component {
  // eslint-disable-next-line class-methods-use-this
  renderFields() {
    return formFields.map(({ label, name }) => (
      <Field
        component={SurveyField}
        type="text"
        label={label}
        name={name}
        key={name}
      />
    ));
  }

  render() {
    const { handleSubmit, onSurveySubmit } = this.props;
    return (
      <div>
        <form onSubmit={handleSubmit(onSurveySubmit)}>
          {this.renderFields()}
          <Link to="/surveys" className="red btn-flat white-text">
            Cancel
          </Link>
          <button type="submit" className="teal btn-flat right white-text">
            Next
            <i className="material-icons right">done</i>
          </button>
        </form>
      </div>
    );
  }
}

const validate = values => {
  const errors = {};
  errors.recipients = validateEmails(values.recipients || '');
  formFields.forEach(({ name }) => {
    if (!values[name]) {
      errors[name] = `You must provide a ${name}`;
    }
  });

  return errors;
};

export default reduxForm({
  validate,
  form: 'surveyForm',
  destroyOnUnmount: false,
})(SurveyForm);
