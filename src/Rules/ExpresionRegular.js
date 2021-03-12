
export const ExpresionRegular = {
    // eslint-disable-next-line no-useless-escape
    correo: /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
    // eslint-disable-next-line no-useless-escape
    user: /^[a-z0-9_\\_\ü]+$/,
}

export default ExpresionRegular;
