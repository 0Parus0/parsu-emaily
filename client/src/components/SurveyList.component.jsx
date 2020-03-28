/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSurveys } from '../actions/index';

export class SurveyList extends Component {
  componentDidMount() {
    // eslint-disable-next-line no-shadow
    const { fetchSurveys } = this.props;
    fetchSurveys();
  }

  renderSurveys() {
    const { surveys } = this.props;
    return surveys.reverse().map(survey => (
      <div className="card blue-grey darken-1" key={survey._id}>
        <div className="card-content white-text">
          <span className="card-title">{survey.title}</span>
          <p>{survey.body}</p>
          <p className="right">
            Sent On: {new Date(survey.dateSent).toLocaleDateString()}
          </p>
        </div>
        <div className="card-action">
          <a href="#">Yes: {survey.yes}</a>
          <a href="#">No: {survey.no}</a>
        </div>
      </div>
    ));
  }

  render() {
    return <div>{this.renderSurveys()}</div>;
  }
}

const mapStateToProps = ({ surveys }) => ({
  surveys,
});

export default connect(mapStateToProps, { fetchSurveys })(SurveyList);
