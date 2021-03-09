import React from "react";
import Icons from "../../icons/icons";
import Headericon from "../headericon";
import "./styles.css";

export const Footer = () => {
  return (
    <div className="first-footer">
      <div className="social-footer">
        <span className="tea_icon">
          <Headericon Icon={Icons.FacebookIcon}></Headericon>
        </span>
        <span className="tea_icon">
          <Headericon Icon={Icons.InstagramIcon}></Headericon>
        </span>
        <span className="tea_icon">
          <Headericon Icon={Icons.TwitterIcon}></Headericon>
        </span>
        <span className="tea_icon">
          <Headericon Icon={Icons.YoutubeIcon}></Headericon>
        </span>
      </div>
      <ul className="member-footer-links">
        <li className="footer_li">Audio y subtítulos</li>
        <li className="footer_li">Audio descriptivo</li>
        <li className="footer_li">Centro de ayuda</li>
        <li className="footer_li">Tarjetas de regalo</li>
        <li className="footer_li">Prensa</li>
        <li className="footer_li">Relaciones con inversionistas</li>
        <li className="footer_li">Empleo</li>
        <li className="footer_li">Términos de uso</li>
        <li className="footer_li">Privacidad</li>
        <li className="footer_li">Avisos legales</li>
        <li className="footer_li">Preferencias de cookies</li>
        <li className="footer_li">Contáctanos</li>
      </ul>
    </div>
  );
};

export default Footer;
