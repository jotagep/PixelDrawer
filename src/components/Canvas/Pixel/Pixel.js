import React from 'react';
import './Pixel.css';

const Pixel = (props) => {

    const pixelStyle = {
        flexBasis: 100/props.number + '%',
        border: props.grid ? '1px solid #666': '0',
        backgroundColor: props.isNew ? 'transparent' : ''
    }

    return ( 
        <div 
            className="Pixel" 
            draggable='false'
            style={pixelStyle}
            onMouseDown={props.clicked}
            onMouseEnter={props.mouseEnter}
        >
        </div>
    );
};

export default Pixel;