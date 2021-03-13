/* eslint-disable jsx-a11y/alt-text */
import {  Grid, Typography } from '@material-ui/core';
import React from 'react'
import './style.css'

export const FaceBox = ({title, src}) => {

    return (
        <Grid  
        container
        justify="center"
        alignItems="center"
        direction="column"
       
       >
            {src && <Grid item>
                <img 
                    src={src.src} 
                    alt={src.title}
                    height='136px'
                    className="facebox"/></Grid>}
            {title && 
                <Grid item>
                    <Typography 
                        variant="h5"
                        style={{color:"rgb(229, 229, 229)"}}
                    >{title}</Typography>
                </Grid>}  
        </Grid>
    )
}

export default FaceBox;