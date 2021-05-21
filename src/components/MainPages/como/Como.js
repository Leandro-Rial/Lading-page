import React from 'react';
import aa from '../../../image/aa.png';
import aaa from '../../../image/aaa.png';
import aFrance from '../../../image/airfrance.png';
import latam from '../../../image/latam-logo_.png';
import nueva from '../../../image/nueva.png';

const Como = () => {
    return (
        <div>
            <div className="como">
                <div className="como-funciona">
                    <i className="fas fa-plane-departure"></i>
                    <h1>¿Como funciona?</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita unde illum voluptatibus?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita unde illum voluptatibus?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita unde illum voluptatibus?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita unde illum voluptatibus?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita unde illum voluptatibus?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita unde illum voluptatibus?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita unde illum voluptatibus?</p>
                </div>
                <div className="precios">
                    <div className="precios-ofertas">
                        <i className="fas fa-dollar-sign"></i>
                        <h1>Millas</h1>
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsum dolor sit amet.</p>
                        <h4>Precio: <strong>$ Millas</strong></h4>
                    </div>
                    <div className="precios-ofertas">
                        <i className="fas fa-dollar-sign"></i>
                        <h1>Viaje y Alojamiento</h1>
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsum dolor sit amet.</p>
                        <h4>Precio: <strong>$ 25000</strong></h4>
                    </div>
                    <div className="precios-ofertas">
                        <i className="fas fa-dollar-sign"></i>
                        <h1>Vuelo y Auto</h1>
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsum dolor sit amet.</p>
                        <h4>Precio: <strong>$ 30000</strong></h4>
                    </div>
                </div>
                <div className="empresas">
                    <h1>Estas empresas confian en nosotros</h1>
                    <div className="brands">
                        <img src={aa} alt="American" />
                        <img src={aaa} alt="Argentina" />
                        <img src={aFrance} alt="France" />
                        <img src={latam} alt="Latam" />
                        <img src={nueva} alt="nueva" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Como
