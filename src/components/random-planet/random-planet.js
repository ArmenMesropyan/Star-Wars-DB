import React, { useState, useEffect } from 'react';
import { SWApi } from '../../services';

const RandomPlanet = () => {
    const { getPlanetById } = new SWApi();
    const [planet, setPlanet] = useState({});
    console.log('planet: ', planet);

    useEffect(() => {
        const updatePlanet = async() => {
            const id = Math.floor(Math.random() * 25 + 2);
            console.log('id: ', id);
            const planet = await getPlanetById(id);
            setPlanet({...planet, id});
        }

        updatePlanet();

        const timerID = setInterval(updatePlanet, 2000);

        return () => clearInterval(timerID);
    }, []);

    return (
        <section className="random-planet mt-3">
            <h2 className="visually-hidden">Random Planet</h2>
            <div className="container">
                <div className="card mb-3 col-md-6 col-sm-8 col-xs-12">
                    <h3 className="card-header">Planet Name</h3>
                    <img src="https://qph.fs.quoracdn.net/main-qimg-3bf24a3f768cfa80261311670fe1d358" alt="Planet Name"/>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Population - 10000000</li>
                        <li className="list-group-item">Rotation Period - 26</li>
                        <li className="list-group-item">Diameter - 12120</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default RandomPlanet;