import React from "react";
import { ErrorMessage, useField } from "formik";
import styles from "./InputInLabel.module.scss";
import cx from "classnames";

const InputInLabelHook = (props) => {
  const { name, ...restProps } = props;
  const [field, meta, helpers] = useField(props);
  const inputClasses = cx(styles.input, {
    [styles.invalid]: meta.error && meta.touched,
  });
  return (
    <label className={styles.container}>
      <span>Enter your {name}</span>
      <input {...field} {...restProps} className={inputClasses} />
      <ErrorMessage name={name} component="span" className={styles.error} />
    </label>
  );
};
export default InputInLabelHook;
