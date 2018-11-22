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

        const backdrop = {
            position: 'fixed',
            top: '0px',
            right: '0px',
            left: '0px',
            bottom: '0px',
            backgroundColor: 'rgba(0,0,0,.4)'
        }

        const showColor = {
            display: 'inline-block',
            marginRight: '7px',
            width: '32px', 
            height: '16px', 
            backgroundColor: this.props.color,
            borderRadius: '5px'
        }

        let picker = null;

        if (this.state.displayPicker) {
            picker = (
                <div className="Popover">  
                    <div style={backdrop} onClick={this.handleClose}></div>
                    <ChromePicker  color={this.props.color} onChange={this.props.changeColor} />
                </div>
            );
        }

        return (
            <React.Fragment>
                <div className="btn" onClick={this.handlerColorPicker}>
                    <span style={showColor} /> {this.props.color}
                </div>
                {picker}
            </React.Fragment>
        );
    }
}

export default ColorBtn;