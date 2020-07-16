import React from 'react';

const Columns = ({ first, second }) => (
    <div className="container">
        <div className="row">
            <div className="col-md-6 col-sm-12">
                {first}
            </div>
            <div className="col-md-6 col-sm-12">
                {second}
            </div>
        </div>
    </div>
)

export default Columns;