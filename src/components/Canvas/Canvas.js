import React, { Component } from 'react';
import './Canvas.css';

import html2canvas from 'html2canvas';

import Pixel from './Pixel/Pixel';

class Canvas extends Component {

    state = {
        pressed: false
    }

    canvas = React.createRef();

    downloadCanvas = () => {
       return html2canvas(this.canvas.current);
    }

    mouseDown = () => {
        this.setState({pressed: true});
    }

    mouseUp = () => {
        this.setState({pressed: false});
    }

    pixelMouseEnter = (e) => {
        if (this.state.pressed) {
            e.target.style.backgroundColor = this.props.erase ?  '#f9f9f9' : this.props.color;
        } 
    }

    pixelClick = (e) => {
        e.target.style.backgroundColor = this.props.erase ?  '#f9f9f9' : this.props.color;
    }

    render() {
        let totalPixels = [];

        for (let i = 0; i < this.props.number; i++) {
            for(let j = 0; j < this.props.number; j++) {
                totalPixels.push(
                    <Pixel 
                        key={[i,j]} 
                        clicked={this.pixelClick}
                        mouseEnter={this.pixelMouseEnter}
                        {...this.props}
                    />
                )
            }
        }

        return (
            <div className="Canvas"
                onMouseDown={this.mouseDown}
                onMouseUp={this.mouseUp}
                onMouseLeave={this.mouseUp}
                ref={this.canvas}
            >
                {totalPixels}
            </div>
        );
    }  
}

export default Canvas;
