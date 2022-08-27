import React from "react";
import { Field } from "formik";
import { ErrorMessage } from "formik";
import styles from "./InputInLabel.module.scss";
import cx from "classnames";

const InputInLabel = ({ name, ...restProps }) => {
  return (
    <label className={styles.container}>
      <span>Enter your {name}</span>
      <Field name={name}>
        {({ field, form, meta }) => {
          const inputClasses = cx(styles.input, {
            [styles.invalid]: meta.error && meta.touched,
          });
          return <input {...field} {...restProps} className={inputClasses} />;
        }}
      </Field>
      <ErrorMessage name={name} component="span" className={styles.error} />
    </label>
  );
};
export default InputInLabel;
