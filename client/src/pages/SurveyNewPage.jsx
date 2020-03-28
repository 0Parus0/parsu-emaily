import React, { Component } from 'react';
import { reduxForm } from 'redux-form';

import SurveyForm from '../components/SurveyForm.component';
import SurveyFormReview from '../components/SurveyFormReview.component';

export class SurveyNewPage extends Component {
  state = {
    showFormReview: false,
  };

  renderContent() {
    const { showFormReview } = this.state;
    if (showFormReview) {
      return (
        <SurveyFormReview
          onCancel={() => this.setState({ showFormReview: false })}
        />
      );
    }
    return (
      <SurveyForm
        onSurveySubmit={() => this.setState({ showFormReview: true })}
      />
    );
  }

  render() {
    return <div>{this.renderContent()}</div>;
  }
}

export default reduxForm({
  form: 'surveyForm',
})(SurveyNewPage);
