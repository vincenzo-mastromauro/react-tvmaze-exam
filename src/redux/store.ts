import { configureStore } from "@reduxjs/toolkit";
import ThemeReducer from "./themeToggle/themeToggle.slice";

export const store = configureStore({
  reducer: {
    theme: ThemeReducer,
  },
});

//specifico un tipo di nome Rootstate gli assegno il valore del ReturnType
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
