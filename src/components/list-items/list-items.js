import React from 'react';

const ListItems = ({ clicked, children, data, setData }) => {
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

export default ListItems;