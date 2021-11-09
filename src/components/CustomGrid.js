import React from 'react'
import CustomBttn from './CustomBttn'
import {Typography} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import { mergeClasses } from '@material-ui/styles'
import { ScatterPlot } from '@material-ui/icons'


const styles = makeStyles({
    wrapper : {
        display : 'flex', 
        flexDirection: 'column', 
        alignItems : 'center', 
        padding : '0 4rem 0 4rem'
    }, 
    item : {
        paddingTop : '1rem',
    }, 
})

function CustomGrid(props) {
    const {icon, title, btnTitle} = props;
    const classes = styles();
    return (
        <div className = {classes.wrapper}>
            <div className = {classes.item}>{icon}</div>
            <Typography className = {classes.title} variant = 'h5'>{title}</Typography>
            <div className = {classes.item}>
                <CustomBttn text = {btnTitle}/>
            </div>
        </div>
        
    )
}

export default CustomGrid
