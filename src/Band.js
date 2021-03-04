import React from 'react';
// import MetalMeta from './MetalMeta';

function Band(props) {
    const {ID, band_name, fans, formed, origin, split, style } = props 
    return (
        <div className="MetalMeta">
            <h1>{ID}</h1>
            <h2>{band_name}</h2> 
            <h2>{fans}</h2>
            <h2>{formed}</h2>
            <h2>{origin}</h2>
            <h2>{split}</h2>
            <h2>{style}</h2>
        </div>
    )
}
export default Band