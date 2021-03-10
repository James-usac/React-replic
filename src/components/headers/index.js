/* eslint-disable jsx-a11y/alt-text */
import React, {useState} from 'react'
import Headericon from '../headericon'
import './styles.css'
import Icons from '../../icons/icons'
//import netflix from '../../../src/netflix.svg
import {NavLink} from 'react-router-dom'
import { Button } from '@material-ui/core'

export const Headers = (props) => {
    var [collapse, setCollapse] = useState(false);
 
    const open_slider = (e) => {
        e.preventDefault();
        var a_header = document.getElementsByClassName("a_header");
        if(!collapse){
            for(let i=0; i<a_header.length; i++){
                a_header[i].style.display= "inline";
                a_header[i].classList.toggle("recto");
            }
        }else{
            for(let i=0; i<a_header.length; i++){
                a_header[i].style.display= "none";
            }
        }
        setCollapse(!collapse);  
    }

    

    return (
        <header className="first_header">
                <img className="logo" src='assets/netflix-logo.png'></img>
                <u className="u_header">
                    <li className="menu-trigger"><a className="active_header" href="/Banco"  onClick={open_slider}>Explorar</a><Headericon onclick={(e) =>console.log("entro")} Icon={Icons.ArrowDropIcon} ></Headericon></li>
                    <li><NavLink className="a_header"  to="/browse" activeClassName="active_header">Inicio</NavLink></li>
                    <li><NavLink className="a_header" exact to="/" activeClassName="active_header">Series</NavLink></li>
                    <li><NavLink className="a_header" exact to="/" activeClassName="active_header">Peliculas</NavLink></li>
                    <li><NavLink className="a_header" exact to="/" activeClassName="active_header">Novedades Populares</NavLink></li>
                    <li><NavLink className="a_header" exact to="/" activeClassName="active_header">Mi lista</NavLink></li>
                    
                </u>
                <div className="secundari_header">
                    <span className="hea_icon"><Headericon  Icon={Icons.SearchIcon}></Headericon></span>
                    <span className="hea_icon"><Headericon  Icon={Icons.RedeemIcon}></Headericon></span>
                    <Headericon  Icon={Icons.NotificationsIcon}></Headericon>
                    <Button
                        variant="contained" 
                        color="secondary">Logout
                    </Button>
                </div>
        </header>
    )
}

export default Headers

