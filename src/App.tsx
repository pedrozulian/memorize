import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import './App.css';
import Home from './pages/Home/index';
import { createTheme, ThemeProvider } from '@material-ui/core';
import { lightBlue, pink, red, yellow } from '@material-ui/core/colors';

const theme = createTheme({
  palette: {
    primary: lightBlue,
    secondary: pink,
    warning: yellow,
    error: red
  },
  spacing: value => value * 16,
});



function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className="App">
          <Switch>
            <Route path="/" component={Home}></Route>
          </Switch>
        </div>
      </Router>
    </ThemeProvider>
    );
}

export default App;
