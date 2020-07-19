import React from 'react';
import { SwapiConsumer } from '..';

const withSwapiAPI = (View) => {
    return (props) => (
        <SwapiConsumer>
            {(swapiService) => (
                <View {...props} swapiService={swapiService}/>
            )}
        </SwapiConsumer>
    )
}

export default withSwapiAPI;