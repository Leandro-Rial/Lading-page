import React from "react";
import Miami from "../../../image/miami.jpg";
import Madrid from "../../../image/madrid.jpg";
import Roma from "../../../image/roma.jpg";
import Oferta from "../../../image/oferta.webp";
import Oferta2 from "../../../image/oferta-2.webp";
import Oferta3 from "../../../image/oferta-3.webp";

const Porque = () => {
  return (
      <div>
        <div className="porque">
        <div className="viajes">
            <h1>Podes Viajar a ...</h1>
            <div className="destino">
            <img src={Miami} alt="Miami" />
            <div className="contenido_destino">
                <h4>Vuelo + Alojamiento</h4>
                <h2>Miami</h2>
                <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio
                temporibus dignissimos eveniet, est pariatur recusandae obcaecati
                adipisci eum eaque officiis quae earum voluptate? Harum explicabo
                reiciendis ullam voluptate numquam laudantium!
                </p>
            </div>
            </div>
            <div className="destino2">
            <div className="contenido_destino">
                <h4>Vuelo + Alojamiento</h4>
                <h2>Madird</h2>
                <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio
                temporibus dignissimos eveniet, est pariatur recusandae obcaecati
                adipisci eum eaque officiis quae earum voluptate? Harum explicabo
                reiciendis ullam voluptate numquam laudantium!
                </p>
            </div>
            <img src={Madrid} alt="Madrid" />
            </div>
            <div className="destino">
            <img src={Roma} alt="Roma" />
            <div className="contenido_destino">
                <h4>Vuelo + Alojamiento</h4>
                <h2>Roma</h2>
                <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio
                temporibus dignissimos eveniet, est pariatur recusandae obcaecati
                adipisci eum eaque officiis quae earum voluptate? Harum explicabo
                reiciendis ullam voluptate numquam laudantium!
                </p>
            </div>
            </div>
        </div>
        </div>
        <div className="ofertas">
            <img className="img-oferta" src={Oferta} alt="oferta" />
            <img className="img-oferta2" src={Oferta2} alt="oferta2" />
            <img className="img-oferta3" src={Oferta3} alt="oferta3" />
        </div>
      </div>
  );
};

export default Porque;
