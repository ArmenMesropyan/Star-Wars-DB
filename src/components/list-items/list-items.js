import React, { useState, useEffect } from 'react';
import { Loading, Error, ErrorBoundry } from '..';

const ListItems = ({ getData, clicked, children, data, setData }) => {
    const setActiveItem = (index) => {
        data.forEach(item => item.active = false);

        const activeItem = {...data[index], active: true};

        const newList = [...data];
        newList[index] = activeItem;

        setData(newList);
    }

    const elements = data.map(({ id, active, ...item }, index) => {
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

const withData = (View, getData) => (props) => {
    const [data, setData] = useState({});
    const [indicators, setIndicators] = useState({ loading: true, error: false });

    useEffect(() => {
        const updateData = async() => {
            try {
                const data = await getData();
                setData(data);
                setIndicators({ loading: false, error: false });
            } catch (error) {
                console.log(error);
                setIndicators({ loading: false, error: true });
            }
        }
        
        updateData();
    }, []);
    
    const { loading, error } = indicators;

    if (error || data.detail) return <Error />
    if (loading) return <Loading />

    return (
        <ErrorBoundry>
            <View {...props} data={data} setData={setData}/>
        </ErrorBoundry>
    )
}

export default ListItems;