import React from "react";
import { Parent } from "./Parent";
import { ThemesContext } from "../../contexts";
import cx from "classnames";
import styles from "../Header/Header.module.scss";
import { CONSTANTS } from "./../../constants";
import { WithThemeContext } from "./../HOCs/index";
const { THEMES } = CONSTANTS;

const Tree = (props) => {
  const { theme } = props;
  const stylesContainer = cx(styles.container, {
    [styles.light]: theme === THEMES.LIGHT,
    [styles.dark]: theme === THEMES.DARK,
  });
  return (
    <div className={stylesContainer}>
      <h2>Tree</h2>
      <Parent />
    </div>
  );
};

export default WithThemeContext(Tree);
