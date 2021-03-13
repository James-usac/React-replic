import { Container, Grid, Typography } from '@material-ui/core'
import React from 'react'
import Face from '../../../assets/face/Face'

import FaceBox from '../../FaceBox'
import Navbar from '../../Navbar'

const user_view = [
    { 
        title: 'James',
        src: Face.yellow
    },
    { 
        title: 'Jeff',
        src: Face.blue
    },
    { 
        title: 'Familia',
        src: Face.money
    },
]

export const Start = () => {
    return (
        <div style={{background:'black'}}>
        <Navbar/>
        <Container maxWidth="lg" style={{ height: '100vh'}}>
            <Grid style={{minHeight: "12%"}}/>
             <Grid 
                container
                spacing={4}
                justify="center"
                >
                <Grid item>
                    <Typography variant="h3" 
                     style={{color:"white", marginBottom:"0.5em"}}>¿Quien esta viendo ahora?</Typography>
                </Grid> 
            </Grid>
            <Grid container justify="center">
                {user_view.map(elemento => (
                    <Grid item xs={6} lg={2}>        
                        <FaceBox title={elemento.title} src={elemento.src}></FaceBox>
                    </Grid> 
                ))}
            </Grid>
        </Container>
        </div>
    )
}

export default Start;