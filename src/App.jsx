import { useState } from "react";
import { ThemeProvider } from "styled-components";
import Router from "@/router";
import THEME, { GlobalStyle } from "@/util/theme";
import AppContext from "@/util/context";

const App = () => {
  const [data, setData] = useState({
    user: null,
    plan: null,
  });

  const updateData = (currentData) => {
    setData((prevData) => ({
      ...prevData,
      ...currentData,
    }));
  };

  return (
    <div className="App">
      <GlobalStyle />
      <ThemeProvider theme={THEME}>
        <AppContext.Provider value={{ data, updateData }}>
          <Router />
        </AppContext.Provider>
      </ThemeProvider>
    </div>
  );
};

export default App;
