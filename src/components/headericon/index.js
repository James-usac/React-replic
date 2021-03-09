import React from 'react'
import './styles.css'

const Headericon = ({Icon}) => {
    return (
        <div className="header__icon">
            {Icon && 
                <div className="header_box">
                    <Icon style={{ fontSize: 24 }}/>
                </div>
            }
        </div>  
    )                           
}

export default Headericon;



