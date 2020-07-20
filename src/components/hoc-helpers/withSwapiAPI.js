import React, { useContext } from 'react';
import { SwapiContext } from '..';

const withSwapiAPI = (View, mapServiceToProps) => (props) => {
    const swapiService = useContext(SwapiContext)
    const swapiProps = mapServiceToProps(swapiService);
    return (
        <View {...props} {...swapiProps}/>
    )
}

export default withSwapiAPI;