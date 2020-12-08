import React from 'react';
 import {ThemeProvider as StyledThemeProvider} from 'styled-components';
//styled component theme with colors/typing
import theme from '../../shared/theme';
//import globalStyle of styled components
import GlobalStyle from '../../shared/theme/GlobalStyle';
//Material ui Theme 
import UITheme from '../../shared/theme/MaterialStyles';
import { ThemeProvider } from '@material-ui/core/styles';

import Main from './Main';

import {BrowserRouter} from 'react-router-dom';

const App:React.FC = () => {
    return (
    <BrowserRouter>
        <StyledThemeProvider theme={theme}>
            <GlobalStyle />
            <ThemeProvider theme={UITheme}>          
                <Main /> 
            </ThemeProvider>
        </StyledThemeProvider>
     </BrowserRouter> 
    );
}


export default App;