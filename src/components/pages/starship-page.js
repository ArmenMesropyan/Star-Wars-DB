import React, { useState } from 'react';
import {
    StarshipList,
    StarshipDetail,
    Columns,
    ErrorBoundry,
} from '..';

const StarshipPage = () => {
    const [itemID, setItemID] = useState(3);

    const onItemClicked = (id) => setItemID(id);

    return (
        <ErrorBoundry>
            <section className="choice mb-3">
                <h2 className="visually-hidden">Select your starship</h2>
                <Columns
                    first={<StarshipList clicked={onItemClicked}/>}
                    second={<StarshipDetail itemID={itemID}/>} />
            </section>
        </ErrorBoundry>
    )
};

export default StarshipPage;