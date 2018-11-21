import React, { Component } from 'react';
import './Canvas.css';

import domToImg from 'dom-to-image';

import Pixel from './Pixel/Pixel';

class Canvas extends Component {

    state = {
        pressed: false
    }

    canvas = React.createRef();

    downloadCanvas = () => {
       return domToImg.toPng(this.canvas.current);
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
        const styleCanvas = ['Canvas', this.props.erase ? 'erase':'']

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
            <div className={styleCanvas.join(' ')}
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
