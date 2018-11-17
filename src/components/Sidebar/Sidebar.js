import React from 'react';
import './Sidebar.css';
import ColorBtn from '../ColorBtn/ColorBtn';

const sidebar = (props) => {
    return (
        <div className="Sidebar">
            <input type="number" defaultValue={props.number} onInput={props.changeNumber} min='4' max='50'/>
            <ColorBtn color={props.color} changeColor={props.changeColor} />
            <button onClick={props.toggleGrid}> 
                {props.grid ? 'Hide Grid': 'Show Grid'}
            </button>
            <button onClick={props.toggleErase}>
                {props.erase ? 'Not Erase': 'Erase'}
            </button>
        </div>
    );
};

export default sidebar;