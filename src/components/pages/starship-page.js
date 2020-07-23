import React, { useState } from 'react';
import {
    StarshipList,
    StarshipDetail,
    Columns,
    ErrorBoundry,
} from '..';

const StarshipPage = () => {
    return (
        <ErrorBoundry>
            <section className="choice mb-3">
                <h2 className="visually-hidden">Select your starship</h2>
                <div className="container">
                    <StarshipList clicked={(id) => console.log(id)}/>
                </div>
            </section>
        </ErrorBoundry>
    )
};

export default StarshipPage;