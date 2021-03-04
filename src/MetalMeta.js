import React from 'react';
import data from './metal.json';
import Band from './Band.js'


function MetalMeta() {
    const band = data.map(({ ID, band_name, fans, formed, origin, split, style }, i) => {
        return (
    
        <Band
            key={i}
            ID = {ID}
            band_name = {band_name}
            fans = {fans} 
            formed = {formed}
            origin = {origin}
            split = {split}
            style = {style} 
        />
      )
    })
    
    return (
        <div>{band}</div>
    )
}
    export default MetalMeta;

   