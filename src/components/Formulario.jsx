import React, { useState } from "react";
import Error from "./Error";

const Formulario = ({setBusqueda}) => {
  const [error, setError] = useState(false);

  const [filtro, setFiltro] = useState({
    artista: "",
    cancion: ""
  });

  const { artista, cancion } = filtro;

  const changeHandler = e => {
    setFiltro({ ...filtro, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();
    if(artista===''||cancion==='') {
        setError(true);
        return;
    }
    setError(false);
    setBusqueda(filtro);
  };

  return (
    <div className="bg-info">
      <div className="container">
        {error ? <Error mensaje="Completar todos los campos"/>:null}
        <div className="row">
          <form
            className="col card text-white bg-transparent mb-5 pt-5 pb-2"
            onSubmit={onSubmit}
          >
            <fieldset>
              <legend className="text-center">Buscador de letras</legend>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Artista</label>
                    <input
                      type="text"
                      className="form-control"
                      name="artista"
                      placeholder="Nombre Artista"
                      onChange={changeHandler}
                      value={artista}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Canción</label>
                    <input
                      type="text"
                      className="form-control"
                      name="cancion"
                      placeholder="Cancion"
                      onChange={changeHandler}
                      value={cancion}
                    />
                  </div>
                </div>
              </div>
              <button type="submit" className="btn btn-primary float-right">
                Buscar
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Formulario;
