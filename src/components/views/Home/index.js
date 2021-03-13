/* eslint-disable jsx-a11y/alt-text */
import { Button, TextField } from "@material-ui/core";
import React, { useState } from "react";
import Icons from "../../../icons/icons";
import Headericon from "../../headericon";
import Navbar from "../../Navbar";
import "./styles.css";

export const Home = () => {
  const [email, setEmail] = useState("");
  return (
    <div className="first_home">
      <Navbar>
        <div className="home_izquierda">
          <Button
            variant="contained"
            color="secondary"
            onClick={() => (window.location.href = "/login")}
          >
            Iniciar Sesion
          </Button>
        </div>
      </Navbar>
      <div className="dad_signup">
          <div className="div_signup home_texto">
            <h1>
              Películas y series ilimitadas <br />
              mucho más.
            </h1>
            <h2>Disfruta donde quieras. Cancela cuando quieras.</h2>
            <h3>
              ¿Quieres ver Netflix ya? Ingresa tu email para crear una cuenta o
              reiniciar tu membresía de Netflix.
              <br />
            </h3>
            <div className="home_flex">
              <div className="home_menor">
                <TextField
                  id="emails"
                  label="Email"
                  variant="filled"
                  color="primary"
                  className="temporal_home"
                  fullWidth
                  onChange={(e) => setEmail(e.target.value)}
                ></TextField>
              </div>
              <Button
                variant="contained"
                color="secondary"
                endIcon={
                  <span className="hea_icon">
                    <Headericon Icon={Icons.ArrowBoardIcon}></Headericon>
                  </span>
                }
                onClick={() => window.location.href=`/signup/${email}` }
              >
                Comenzar
              </Button>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Home;
