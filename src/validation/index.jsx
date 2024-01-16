import * as Yup from "yup";

export const Signup = Yup.object({
  fullName: Yup.string()
    .min(2, "Too Short!")
    .max(15, "Too Long!")
    .required("please fill up the name"),
  phone: Yup.string()
    .matches(/^\d{11}$/, "Phone number must be 11 digits")
    .required("Please fill up the phone"),
  address: Yup.string().required("please fill up the address"),
  email: Yup.string()
    .email("Invalid email")
    .required("please fill up the email"),
  password: Yup.string()
    .min(8, "Too short")
    .required("please fill up the password"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "password must be match")
    .required("please fill up the confrim Password"),
});

export const Signin = Yup.object({
  email: Yup.string()
    .email("Invalid email")
    .required("please fill up the email"),
  password: Yup.string()
    .min(8, "Too short")
    .required("please fill up the password"),
});

export const UserSellsBookValidator = Yup.object({
  bookName: Yup.string()
    .max(40, "Must be less than 40 characters or less")
    .min(5, "Must be greater than 5 characters")
    .required("Required"),
  bookAuthor: Yup.string()
    .max(40, "Must be less than 40 characters or less")
    .min(5, "Must be greater than 5 characters")
    .required("Required"),
  price: Yup.number().required("Required"),
  previousPrice: Yup.number().required("Required"),
  category: Yup.string()
    .max(40, "Must be less than 40 characters or less")
    .min(5, "Must be greater than 5 characters"),
  bookQuantity: Yup.number().required("Required"),
  language: Yup.string().required("Required"),
  publisher: Yup.string().required("Required"),
  description: Yup.string().required("Required"),
});

const today = new Date();

export const Billing = Yup.object({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(15, "Too Long!")
    .required("please fill up the name"),
  address: Yup.string().required("please fill up the address"),
  phone: Yup.string()
    .matches(/^\d{11}$/, "Phone number must be 11 digits")
    .required("please fill up the phone"),
  city: Yup.string().required("please fill up the address"),
  house: Yup.string().required("please fill up the house"),
  email: Yup.string()
    .email("Invalid email")
    .required("please fill up the email"),
  number: Yup.string()
    .required("Required")
    .matches(/^\d{3}\s\d{3}\s\d{3}$/, "Invalid card number"),
  expiry: Yup.string()
    .required("Expiry Date is required")
    .matches(/^(0[1-9]|1[0-2])\/\d{2}$/, "Invalid Expiry Date (MM/YY format)")
    .test("is-future-date", "card expired", function (value) {
      if (!value) return false;

      const [inputMonth, inputYear] = value.split("/");
      const inputDate = new Date(`20${inputYear}`, inputMonth - 1, 1); // Assuming 20 is the default prefix for years like 'YY'

      return inputDate >= today;
    }),
  cvc: Yup.string()
    .required("Required")
    .matches(/^[0-9]{3,4}$/, "Invalid CVC"),
});
