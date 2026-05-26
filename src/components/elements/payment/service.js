import { razorPayPublic } from '@/config/setting';
import OrderServices from '@/helper/network/services/OrderServices';
import { notifyerror } from '@/utils/notify/notice';

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

//         rzp1.open(); // Open Razorpay payment window
//     } catch (error) {
//         // alert('Payment failed, please try again!');
//         notifyerror(error)
//     }

    


// };
const RazorpayPayment = async (requests, session, userData = {}) => {
    try {
        if (!razorPayPublic) {
            throw new Error('Razorpay is not configured for this environment.');
        }

        const isScriptReady = await loadRazorpayScript();
        if (!isScriptReady || typeof window === 'undefined' || typeof window.Razorpay !== 'function') {
            throw new Error('Razorpay checkout failed to load.');
        }

        // Step 1: Create order on the backend
        const { id: order_id, amount, currency, payment_method } = requests["result"];

        // Step 2: Initialize Razorpay checkout
        return new Promise((resolve, reject) => {
            const options = {
                key: razorPayPublic,
                amount: amount,
                currency: currency,
                name: 'Your Company Name',
                description: `Payment for Order`,
                order_id: order_id,
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
                    name: userData.name || '',
                    email: userData.email || '',
                    contact: userData.phone || '',
                },
                theme: {
                    color: '#3399cc',
                },
            };

            const rzp1 = new window.Razorpay(options);
            rzp1.open(); // Open Razorpay payment window
        });
    } catch (error) {
        console.error('Payment initiation failed', error);
        notifyerror('Payment initiation failed, please try again!');
        return Promise.reject(error); // Reject the promise in case of failure
    }
};

const loadRazorpayScript = async () => {
    if (typeof window === 'undefined') {
        return false;
    }

    if (typeof window.Razorpay === 'function') {
        return true;
    }

    return new Promise((resolve) => {
        const existingScript = document.querySelector('script[data-razorpay-checkout="true"]');

        if (existingScript) {
            existingScript.addEventListener('load', () => resolve(true), { once: true });
            existingScript.addEventListener('error', () => resolve(false), { once: true });
            return;
        }

        const script = document.createElement('script');
        script.src = 'https://checkout.razorpay.com/v1/checkout.js';
        script.async = true;
        script.dataset.razorpayCheckout = 'true';
        script.onload = () => resolve(true);
        script.onerror = () => resolve(false);
        document.body.appendChild(script);
    });
};


export { RazorpayPayment };
