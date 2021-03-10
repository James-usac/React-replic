/* eslint-disable jsx-a11y/alt-text */
import {
  Container,
  CardContent,
  TextField,
  Button,
  Grid,
  Checkbox,
  FormControlLabel,
  Card,
  Box,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import { NavLink} from "react-router-dom";
import { Redirect} from 'react-router';
import { makeStyles} from '@material-ui/core/styles';
import ExpresionRegular from "../../../Rules/ExpresionRegular";
import useAuth from "../../../auth/useAuth";
import { render } from "@testing-library/react";
import { useHistory } from "react-router"



const useStyles = makeStyles((theme) => ({
    form: {
      backgroundColor:"white",
      color:"red"
    },
  }));


//style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)'}}
export const Login = () => {
  const [email, setEmail] = useState('');
  const [erroremail, setErrorEmail] = useState(false);
  const [leyendaemail, setLeyendaEmail] = useState('');

  const [remember, setRemember] = useState(false);
  const classes = useStyles();  
  const auth = useAuth();
  let history = useHistory();
const handleSubmit = (evt) => {

    evt.preventDefault();
    var result = ExpresionRegular.correo.test(email);
    if(!result){
      setErrorEmail(true);
      setLeyendaEmail('El email es incorrecto')
    }else{
     
      auth.login();
     // window.location.href='/browse'
     history.push("/browse")
     // 
    }
}



  return (
    <div>
      <header className="first_header3">
        <img
          className="logo"
          src={"assets/netflix-logo.png"}
          onClick={() => (window.location.href = "/")}
        ></img>
      </header>
      <Container component="main" maxWidth="xs" variant="outlined" >
        <form onSubmit={handleSubmit}>
          <Card variant="outlined">
            <CardContent >
              <Box my={2} >
                <Typography variant="h2">Inicia sesión</Typography>
              </Box>
              <Box my={2} >
                <TextField
                  error={erroremail}
                  name="id_email"
                  variant="outlined"
                  required
                  fullWidth
                  id="firstName"
                  label="Email o numero de telefono"
                  color="secondary"
                  helperText={leyendaemail}
                  onChange={(e) =>{
                    setEmail(e.target.value);
                    if(erroremail){
                      const evaluar = ExpresionRegular.correo.test(email);
                      if(evaluar){
                        setLeyendaEmail('');
                        setErrorEmail(false)
                      }
                    }
                  }}
                />
              </Box>
              <Box my={2}>
                <TextField
                  type="password"
                  name="id_cont"
                  variant="outlined"
                  required
                  fullWidth
                  id="firstName"
                  label="Contraseña"
                  color="secondary"
                />
              </Box>
              <Box my={2}>
                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  color="secondary"
                  id="btt_iniciarSeccion"
                >
                  Iniciar Secciòn
                </Button>
              </Box>
              <Grid container>
                <Grid item xs={8}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={remember}
                        onChange={() => setRemember(!remember)}
                        name="checkedB"
                        color="primary"
                      />
                    }
                    label="Recordarme"
                  />
                </Grid>
                <Grid item xs={4}>
                  <NavLink className="a_header lo_a" to="/">¿Necesitas Ayuda?</NavLink>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </form>
      </Container>
    </div>
  );
};

export default Login;
