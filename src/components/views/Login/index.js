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
  InputAdornment,
  IconButton,
} from "@material-ui/core";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import ExpresionRegular from "../../../Rules/ExpresionRegular";
import useAuth from "../../../auth/useAuth";
import { useHistory, useLocation } from "react-router";
import { Visibility, VisibilityOff } from "@material-ui/icons";

export const usuarios = [
  {
    id: 1,
    user: "Naruto",
    email: "naruto@gmail.com",
    pass: "1234",
  },
  {
    id: 2,
    user: "Sasuke",
    email: "sasuke@gmail.com",
    pass: "1234",
  },
];

export const Login = () => {
  const [email, setEmail] = useState("");
  const [erroremail, setErrorEmail] = useState(false);
  const [leyendaemail, setLeyendaEmail] = useState("");
  const [remember, setRemember] = useState(false);
  const [pass, setPass] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errorpass, setErrorPass] = useState({
    error: false,
    leyenda: "",
  });

  const auth = useAuth();
  let history = useHistory();
  let location = useLocation();
  const url = location.state?.from;

  const handleSubmit = (evt) => {
    evt.preventDefault();
    var result = ExpresionRegular.correo.test(email);
    if (!result) {
      setErrorEmail(true);
      setLeyendaEmail("El email es incorrecto");
    } else {
      const validate = door_login(email, pass);
      setPass("");
      if (validate) {
        auth.login();
        history.push(url || "/browse");
      }else{
        setErrorPass({error: true, leyenda: 'Credenciales incorrectos'})
      }
    }
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const door_login = (email, pass) => {
    let flat = false;
    usuarios.forEach((elemento) => {
      if (email === elemento.email && pass === elemento.pass) {
        flat = true;
      }
    });
    return flat;
  };

  return (
    <div>
      <header className="first_header3">
        <img
          className="logo"
          src={"assets/netflix-logo.png"}
          onClick={() => (window.location.href = "/")}
        ></img>
      </header>
      <Container component="main" maxWidth="xs" variant="outlined">
        <form onSubmit={handleSubmit}>
          <Card variant="outlined">
            <CardContent>
              <Box my={2}>
                <Typography variant="h2">Inicia sesión</Typography>
              </Box>
              <Box my={2}>
                <TextField
                  error={erroremail}
                  name="id_email"
                  variant="outlined"
                  required
                  fullWidth
                  id="id_email"
                  label="Email o numero de telefono"
                  color="secondary"
                  helperText={leyendaemail}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (erroremail) {
                      const evaluar = ExpresionRegular.correo.test(email);
                      if (evaluar) {
                        setLeyendaEmail("");
                        setErrorEmail(false);
                      }
                    }
                  }}
                />
              </Box>
              <Box my={2}>
                <TextField
                  type={showPassword ? "text" : "password"}
                  name="id_cont"
                  variant="outlined"
                  required
                  fullWidth
                  id="id_cont"
                  label="Contraseña"
                  color="secondary"
                  value={pass}
                  onChange={(e) => { 
                    setPass(e.target.value);
                    setErrorPass({error: false, leyenda: ''})
                   }}
                  error={errorpass.error}
                  helperText={errorpass.leyenda}
                  endadornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={(e) => setShowPassword(!showPassword)}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  }
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
                  <NavLink className="a_header lo_a" to="/">
                    ¿Necesitas Ayuda?
                  </NavLink>
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
