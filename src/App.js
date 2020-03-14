import React, { Fragment, useState, useEffect } from "react";
import Formulario from "./components/Formulario";
import Letra from "./components/Letra";
import Info from "./components/Info";
import axios from "axios";
function App() {
  const [busqueda, setBusqueda] = useState({});
  const [letra, setLetra] = useState("");
  const [info, setInfo] = useState({});
  useEffect(() => {
    if (Object.keys(busqueda).length === 0) return;
    const consultarApi = async () => {
      const url = `https://api.lyrics.ovh/v1/${busqueda.artista}/${busqueda.cancion}`;
      const url2 = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${busqueda.artista}`;
      const [resultado, info] = await Promise.all([
        axios.get(url),
        axios.get(url2)
      ]);
      setLetra(resultado.data.lyrics);
      setInfo(info.data.artists[0]);
    };
    consultarApi();
  }, [busqueda, info]);
  return (
    <Fragment>
      <Formulario setBusqueda={setBusqueda} />
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <Info info={info} />
          </div>
          <div className="col-md-6">
            <Letra cancion={letra} />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
