import { createTheme , ThemeProvider } from '@material-ui/core/styles';
import './App.css';
import CustomBttn from './components/CustomBttn';
import NavBar from './components/NavBar';


const theme = createTheme({
  palette: {
    primary: {
      main:"#42a5f5",
    },
    secondary: {
      main:"#c7d8ed",
    },
  },
  typography: {
    fontFamily: [
      'Roboto'
    ],
    h4: {
      fontWeight: 600,
      fontSize: 28,
      lineHeight: '2rem',
      },
    h5: {
      fontWeight: 100,
      lineHeight: '2rem',
    },
  },
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme = {theme}>
        <NavBar/>
      </ThemeProvider>
    </div>
  );
}

export default App;
