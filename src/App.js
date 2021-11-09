import logo from './logo.svg';
import './App.css';
import { createTheme , ThemeProvider } from '@material-ui/core/styles';

const theme = createTheme({
  
})

function App() {
  return (
    <div className="App">
      <ThemeProvider theme = {theme}>
      </ThemeProvider>
      <header className="App-header">
        Hello There
      </header>
    </div>
  );
}

export default App;
