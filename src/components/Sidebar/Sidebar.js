import React from 'react';
import './Sidebar.css';

const sidebar = (props) => {
    return (
        <div className="Sidebar">
            <input type="number" defaultValue={props.number} onInput={props.changeNumber} min='4' max='50'/>
            <input type="color" defaultValue={props.color} onChange={props.changeColor}/>
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