import React, { useState, useReducer, useContext, useId } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import MenuIcon from "@mui/icons-material/Menu";
import { MenuContext, ThemeContext, UserContext } from "./contexts";
import HomePages from "./pages/HomePages";
import { CONSTANTS } from "./constants";
import { useClicker } from "./hooks";
import SignUpForm from "./components/Forms/SignUpForm/index";
import Chat from "./components/Chat/index";
import FunkPhoneList from "./components/FunkPhoneList";
import NavMenu from "./components/NavMenu/index";
import reducer from "./reducer";
const { THEMES, MENU_ACTIONS } = CONSTANTS;

const App = () => {
  const [user, setUser] = useState({
    id: 1,
    name: "Vlad Korochanskiy",
    age: 24,
  });

  const [state, dispatch] = useReducer(reducer, { isMenuOpen: false });
  const menuOpen = () => dispatch({ type: MENU_ACTIONS.MENU_OPEN });
  const menuClose = () => dispatch({ type: MENU_ACTIONS.MENU_CLOSE });

const idOpen = useId() 

  const themeArrState = useState(THEMES.LIGHT);
  const count = useClicker();
  return (
    <MenuContext.Provider value={{ state, menuClose,menuOpen,idOpen}}>
      <ThemeContext.Provider value={themeArrState}>
        <UserContext.Provider value={[user, setUser]}>
          <MenuIcon onClick={menuOpen} id={idOpen}/>
          <p>Count: {count}</p>
          <BrowserRouter>
            <NavMenu />
            <Routes>
              <Route path="/" element={<HomePages />} />
              <Route path="/signup" element={<SignUpForm />} />
              <Route path="/chat" element={<Chat />} />
              <Route path="/userList" element={<FunkPhoneList />} />
            </Routes>
          </BrowserRouter>
        </UserContext.Provider>
      </ThemeContext.Provider>
    </MenuContext.Provider>
  );
};

export default App;
