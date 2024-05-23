import React from "react";
import Header from "./Components/Header.jsx"
import Main from "./Components/Main.jsx"
import {createGlobalStyle} from "styled-components"

const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
`

function App() {
    return(
      <>
      <GlobalStyle/>
      <Header/>
      <Main/>
      </>
    )
}

export default App