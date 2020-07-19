import React from 'react';
import { SwapiConsumer } from '..';

const withSwapiAPI = (View, mapServiceToProps) => {
    return (props) => (
        <SwapiConsumer>
            {(swapiService) => {
                const swapiProps = mapServiceToProps(swapiService);
                return (
                    <View {...props} {...swapiProps}/>
                )
            }}
        </SwapiConsumer>
    )
}

export default withSwapiAPI;