import React from 'react';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import axios from 'axios';

const PayPalButton = ({ amount, onSuccess, onError }) => {
    const initialOptions = {
        clientId: "AVOKlxjlTmE6ijU1P3hpFrC0X8ZtVa5vE9OAP51faqLik6zy9DvqNyKf2Mau_ZvJsJ-TKBmU_uTBvmMa",
        currency: "INR",
        intent: "capture",
    };

    const paypalCreateOrder = async () => {
      try {
        let response = await axios.post('/api/paypal/createorder', {
          user_id: "store.getState().auth.user._id",
          order_price: 20.00
        })
        return response.data.data.order.order_id
      } catch (err) {
        // Your custom code to show an error like showing a toast:
        // toast.error('Some Error Occured')
        return null
      }
    }

    const paypalCaptureOrder = async (orderID) => {
      try {
        let response = await axios.post('/api/paypal/captureorder', {
          orderID
        })
        if (response.data.success) {
          // Order is successful
          // Your custom code
  
          // Like showing a success toast:
          // toast.success('Amount Added to Wallet')
  
          // And/Or Adding Balance to Redux Wallet
          // dispatch(setWalletBalance({ balance: response.data.data.wallet.balance }))
      }} catch (err) {
        // Order is not successful
        // Your custom code
  
        // Like showing an error toast
        // toast.error('Some Error Occured')
      }
    }
    


  return (
    <PayPalScriptProvider
    options={initialOptions}
  >
    <PayPalButtons
      style={{
        color: 'gold',
        shape: 'rect',
        label: 'pay',
        height: 50
      }}
      createOrder={async (data, actions) => {
        let order_id = await paypalCreateOrder()
        return order_id + ''
      }}
      onApprove={async()=> await paypalCaptureOrder("asasdasd")}
    />
  </PayPalScriptProvider>
  );
};

export default PayPalButton;
