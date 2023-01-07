import React from "react";
import { useDispatch } from "react-redux";
import { toggleTheme } from "../../redux/themeToggle/themeToggle.slice";

const ThemeToggler = () => {
  const dispatch = useDispatch();
  return <button onClick={() => dispatch(toggleTheme())}>THEME</button>;
};

export default ThemeToggler;
