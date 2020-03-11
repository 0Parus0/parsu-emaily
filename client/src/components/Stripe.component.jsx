import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import * as actions from '../actions';

export class Stripe extends Component {
  render() {
    const { handleToken } = this.props;
    return (
      <div>
        <StripeCheckout
          name="Parus-Emaily"
          description="$5 for 5 email credits"
          amount={500}
          token={token => handleToken(token)}
          stripeKey={process.env.REACT_APP_STRIPE_KEY}
        >
          <button type="button" className="btn">
            Add Credits
          </button>
        </StripeCheckout>
      </div>
    );
  }
}

export default connect(null, actions)(Stripe);
