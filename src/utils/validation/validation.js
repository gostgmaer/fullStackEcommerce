import * as Yup from "yup";

const emailValidationRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export const loginValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .matches(emailValidationRegex, "Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters long')
    .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
    .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .matches(/\d/, 'Password must contain at least one digit')
    .matches(/[!@#$%^&*(),.?":{}|<>]/, 'Password must contain at least one special character'),
});
export const registerValidationSchema = Yup.object().shape({

  email: Yup.string()
    .email("Invalid email address")
    .matches(emailValidationRegex, "Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters long')
    .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
    .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .matches(/\d/, 'Password must contain at least one digit')
    .matches(/[!@#$%^&*(),.?":{}|<>]/, 'Password must contain at least one special character'),
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
});



export const contactUsValidation = Yup.object().shape({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .matches(emailValidationRegex, "Invalid email address")
    .required("Email is required"),
  subject: Yup.string().required("Subject is Required"),
  message: Yup.string().required("Message is Required"),
});

export const forgetPasswordValidation = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .matches(emailValidationRegex, "Invalid email address")
    .required("Email is required"),
});

export const chnagePasswordValidation = Yup.object().shape({
  current_password: Yup.string()
    .required('Password is required'),
  password: Yup.string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters long')
    .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
    .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .matches(/\d/, 'Password must contain at least one digit')
    .matches(/[!@#$%^&*(),.?":{}|<>]/, 'Password must contain at least one special character'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
});
export const resetPasswordValidation = Yup.object().shape({

  password: Yup.string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters long')
    .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
    .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .matches(/\d/, 'Password must contain at least one digit')
    .matches(/[!@#$%^&*(),.?":{}|<>]/, 'Password must contain at least one special character'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
});
const requiredMsg = "This field is required";
export const productSchema = Yup.object().shape({
  title: Yup.string().required("Title is required"),
  slug: Yup.string().required("Slug is required"),
  sku: Yup.string().required("SKU is required"),
  productType: Yup.string().required("Product Type is required"),
  categories: Yup.string().required("Categories is required"),
  descriptions: Yup.string().required("Description is required"),

  price: Yup.number()
    .min(0, "Price must be a non-negative number")
    .required("Price is required"),
  costPrice: Yup.number()
    .min(0, "Cost Price must be a non-negative number")
    .required("Cost Price is required"),
  retailPrice: Yup.number()
    .min(0, "Retail Price must be a non-negative number")
    .required("Retail Price is required"),
  salePrice: Yup.number()
    .min(0, "Sale Price must be a non-negative number")
    .required("Sale Price is required"),
  // trackInventory: Yup.string().required('Tracking Inventory is required'),
  currentStockLevel: Yup.number()
    .min(0, "Current Stock Level must be a non-negative number")
    .required("Current Stock Level is required"),
  lowStockLevel: Yup.number()
    .min(0, "Low Stock Level must be a non-negative number")
    .required("Low Stock Level is required"),
  gtin: Yup.string().required("GTIN is required"),
  manufacturerPartNumber: Yup.string().required(
    "Manufacturer Part Number is required"
  ),
  brandName: Yup.string().required("Brand Name is required"),
  productUPCEAN: Yup.string().required("Product UPC/EAN is required"),
  pageTitle: Yup.string().required("SEO Title is required"),
  metaDescription: Yup.string(),
  metaKeywords: Yup.string(),
});

export const validateCategory = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  slug: Yup.string().required("Slug is required"),
  parent_category: Yup.string(),
  display_type: Yup.string(),
  descriptions: Yup.string(),
});


export const checkoutValidation = Yup.object().shape({
  firstName: Yup.string().required('First Name is required!'),
  lastName: Yup.string().required('Last name is required!'),
  email: Yup.string()
    .email('Invalid email')
    .required('Email address is required!'),
  phone: Yup.string().required('Phone number is required!'),
  address: Yup.string().required('Street address is required!'),
  city: Yup.string().required('City is required!'),
  country: Yup.string().required('Country is required!'),
  zipCode: Yup.string().required('ZIP / Postal is required'),
  // shippingOption: Yup.string().required('Shipping Option is required!'),
  // paymentMethod: Yup.string().required('Payment Method is required'),
  // couponcode: Yup.string(),
  // accountCreate: Yup.boolean(),
  // additionalNotes: Yup.string()
});



export const profileUpdateSchema = Yup.object().shape({
	phoneNumber: Yup.number().required('Phone number is required!'),
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  username: Yup.string().required("User Name is required"),
  // dateOfBirth: Yup.string().required('Date of Birth is Required!'),
  // gender: Yup.string()
});