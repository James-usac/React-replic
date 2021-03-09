/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import { Button, TextField } from "@material-ui/core";
import { createMuiTheme, makeStyles } from "@material-ui/core/styles";
import { green, purple } from "@material-ui/core/colors";


import "./styles.css";
import { useParams } from "react-router-dom";

const theme = createMuiTheme({
  palette: {
    primary: green,
  },
});

const useStyles = makeStyles({
  root: {
    color: theme.palette.getContrastText(purple[500]),
    height: 48,
  },
});

export const Signup = () => {
  let { correo } = useParams();
  const classes = useStyles();
  const [email, setEmail] = useState(correo);
  const [pass, setPass] = useState("");

  /*
  useEffect(() => {
    setTimeout(() => {
      setPass(correo)
      const elemento = document.getElementById("outlined-basic");
      elemento.defaultValue = pass;
    }, 2000);
  });*/

  return (
    <div>
      <header className="first_header3">
        <img
          className="logo"
          src={"assets/netflix-logo.png"}
          onClick={() => (window.location.href = "/")}
        ></img>
      </header>
      <div className="dad_signup">
        <div className="div_signup">
          <p>PASO 1 DE 3</p>
          <strong className="strong">
            ¡Hola de nuevo!
            <br />
            Suscribirte a Netflix es fácil.
          </strong>
          <form>
            <TextField
              error
              id="nombre"
              
              label="Email"
              variant="outlined"
              color="primary"
              fullWidth
              defaultValue={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            ></TextField>
            <p>Ingresa tu contraseña para comenzar a ver al instante</p>
            <TextField
              error
              id="outlined-basic"
              label="Ingrese tu contraseña"
              variant="outlined"
              type="password"
              fullWidth
              required
              onChange={(e) => setPass(e.target.value)}
            />
            <a href="/">¿Olvidaste tu contraseña?</a>
            <Button
              variant="contained"
              color="secondary"
              className={classes.root}
              fullWidth
              onClick={() => alert(email + " " + pass)}
              type="submit"
            >
              Continuar
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
