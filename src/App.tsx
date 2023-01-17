import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { setDarkTheme, setLightTheme, toggleTheme } from "./redux/features/theme/themeSlice";
import { useEffect } from "react";
import useLocalStorage from "./services/browser/useLocalStorage";
import AppRoutes from "./routes/Routes";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  const dispatch = useAppDispatch();
  const theme = useAppSelector((state) => state?.theme?.theme)
  const [appTheme] = useLocalStorage('app-theme')

  const themeHandler = () => {
    dispatch(toggleTheme())
  }

  useEffect(() => {
    if (appTheme == 'dark') {
      dispatch(setDarkTheme())
    } else {
      dispatch(setLightTheme())
    }
  }, [])

  useEffect(() => {
    if (theme === 'dark') {
      document.body.classList.remove("light")
      document.body.classList.add("dark")
    } else {
      document.body.classList.remove("dark")
      document.body.classList.add("light")
    }
  }, [theme])

  return (
    <>
      <Navbar />
      <AppRoutes />
    </>
  );
}

export default App;
