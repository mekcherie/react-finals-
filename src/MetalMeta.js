import React from 'react';
import data from './metal.json';

function MetalMeta() {
    const band = data.map(({ ID, band_name, fans, formed, origin, split, style }, i) => {
      return (
    
        <MetalMeta
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

    console.log(band)
    
    return (
        <div>test</div>
      )
    }
export default MetalMeta;