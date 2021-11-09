import { createTheme , ThemeProvider, makeStyles } from '@material-ui/core/styles'
import './App.css'
import NavBar from './components/NavBar'
import CustomGrid from './components/CustomGrid'

// Icons 

import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import AppleIcon from '@material-ui/icons/Apple';
import SecurityIcon from '@material-ui/icons/Security';
import { Typography } from '@material-ui/core';

const theme = createTheme({
  palette: {
    primary: {
      main:"#21323E",
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
      lineHeight: '2re',
      },
    h5: {
      fontWeight: 100,
      lineHeight: '2re',
    },
  },
});

const styles = makeStyles({
  wrapper: {
    width: "65%",
    margin: "auto",
    textAlign: "center", 
    marginTop: "2re", 
  },
  bigSpace: {
    marginTop: "4rem"
  },
  littleSpace:{
    marginTop: "2.9rem",
  },
  grid:{
    display: 'flex', 
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap", 
  },
  footer:{
    marginTop: '8rem', 
    marginBottom: '2rem', 
    borderTopStyle: 'solid',
    borderTopColor: '#000',
    borderTopWidth: '2px',
  },
})

function App() {
  const classes = styles()
  return (
    <div className="App">
      <ThemeProvider theme = {theme}>
        <NavBar/>
        <div className = {classes.wrapper}>
          <Typography variant = 'h4' className = {classes.bigSpace} color = 'primary'>
            At Rocket.io we are passionate about Software
          </Typography>
          <Typography variant = 'h5' className = {classes.littleSpace} color = 'primary'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sodales congue tristique. Cras non pretium sem. Duis interdum lorem sit amet ligula pretium, sed rutrum urna semper. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus egestas gravida ullamcorper.
          </Typography>
        </div>
        <div className = {`${classes.grid} ${classes.bigSpace}`}>
          <CustomGrid icon = {<SecurityIcon style={{fill: "#4360A6", fontSize: '9rem'}}/>} title = {'Security'} btnTitle = {'Learn More'}/>
          <CustomGrid icon = {<AccountBalanceIcon style = {{fill: '#439288', fontSize: '9rem'}}/>} title = {'Banking'} btnTitle = {'Learn More'}/>
          <CustomGrid icon = {<AddAPhotoIcon style = {{fill: '#E7575A', fontSize: '9rem'}}/>} title = {'Picture'} btnTitle = {'Learn More'}/>
        </div>
        <div className = {`${classes.grid} ${classes.littleSpace}`}>
          <CustomGrid icon = {<AppleIcon style = {{fill: '#95B487', fontSize: '9rem'}}/>} title = {'Technology'} btnTitle = {'Learn More'}/>
          <CustomGrid icon = {<AccountBalanceIcon style = {{fill: '#439288', fontSize: '9rem'}}/>} title = {'Banking'} btnTitle = {'Learn More'}/>
          <CustomGrid icon = {<AddAPhotoIcon style = {{fill: '#E7575A', fontSize: '9rem'}}/>} title = {'Picture'} btnTitle = {'Learn More'}/>
        </div>
        <div className = {classes.footer}>
          <NavBar/>
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
