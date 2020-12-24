import React from 'react';

import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    'pk_test_51I1KdTCVrbkDEsywa9OiYwP6OSKYKq9beq9fsuITBpGXLwxjetvRp5eJ6QStZLNXPYCa0wWpJwaX6lEQV7m5e2mK00SbRxEV24';

  const onToken = (token) => {
    console.log(token);
    alert('Payment Seccessfull');
  };
  return (
    <div>
      <StripeCheckout
        label='Pay Now'
        name='CRWN Clothing Ltd'
        billingAddress
        shippingAddress
        image='https://svgshare.com/i/CUz.svg'
        description={`Your total is ${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey}
      />
    </div>
  );
};

export default StripeCheckoutButton;
