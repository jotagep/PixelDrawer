import React from 'react';
import './Sidebar.css';

// Logo
import logo from './logo.png';

// Components
import ColorBtn from '../ColorBtn/ColorBtn';
import PixelCount from '../PixelCount/PixelCount';
import ToggleButton from '../ToggleButton/ToggleButton';

const sidebar = (props) => {
    return (
        <div className="Sidebar">
            <a href="https://jotagep.github.io/PixelDrawer/">
                <img src={logo} className="Logo" alt="Logo"/>
            </a>
            <div className="Controls">
                <PixelCount number={props.number}  changeNumber={props.changeNumber}/>
                <ColorBtn color={props.color} changeColor={props.changeColor} />
                <div className="flex_container">
                    <ToggleButton clicked={props.toggleGrid} active={props.grid} type="Grid">
                        <i className="fas fa-th"></i>
                    </ToggleButton>
                    <ToggleButton clicked={props.toggleErase} active={props.erase} type="Erase">
                        <i className="fas fa-eraser"></i>
                    </ToggleButton>
                </div>
                <button className="btn" onClick={props.resetBtn}>
                    Clear
                </button>
            </div>
            <div className="Social">
                <a href="https://github.com/jotagep" target="_blank" rel='noreferrer noopener'>
                    <i className="fab fa-github"></i>
                </a>
                <a href="https://twitter.com/Sir_JotaG" target="_blank" rel='noreferrer noopener'>
                    <i className="fab fa-twitter"></i>
                </a>

            </div>
        </div>
    );
};

export default sidebar;