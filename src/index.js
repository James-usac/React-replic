import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/blue';
  
const theme = createMuiTheme({
  palette: {
    secondary:  {
      light: 'rgb(246, 18, 29)',
      main: 'rgb(246, 18, 29)',
      // dark: will be calculated from palette.secondary.main,
      contrastText: 'white',
      color: 'white',
    },
    primary: red,
  },
});


ReactDOM.render(
 
    <React.StrictMode>
       <ThemeProvider theme={theme}>
      <App />
      </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

serviceWorker.unregister();
