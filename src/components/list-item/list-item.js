import React, { useEffect, useState } from 'react';
import { Loading, Error } from '..';

const ListItem = ({ itemID, getData }) => {
    const [data, setData] = useState(null);
    const [indicators, setIndicators] = useState({ loading: true, error: false });

    useEffect(() => {
        const setItem = async() => {
            try {
                const data = await getData(itemID);
                setData(data);
                setIndicators({ loading: false, error: false });
            } catch (error) {
                setIndicators({ loading: false, error: true });
            }
        }
        
        setItem();
    }, [itemID]);

    const { error, loading } = indicators;

    if (error) return <Error />
    if (loading) return <Loading />

    const { id, name, population, diameter, gravity } = data;

    return (
        <div className="list-item list-group">
            <div className="list-group-item list-group-item-action">
                <div className="list-group__img">
                    <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt={name}/>
                </div>
                <div className="d-flex flex-column w-100 justify-content-between">
                    <h3 className="mb-1">{name}</h3>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Population: {population}</li>
                        <li className="list-group-item">Diameter - {diameter}</li>
                        <li className="list-group-item">Gravity - {gravity}</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ListItem;