import { createSlice } from '@reduxjs/toolkit'
import useLocalStorage from '../../../services/browser/useLocalStorage'


interface themeState {
  theme: 'light' | 'dark'
}

const initialState: themeState = {
  theme: 'light',
}

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.theme = (state.theme === 'dark') ? 'light' : 'dark';
      localStorage.setItem('app-theme',state.theme)
    },
    setDarkTheme: (state) => {
      state.theme = 'dark';
      localStorage.setItem('app-theme','dark')
    },
    setLightTheme: (state) => {
      state.theme = 'light';
      localStorage.setItem('app-theme','light')
    }
  }
})

export const { toggleTheme, setDarkTheme, setLightTheme } = themeSlice.actions;

export default themeSlice.reducer;