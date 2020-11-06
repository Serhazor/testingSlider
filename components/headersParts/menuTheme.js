import { deepPurple } from '@material-ui/core/colors';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette:{
      primary:{
        main:'rgba(0,0,0,0)'
      },
      secondary: {
        main: deepPurple[700]
      }
    }
});

export default function MenuTheme({children}){

    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    )
}