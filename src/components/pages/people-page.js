import React, { useState } from 'react';
import {
    PeopleList,
    PeopleDetail,
    Columns,
    ErrorBoundry,
} from '..';

const PeoplePage = () => {
    const [itemID, setItemID] = useState(3);

    const onItemClicked = (id) => setItemID(id);

    return (
        <ErrorBoundry>
            <section className="choice mb-3">
                <h2 className="visually-hidden">Select your person</h2>
                <Columns
                    first={<PeopleList clicked={onItemClicked}/>}
                    second={<PeopleDetail itemID={itemID}/>} />
            </section>
        </ErrorBoundry>
    )
};

export default PeoplePage;