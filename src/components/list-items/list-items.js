import React, { useState, useEffect } from 'react';
import { Loading, Error } from '..';

const ListItems = ({ getData, clicked, children }) => {
    const [list, setList] = useState({});
    const [indicators, setIndicators] = useState({ loading: true, error: false });

    useEffect(() => {
        const setData = async() => {
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

    const setActiveItem = (index) => {
        list.forEach(item => item.active = false);

        const activeItem = {...list[index], active: true};

        const newList = [...list];
        newList[index] = activeItem;

        setList(newList);
    }

    const elements = list.map(({ id, active, ...item }, index) => {
        console.log('active: ', active);
        const elem = children(item);
        const classes = `list-group-item list-group-item-action ${active ? 'active': ''}`;
        return (
            <li className={classes} key={id || index} onClick={() => {
                clicked(id);
                setActiveItem(index);
            }}>
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