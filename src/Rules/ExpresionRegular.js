
export const ExpresionRegular = {
    correo: /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
    user: /^[a-z0-9_\\_\ü]+$/,
}

export default ExpresionRegular;
