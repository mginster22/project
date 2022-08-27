import React, { useContext, useEffect, useId } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { NavLink } from "react-router-dom";
import cx from "classnames";
import styles from "./NavMenu.module.scss";
import { MenuContext } from "../../contexts";

const NavMenu = () => {
  const {
    state: { isMenuOpen },
    menuClose,
    menuOpen,
    idOpen,
  } = useContext(MenuContext);

  const navClass = cx(styles.nav, {
    [styles.open]: isMenuOpen,
  });

  const idNav = useId();
  useEffect(() => {
    const handlerClick = ({ target }) => {
      if (
        isMenuOpen &&
        !document.getElementById(idNav).contains(target) &&
        !document.getElementById(idOpen).contains(target)
      ) {
        menuClose();
      }
    };
    window.addEventListener("click", handlerClick);
    return () => {
      window.removeEventListener("click", handlerClick);
    };
  }, [isMenuOpen]);
  return (
    <nav className={navClass} id={idNav}>
      <CloseIcon className={styles.close_btn} onClick={menuClose} />
      <ul>
        <li>
          <NavLink to="/">HOME</NavLink>
        </li>
        <li>
          <NavLink to="/signUp">SIGN UP FORM</NavLink>
        </li>
        <li>
          <NavLink to="/chat">CHAT</NavLink>
        </li>
        <li>
          <NavLink to="/userList">USER LIST</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavMenu;
