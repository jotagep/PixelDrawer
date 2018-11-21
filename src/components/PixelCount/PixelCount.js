import React from 'react';

import './PixelCount.css';

const PixelCount = (props) => {
    return (
        <div className="PixelCount">
            <div className="button" onClick={() => props.changeNumber(-1)}>
                <i className="fas fa-minus-circle"></i>
            </div>
            <span>
                {props.number}
            </span>
            <div className="button" onClick={() => props.changeNumber(1)}>
                <i className="fas fa-plus-circle"></i>
            </div>
        </div>
    );
};

export default PixelCount;