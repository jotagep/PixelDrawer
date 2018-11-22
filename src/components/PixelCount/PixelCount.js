import React from 'react';

import './PixelCount.css';

const PixelCount = (props) => {
    return (
        <React.Fragment>
            <label className="Label">Pixels in a row</label>
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
        </React.Fragment>
    );
};

export default PixelCount;