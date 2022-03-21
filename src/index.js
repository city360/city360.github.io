import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Route, Routes} from "react-router-dom";
import PublishProject from "./pages/project/PublishProject";
import ViewProject from "./pages/view/ViewProject";
import NavBar from "./components/NavBar";
import {Container, createTheme} from "@mui/material";
import {green} from "@mui/material/colors";
import {ThemeProvider} from "@emotion/react";
import Home from "./pages/home/Home";
import Models from "./pages/model/Models";
import Map from "./pages/contact/Map"
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
            {/*<div style={{marginTop:40}}>*/}
            <div>
              <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="publish-project" element={<PublishProject model_path='models/charge/' model_name='167'/>}/>
                <Route path="view-project" element={<ViewProject/>}/>
                <Route path="contact-us" element={<Map/>}/>
                <Route path="models" element={<Models/>}/>
              </Routes>
            </div>
          </Suspense>
        </HashRouter>
      </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
