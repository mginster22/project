import * as Yup from "yup";

export const SCHEMA_NAME = Yup.string("Must be string")
  .matches(/[A-Z][a-z]{1,16}$/, "invalid string")
  .required("Must be required");

export const SCHEMA_EMAIL = Yup.string("Must be string").email().required();

export const SCHEMA_PASSWORD = Yup.string("Must be string")
  .matches(
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
    "Invalid password"
  )
  .required("Must be required");

export const SCHEMA_AGE = Yup.number("Must be number")
  .min(18)
  .max(80)
  .required();

export const SCHEMA_SIGN_UP = Yup.object({
  fname: SCHEMA_NAME,
  lname: SCHEMA_NAME,
  email: SCHEMA_EMAIL,
  password: SCHEMA_PASSWORD,
  age: SCHEMA_AGE,
  remember: Yup.boolean("Must be true or false").required(),
});

export const SCHEMA_SIGN_IN = Yup.object({
  email: SCHEMA_EMAIL,
  password: SCHEMA_PASSWORD,
});

export const SCHEMA_LOGIN = Yup.object({
  login: Yup.string("Must be string")
    .matches(/^\w{4,16}$/, "invalid login")
    .required("Must be required"),
  password: SCHEMA_PASSWORD,
});
