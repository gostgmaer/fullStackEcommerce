'use client';
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

const PaypalProvider = ({ children }) => {
    return    <PayPalScriptProvider deferLoading={true}>{children}</PayPalScriptProvider>;
}

export default PaypalProvider






