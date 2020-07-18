import React, { useState, useEffect } from 'react';
import { Loading, Error, ErrorBoundry } from '..';

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

export default withData;