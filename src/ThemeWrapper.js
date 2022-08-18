import React, {useState} from "react"

export const themes = {
  light: {
    background: 'gray',
    color: 'black',
    buttonColor: 'green'
  },
  dark: {
    background: 'black',
    color: 'white',
    buttonColor: 'purple'
  },
}

export const ThemeContext = React.createContext({
  theme: themes.light
})

export const ThemeWrapper = ({children}) => {
  const [theme, setTheme] = useState(themes.light)
  const toggleTheme = () => setTheme(theme === themes.light ? themes.dark : themes.light)

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  )
}
