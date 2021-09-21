import React, { useState } from 'react'

const Search = ({getQuery}) => {
    const [text,setText]=useState('');

    const onchange=(q)=> {
        setText(q);
        getQuery(q);
    }


    return (
        <section className='search'>
            <input type="text"
                   value={text}
                   placeholder='search characters'
                   onChange={(e)=>onchange(e.target.value)}
                   className='form-control'
            />
        </section>
    )
}

export default Search
