import React, { useState, useEffect } from 'react';
import { Loading, Error, ErrorBoundry } from '..';

const withData = (View) => (props) => {
    const [data, setData] = useState({});
    const [indicators, setIndicators] = useState({ loading: true, error: false });
    const updateData = async() => {
        try {
            const data = await props.getData();
            setData(data);
            setIndicators({ loading: false, error: false });
        } catch (error) {
            console.log(error);
            setIndicators({ loading: false, error: true });
        }
    }

    useEffect(() => {
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