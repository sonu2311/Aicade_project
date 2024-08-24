import Example1 from './example1';
import Example2 from './example2';
import Example3 from './example3';
import {Routes, Route, HashRouter} from "react-router-dom"
import { ThemeProvider } from '@mui/material/styles';
import React from 'react';
import Main from './main';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#0e15ff', 
    },
  },
});

function MainFunc() {
  return (
    <ThemeProvider theme={theme}>
      <HashRouter>
        <Routes>
          <Route >
            <Route path="/" element={<Main />} />
            <Route path="/example1" element={<Example1 />} />
            <Route path="/example2" element={<Example2 />} />
            <Route path="/example3" element={<Example3 />} />
            <Route path="/main" element={<Main />} />
            <Route path="*" element={<h1>Invalid</h1>} />
          </Route>
        </Routes>
      </HashRouter>
    </ThemeProvider>);
}

export default MainFunc;
