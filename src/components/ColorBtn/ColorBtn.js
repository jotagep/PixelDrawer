import React, { Component } from 'react';

import { ChromePicker } from 'react-color';
import './ColorBtn.css';

class ColorBtn extends Component {

    state = {
        displayPicker: false
    }

    handlerColorPicker = () => {
        this.setState({displayPicker: !this.state.displayPicker});
    }

    handleClose = () => {
        this.setState({displayPicker: false});
    }
 
    render() {

        const popover = {
            position: 'absolute',
            right: '-100%',
            zIndex: 2
        };

        const backdrop = {
            position: 'fixed',
            top: '0px',
            right: '0px',
            left: '0px',
            bottom: '0px'
        }

        const showColor = {
            display: 'inline-block',
            marginRight: '5px',
            width: '1rem', 
            height: '1rem', 
            backgroundColor: this.props.color
        }

        let picker = null;

        if (this.state.displayPicker) {
            picker = (
                <div style= {popover}>  
                    <div style={backdrop} onClick={this.handleClose}></div>
                    <ChromePicker  color={this.props.color} onChange={this.props.changeColor} />
                </div>
            );
        }

        return (
            <React.Fragment>
                <div className="btnColor" onClick={this.handlerColorPicker}>
                    <span style={showColor} /> {this.props.color}
                </div>
                {picker}
            </React.Fragment>
        );
    }
}

export default ColorBtn;