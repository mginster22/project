import React, { useContext, useState, useCallback, useMemo } from "react";
import { UserContext, ThemeContext } from "../../contexts";
import styles from "./UserProfile.module.scss";
import cx from "classnames";
import { CONSTANTS } from "./../../constants";
const { THEMES } = CONSTANTS;

// const mapStyles = {
//   [THEMES.LIGHT]: { backgroundColor: "white", color: "black" },
//   [THEMES.DARK]: { backgroundColor: "black", color: "white" },
// };

const UserProfile = () => {
  const [numberValue, setNumberValue] = useState(0);
  const [{ name, age, id }] = useContext(UserContext);
  const [theme, setTheme] = useContext(ThemeContext);

  const isLigthTheme = theme === THEMES.LIGHT;
  const classNamesContainer = cx(styles.container, {
    [styles.light]: theme === THEMES.LIGHT,
    [styles.dark]: theme === THEMES.DARK,
  });

  function calcValue(n) {
    let res = 0;
    for (let i = 0; i < 1000000000; i++) {
      res += i;
    }
    return n * n * n + res;
  }
  const handlerSwitch = useCallback(() => {
    setTheme(theme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT);
  }, [theme, setTheme]);

  const handlerNumberInput = useCallback(({ target: { value } }) => {
    setNumberValue(Number(value));
  }, []);

  const logNumberValue = useCallback(() => {
    console.log(numberValue);
  }, [numberValue]);
  const memeCalcValue = useMemo(() => calcValue(numberValue), [numberValue]);
  return (
    <section className={classNamesContainer}>
      <h1 className={styles.heading}>User Profile</h1>
      <h2>
        Hi,{name} age={numberValue}
      </h2>
      <button onClick={handlerSwitch}>{isLigthTheme ? "dark" : "light"}</button>
      <input type="number" value={numberValue} onChange={handlerNumberInput} />
      <h3>calc= {memeCalcValue}</h3>
      <button onClick={logNumberValue}>clicker</button>
    </section>
  );
};

export default UserProfile;
