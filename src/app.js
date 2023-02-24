import React from "react";
import Header from "./components/header";
import "./style.css";
import Tenzies from "./components/tenzies";

export default function App() {
  let [isDark, setIsDark] = React.useState(false);

  function changeTheme() {
    setIsDark((prevTheme) => !prevTheme);
  }
  return (
    <div>
      <Header toggler={changeTheme} isDark={isDark} />
      <Tenzies isDark={isDark} />
    </div>
  );
}
