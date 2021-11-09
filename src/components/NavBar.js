import React from 'react'
import CustomBttn from './CustomBttn'
import logo from '../ReactAssets/logo.svg'
import logoMobile from '../ReactAssets/logoMobile.svg'
import {Toolbar, Typography} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'

const styles = makeStyles({
    bar : {
        paddingTop : '1.15rem', 
        backgroundColor : '#fff', 
        ['@media (max-width: 780px)'] : {
            flexdirection : 'column'
        }
    }, 
    logo: {
        width: "15%", 
        ['@media (max-width:780px)']: { 
           display: "none"
           }
    },
    logoMobile:{
        width: "100%", 
        display: "none", 
        ['@media (max-width:780px)']: { 
            display: "inline-block"
            }
    },
    menuItem: {
        cursor: "pointer", 
        flexGrow: 1,
        '&:hover': {
            color: '#581894'
        },
        ['@media (max-width:780px)']: { 
            paddingBottom: "1rem"    },
    }, 
})

function NavBar() {
    const classes = styles()
    return (
        <Toolbar position = 'sticky' color = 'rgba(0 ,0 ,0 ,0.87)' className = {classes.bar}>
                <img src = {logo} className = {classes.logo}/>
                <img src = {logoMobile} className = {classes.logoMobile}/>

                <Typography variant = 'h6' className = {classes.menuItem}>
                    About
                </Typography>

                <Typography variant = 'h6' className = {classes.menuItem}>
                    Career
                </Typography>
                
                <Typography variant = 'h6' className = {classes.menuItem}>
                    Demos
                </Typography>
                
                <Typography variant = 'h6' className = {classes.menuItem}>
                    Locations
                </Typography>
                <CustomBttn text = 'Log In'/>
            </Toolbar>
    )
}

export default NavBar
