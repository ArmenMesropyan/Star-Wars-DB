import React, { useState, useEffect } from 'react';
import { SWApi } from '../../services';
import { Loading, Error } from '..';

const RandomPlanet = () => {
    const { getPlanetById } = new SWApi();
    const [planet, setPlanet] = useState(null);
    const [indicators, setIndicator] = useState({ loading: true, error: false });

    useEffect(() => {
        let timerID;

        const updatePlanet = async() => {
            try {
                const id = Math.floor((Math.random() * 25) + 2);
                const planet = await getPlanetById(id);
                setPlanet({...planet, id});
                timerID = setInterval(updatePlanet, 4000);
                setIndicator({ loading: false });
            } catch (error) {
                setIndicator({ error: true, loading: false })
            }
        }

        updatePlanet();
        
        return () => clearInterval(timerID);
    }, []);

    const { loading, error } = indicators;

    if (error) return <Error />;
    if (loading) return <Loading />;

    const { name, population, diameter, rotation_period, id } = planet;

    return (
        <section className="random-planet mt-3">
            <h2 className="visually-hidden">Random Planet</h2>
            <div className="container">
                <div className="card mb-3 col-md-6 col-sm-8 col-xs-12">
                    <h3 className="card-header">{ name }</h3>
                    <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt={ name }/>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Population - { population }</li>
                        <li className="list-group-item">Rotation Period - { rotation_period }</li>
                        <li className="list-group-item">Diameter - { diameter }</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default RandomPlanet;