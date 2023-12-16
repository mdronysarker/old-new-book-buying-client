import * as Yup from "yup";

export const Billing = Yup.object({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(15, "Too Long!")
    .required("please fill up the name"),
  address: Yup.string().required("please fill up the address"),
  phone: Yup.string()
    .matches(/^\d{10}$/, "Phone number must be 11 digits")
    .required("please fill up the phone"),
  city: Yup.string().required("please fill up the address"),
  house: Yup.string().required("please fill up the house"),
  email: Yup.string()
    .email("Invalid email")
    .required("please fill up the email"),
});