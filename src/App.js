import React from "react";
import "./App.css";
import UserCard from "./components/UserCard/index";

const App = (props) => {
  const user = {
    id: 1,
    fname: "VLad",
    lname: "Korochanskiy",
  };
  return <UserCard user={user} setIsSelected={() => {}} />;
};

export default App;
