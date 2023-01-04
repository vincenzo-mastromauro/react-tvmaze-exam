import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store";
import ThemeToggler from "./components/themeToggler/themeToggler";

import "./App.css";

function App() {
  const themeColor = useSelector((state: RootState) => {
    return state.theme.themeColor;
  });

  return (
    <div className={`${themeColor ? "lightTheme" : "darkTheme"}`}>
      <ThemeToggler />
      <h1>test</h1>
    </div>
  );
}

export default App;
