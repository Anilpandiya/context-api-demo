import { createContext, useContext } from 'react';

const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee"
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222"
  }
};

const ThemeContext = createContext(themes.light);  //1. Creating a context
ThemeContext.displayName = "Theme";

const UserNameContext = createContext();
UserNameContext.displayName = "User";

//2. Providing context
function App() {
  return (
    <div>
      <ThemeContext.Provider value={themes.dark}> 
        <Toolbar />
      </ThemeContext.Provider>
      <ThemeContext.Provider value={themes.light}> 
        <Toolbar />
      </ThemeContext.Provider>
    </div>
  );
}

function Toolbar(props) {
  return (
    <div>
      <UserNameContext.Provider value={'Jacob'}>
        <ThemedButton />
      </UserNameContext.Provider>
    </div>
  );
}

//3. consumption of context
function ThemedButton() {
  const theme = useContext(ThemeContext); 
  const userName = useContext(UserNameContext);
  return (
    <button style={{ background: theme.background, color: theme.foreground }}>
      I am styled by theme context! {userName}
    </button>
  );
}

export default App;
