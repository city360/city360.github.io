import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Route, Routes} from "react-router-dom";
import PublishProject from "./pages/PublishProject";
import ViewProject from "./pages/ViewProject";
import NavBar from "./components/NavBar";
import {createTheme} from "@mui/material";
import {green} from "@mui/material/colors";
import {ThemeProvider} from "@emotion/react";
import Home from "./pages/Home";
import Models from "./pages/Models";
import Map from "./pages/Map"
import {Suspense} from "react";

const theme = createTheme({
  palette: {
    primary: {
      main: '#e1bee7',
    },
    secondary: {
      main: green[500],
    },
  },
});

ReactDOM.render(
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <HashRouter>
          <Suspense fallback={null}>
            <NavBar/>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="publish-project" element={<PublishProject model_path='moxing/charge/' model_name='167'/>}/>
              <Route path="view-project" element={<ViewProject/>}/>
              <Route path="contact-us" element={<Map/>}/>
              <Route path="models" element={<Models/>}/>
            </Routes>
          </Suspense>
        </HashRouter>
      </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
