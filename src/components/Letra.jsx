import React, { Fragment } from "react";

const Letra = ({ cancion }) => {
  if (cancion.lenght === 0 || cancion === '' ) return null;
  
  return (
    <Fragment>
      <h2>Letra</h2>
      <p className="letra">{cancion}</p>
    </Fragment>
  );
};

export default Letra;
