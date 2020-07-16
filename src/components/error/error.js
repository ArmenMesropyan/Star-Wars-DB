import React from 'react';

const Error = () => (
    <section className="error-indicator mt-4 mb-4 text-center">
        <div className="container card p-3">
            <h2 className="error-indicator__title">Error!</h2>
            <p className="error-indicator__text">
                Something has gone terribly wrong.
            </p>
        </div>
    </section>
);

export default Error;