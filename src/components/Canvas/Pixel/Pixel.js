import React from 'react';
import './Pixel.css';

const Pixel = (props) => {


    return ( 
        <div 
            className="Pixel" 
            draggable='false'
            style={{
                flexBasis: 100/props.number + '%',
                border: props.grid ? '1px solid #666': '0'
            }}
            onMouseDown={props.clicked}
            onMouseEnter={props.mouseEnter}
        >
        </div>
    );
};

export default Pixel;