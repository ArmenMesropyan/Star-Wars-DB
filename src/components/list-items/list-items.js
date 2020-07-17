import React, { useState, useEffect } from 'react';
import { Loading, Error } from '..';

const ListItems = ({ getData, clicked, children }) => {
    const [list, setList] = useState({});
    const [indicators, setIndicators] = useState({ loading: true, error: false });
    useEffect(() => {
        const setData = async () => {
            try {
                const list = await getData();
                setList(list);
                setIndicators({ loading: false, error: false });
            } catch (error) {
                setIndicators({ loading: false, error: true });
            }
        }
        
        setData();
    }, []);
    
    const { loading, error } = indicators;

    if (error || list.detail) return <Error />
    if (loading) return <Loading />
    console.log('list: ', list);

    const elements = list.map(({ id, ...item }, index) => {
        const elem = children(item);
        return (
            <li className="list-group-item list-group-item-action" key={id || index} onClick={() => clicked(id)}>
                {elem}
            </li>
        )
    });

    return (
        <ul className="list-group">
            { elements }
        </ul>
    )
}

export default ListItems;