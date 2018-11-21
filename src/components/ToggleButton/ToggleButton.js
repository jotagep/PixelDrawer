import React from 'react';

const ToggleButton = (props) => {

    const styleBtn = ["btn", props.active ? 'active' : ''];

    return (
        <button className={styleBtn.join(' ')} onClick={props.clicked}> 
            {props.children}
        </button>
    );
};

export default ToggleButton;