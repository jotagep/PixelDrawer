import React from 'react';
import './Sidebar.css';

// Components
import ColorBtn from '../ColorBtn/ColorBtn';
import PixelCount from '../PixelCount/PixelCount';
import ToggleButton from '../ToggleButton/ToggleButton';

const sidebar = (props) => {
    return (
        <div className="Sidebar">
            <PixelCount number={props.number}  changeNumber={props.changeNumber}/>
            <ColorBtn color={props.color} changeColor={props.changeColor} />
            <div className="flex_container">
                <ToggleButton clicked={props.toggleGrid} active={props.grid}>
                    <i className="fas fa-th"></i>
                </ToggleButton>
                <ToggleButton clicked={props.toggleErase} active={props.erase}>
                    <i className="fas fa-eraser"></i>
                </ToggleButton>
            </div>
            <button className="btn" onClick={props.resetBtn}>
                Clear
            </button>
        </div>
    );
};

export default sidebar;