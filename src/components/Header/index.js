import React from "react";
import { UserProfileContext } from "../../contexts/index";
import styles from "./Header.module.scss";
import { CONSTANTS } from "../../constants";
import cx from "classnames";
import { WbSunny, DarkMode } from "@mui/icons-material";
import { WithThemeContext } from "../HOCs/index";
const { THEMES } = CONSTANTS;

const Header = ({ theme, setTheme }) => {
  const isLightTheme = theme === THEMES.LIGHT;
  const stylesContainer = cx(styles.container, {
    [styles.light]: isLightTheme,
    [styles.dark]: theme === THEMES.DARK,
  });
  const handlerSwitch = () => {
    const newTHeme = isLightTheme ? THEMES.DARK : THEMES.LIGHT;
    setTheme(newTHeme);
  };
  return (
    <header className={stylesContainer}>
      <UserProfileContext.Consumer>
        {({ fname, lname }) => (
          <p>
            Hi,{fname} {lname}
          </p>
        )}
      </UserProfileContext.Consumer>
      <span onClick={handlerSwitch}>
        {isLightTheme ? <WbSunny /> : <DarkMode />}
      </span>
      <span>
        
      </span>
    </header>
  );
};

export default WithThemeContext(Header);
