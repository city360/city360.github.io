import React from 'react';
import './search.styles.css';

export const Search = ({placeholder, onChangeHandler}) => (

    <input className='Search'
      type='Search' 
      placeholder= {placeholder}
      onChange ={onChangeHandler}        
      />

)