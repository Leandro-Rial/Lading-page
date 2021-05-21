import React from "react";

const Que = () => {
  return (
    <div className="que">
      <div className="que-parte-one">
        <h1>
          Hace <strong className="negrita">volar</strong> tu cabeza con estas{" "}
          <strong className="negrita">ofertas</strong>
        </h1>
        <h4>
          Vola con AIR ARG y aprovecha de estas{" "}
          <strong className="negrita">increibles ofertas</strong>. Recorre el
          mundo con con tu aerolinea preferida.
        </h4>
        <button>Comenzar</button>
      </div>
      <div className="que-parte-two">
        <h1>Completa los datos</h1>
        <form>
          <div className="rows">
            <label htmlFor="Nombre">Nombre</label>
            <input type="text" />
          </div>
          <div className="rows">
            <label htmlFor="Email">Email</label>
            <input type="email" />
          </div>
          <div className="rows">
            <label htmlFor="Numero">Numero de Celular</label>
            <input type="number" />
          </div>
          <button>Enviar</button>
        </form>
      </div>
    </div>
  );
};

export default Que;
