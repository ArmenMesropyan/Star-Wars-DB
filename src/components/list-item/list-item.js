import React, { useEffect, useState } from 'react';
import { Loading, Error } from '..';

const Record = ({ item, field, label }) => (
    <li className="list-group-item">{`${label}: ${item[field]}`}</li>
);

const ListItem = ({ itemID, getData, children }) => {
    const [data, setData] = useState(null);
    const [indicators, setIndicators] = useState({ loading: true, error: false });

    useEffect(() => {
        const setItem = async() => {
            try {
                setIndicators({ loading: true });
                const data = await getData(itemID);
                setData(data);
                setIndicators({ loading: false });
            } catch (error) {
                setIndicators({ loading: false, error: true });
            }
        }
        
        setItem();
    }, [itemID]);

    const { error, loading } = indicators;
    console.log('loading: ', loading);

    if (error) return <Error />
    if (loading) return <Loading />

    const { id, name } = data;

    return (
        <div className="list-item list-group">
            <div className="list-group-item list-group-item-action">
                <div className="list-group__img">
                    <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt={name}/>
                </div>
                <div className="d-flex flex-column w-100 justify-content-between">
                    <h3 className="mb-1">{name || 'Unknown'}</h3>
                    <ul className="list-group list-group-flush">
                        { React.Children.map(children, (child) => {
                            return React.cloneElement(child, { item: data });
                        }) }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export { ListItem, Record };