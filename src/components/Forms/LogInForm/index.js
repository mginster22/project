import React from "react";
import { Formik, Form, Field } from "formik";
import { SCHEMA_LOGIN } from "./../../../utils/validateShcemas";
import styles from "./LoginForm.module.scss";
import InputInLabelHook from "../InputInLabelHook";

const LoginForm = () => {
  const onSubmit = (values, formikBag) => {
    console.log(values);
    console.log(formikBag);
    formikBag.resetForm();
  };
  return (
    <Formik
      initialValues={{ login: "", password: "" }}
      onSubmit={onSubmit}
      validationSchema={SCHEMA_LOGIN}
    >
      {(formikProps) => {
        return (
          <Form className={styles.container}>
            <InputInLabelHook name="login" type="text" placeholder="login" />
            <InputInLabelHook
              name="password"
              type="password"
              placeholder="password"
            />
            <input type="submit" />
          </Form>
        );
      }}
    </Formik>
  );
};
export default LoginForm;
