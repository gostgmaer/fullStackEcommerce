import React from 'react';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';

const PayPalButton = ({ amount, onSuccess, onError }) => {
    const initialOptions = {
        clientId: "AVOKlxjlTmE6ijU1P3hpFrC0X8ZtVa5vE9OAP51faqLik6zy9DvqNyKf2Mau_ZvJsJ-TKBmU_uTBvmMa",
        currency: "USD",
        intent: "capture",
    };
  const createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: amount,
          },
        },
      ],
    });
  };

  const onApprove = (data, actions) => {
    return actions.order.capture().then(function (details) {
      // Call your backend to save the transaction details
  //    console.log('Transaction completed by ' + details.payer.name.given_name);

      // Execute your onSuccess callback
      onSuccess();
    });
  };

  return (
    <PayPalScriptProvider options={initialOptions}>
      <PayPalButtons createOrder={createOrder} onApprove={onApprove} onError={onError} />
    </PayPalScriptProvider>
  );
};

export default PayPalButton;
