import React from 'react';

const ListItem = ({ itemID }) => {
console.log('itemID: ', itemID);
    return (
        <div className="list-item list-group">
            <div className="list-group-item list-group-item-action">
                <div className="list-group__img">
                    <img src="https://qph.fs.quoracdn.net/main-qimg-3bf24a3f768cfa80261311670fe1d358" alt="Name"/>
                </div>
                <div className="d-flex flex-column w-100 justify-content-between">
                    <h3 className="mb-1">R2-D2</h3>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Gender: n/a</li>
                        <li className="list-group-item">Birth Year - 33BBY</li>
                        <li className="list-group-item">Eye Color - Red</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ListItem;