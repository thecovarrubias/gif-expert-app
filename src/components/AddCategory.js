import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddCategory = ({ setCategories }) => {
    
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim().length > 2) {
            setCategories( categories => [inputValue, ...categories]);
            setInputValue('');
        }
    }

    return (
        <form onSubmit={ handleSubmit }>

            {/* <p> { inputValue } </p> */}

            <label htmlFor="GIF" className="form-label">¡Empieza aquí!</label>
            <input
                id="GIF"
                className="form-control"
                type="text"
                placeholder="Búsqueda de GIFs"
                value={ inputValue }
                onChange={ handleInputChange }
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}

export default AddCategory;