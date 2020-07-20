import React, { useState } from 'react';
import {
    PlanetList,
    PlanetDetail,
    Columns,
    ErrorBoundry,
} from '..';

const PlanetPage = () => {
    const [itemID, setItemID] = useState(3);

    const onItemClicked = (id) => setItemID(id);

    return (
        <ErrorBoundry>
            <section className="choice mb-3">
                <h2 className="visually-hidden">Select your planet</h2>
                <Columns
                    first={<PlanetList clicked={onItemClicked}/>}
                    second={<PlanetDetail itemID={itemID}/>} />
            </section>
        </ErrorBoundry>
    )
};

export default PlanetPage;