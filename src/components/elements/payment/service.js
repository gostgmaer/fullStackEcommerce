import { razorPayPublic } from '@/config/setting';
import OrderServices from '@/helper/network/services/OrderServices';
import { emptyCart } from '@/store/reducers/cartSlice';
import { notifyerror, notifySuccess } from '@/utils/notify/notice';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';

// const RazorpayPayment = async (requests, session) => {

//     let navigate = useRouter();
//     const dispatch = useDispatch()
//     try {
//         // Step 1: Create order on the backend

//         const { id: order_id, amount, currency, payment_method } = requests["result"];


//         // Step 2: Initialize Razorpay checkout
    
//         const options = {
//             key: razorPayPublic, // Replace with your Razorpay key_id
//             amount: amount,
//             currency: currency,
//             name: 'Your Company Name',
//             description: 'Payment for Order #123',
//             order_id: order_id, // Pass Razorpay order_id from backend
//             handler: async function (response) {
//                 // Razorpay returns these three values after successful payment
//                 const order_id = response.razorpay_order_id;
//                 const paymentId = response.razorpay_payment_id;
//                 const signature = response.razorpay_signature;

//                 // Log or send these to the backend for verification

//                 // Call backend to verify payment
//                 const verification = await OrderServices.verifyOrder({ payment_method, order_id, paymentId, signature }, { "Authorization": `Bearer ${session["accessToken"]}` })
//                 notifySuccess(response["message"])
//                 navigate.push(`/order/${response["result"]._id}`)
//                 dispatch(emptyCart());


//             },
//             prefill: {
//                 name: 'John Doe',
//                 email: 'johndoe@example.com',
//                 contact: '9999999999',
//             },
//             theme: {
//                 color: '#3399cc',
//             },
//         };

//         const rzp1 = new window['Razorpay'](options);
//         //console.log(rzp1);

//         rzp1.open(); // Open Razorpay payment window
//     } catch (error) {
//         console.error('Payment failed', error);
//         // alert('Payment failed, please try again!');
//         notifyerror(error)
//     }

    


// };


const RazorpayPayment = async (requests, session, navigate, dispatch) => {
    try {
        // Step 1: Create order on the backend
        const { id: order_id, amount, currency, payment_method } = requests["result"];

        // Step 2: Initialize Razorpay checkout
        return new Promise((resolve, reject) => {
            const options = {
                key: razorPayPublic, // Replace with your Razorpay key_id
                amount: amount,
                currency: currency,
                name: 'Your Company Name',
                description: 'Payment for Order #123',
                order_id: order_id, // Pass Razorpay order_id from backend
                handler: async function (response) {
                    try {
                        // Razorpay returns these three values after successful payment
                        const order_id = response.razorpay_order_id;
                        const paymentId = response.razorpay_payment_id;
                        const signature = response.razorpay_signature;

                        // Call backend to verify payment
                        const verification = await OrderServices.verifyOrder(
                            { payment_method, order_id, paymentId, signature }, 
                            { "Authorization": `Bearer ${session["accessToken"]}` }
                        );

                        // Notify success and redirect
                        // notifySuccess("Payment successful!");
                        // navigate.push(`/order/${verification.result._id}`);
                        // dispatch(emptyCart());

                        // Resolve the promise with the verification result
                        resolve(verification);
                    } catch (error) {
                        console.error('Verification failed', error);
                        notifyerror('Payment verification failed, please try again!');
                        reject(error); // Reject the promise in case of error
                    }
                },
                prefill: {
                    name: 'John Doe',
                    email: 'johndoe@example.com',
                    contact: '9999999999',
                },
                theme: {
                    color: '#3399cc',
                },
            };

            const rzp1 = new window['Razorpay'](options);
            rzp1.open(); // Open Razorpay payment window
        });
    } catch (error) {
        console.error('Payment initiation failed', error);
        notifyerror('Payment initiation failed, please try again!');
        return Promise.reject(error); // Reject the promise in case of failure
    }
};


const PaypalPayment = async (data, session) => {


    try {
        // Step 1: Create order on the backend
        const requests = await OrderServices.addOrder(data, { "Authorization": `Bearer ${session["accessToken"]}` })


        const { id: order_id, amount, currency } = requests["result"];


        // Step 2: Initialize Razorpay checkout
        //console.log(window["Razorpay"]);
        const options = {
            key: razorPayPublic, // Replace with your Razorpay key_id
            amount: amount,
            currency: currency,
            name: 'Your Company Name',
            description: 'Payment for Order #123',
            order_id: order_id, // Pass Razorpay order_id from backend
            handler: async function (response) {
                // Razorpay returns these three values after successful payment
                const order_id = response.razorpay_order_id;
                const paymentId = response.razorpay_payment_id;
                const signature = response.razorpay_signature;

                // Log or send these to the backend for verification

                // Call backend to verify payment
                const requests = await OrderServices.verifyOrder({ payment_method: data.payment_method, order_id, paymentId, signature }, { "Authorization": `Bearer ${session["accessToken"]}` })



            },
            prefill: {
                name: 'John Doe',
                email: 'johndoe@example.com',
                contact: '9999999999',
            },
            theme: {
                color: '#3399cc',
            },
        };

        const rzp1 = new window['Razorpay'](options);
        //console.log(rzp1);

        rzp1.open(); // Open Razorpay payment window
    } catch (error) {
        console.error('Payment failed', error);
        // alert('Payment failed, please try again!');
        notifyerror(error)
    }


};


export { RazorpayPayment, PaypalPayment };
