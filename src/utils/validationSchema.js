import { object, string } from "yup";
import { regex } from "./regex";

export  const validationSchemaProfile = object({
    firstname: string().required(),
    phone: string().matches(regex.phoneNumber, "Phone Number is not Valid").required(),
    lastname: string().required(),
    dbo: string().required(),
    avater: string().required(),
    pincode: string().required(),
  });