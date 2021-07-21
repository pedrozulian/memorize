import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import './App.css';
import Home from './pages/Home';
import { createTheme, ThemeProvider } from '@material-ui/core';
import { lightBlue, pink } from '@material-ui/core/colors';

const theme = createTheme({
  palette: {
    primary: lightBlue,
    secondary: pink,
  }
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
