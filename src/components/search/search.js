import React, { useRef } from 'react';
import { withRouter } from 'react-router-dom';

const Search = ({ getData, placeholder, history }) => {
console.log('getData: ', getData);
    const searchInput = useRef(null);
    const form = useRef(null);
    const onFormSubmit = async(e) => {
        try {
            e.preventDefault();
            const { value } = searchInput.current;
            const { id } = await getData(value);
            history.push(id);
            form.current.reset();
        } catch (error) {
            console.log(error);
        }
        
    }
    return (
        <form className="form-inline my-2 my-lg-0" onSubmit={onFormSubmit} ref={form}>
            <input 
                className="form-control mr-sm-2"
                type="text"
                placeholder={placeholder}
                ref={searchInput}
            />
            <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
        </form>
    )
}

export default withRouter(Search);