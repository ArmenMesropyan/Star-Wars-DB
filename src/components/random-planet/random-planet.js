import React from 'react';

const RandomPlanet = () => (
    <section className="random-planet mt-3">
        <h2 className="visually-hidden">Random Planet</h2>
        <div className="container">
            <div class="card mb-3">
                <h3 class="card-header">Planet Name</h3>
                <img src="https://qph.fs.quoracdn.net/main-qimg-3bf24a3f768cfa80261311670fe1d358" alt="Planet Name"/>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Population - 10000000</li>
                    <li class="list-group-item">Rotation Period - 26</li>
                    <li class="list-group-item">Diameter - 12120</li>
                </ul>
            </div>
        </div>
    </section>
)

export default RandomPlanet;