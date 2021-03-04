import React from 'react';
// import Button from 'button';
// import MetalMeta from './MetalMeta';

function Band(props) {
    const {ID, band_name, fans, formed, origin, split, style, } = props 
    return (
        <div className="Band">
            <h1>{band_name}</h1> 
            <h2>origin:{origin}</h2>
            <h2>fans:{fans}</h2>
            <h2>formed: {formed}</h2>
            <h2>split: {split}</h2>
            <h2>style:{style}</h2>
        </div>
    )
}
export default Band