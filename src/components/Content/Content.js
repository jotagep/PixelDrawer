import React, { Component } from 'react';
import './Content.css';

import Canvas from '../Canvas/Canvas';

class Content extends Component {

    canvasComponent = React.createRef();

    handleBtnClick = () => {
        this.canvasComponent.current.downloadCanvas()
            .then(dataURL => {           
                const link = document.createElement('a');
                link.download = 'myPixelDraw.png';
                link.href = dataURL;
                link.click();
            });
    }

    render() {
        return (
            <div className="Content">
                <Canvas 
                    {...this.props}
                    ref={this.canvasComponent}
                />
                <button className="btn" onClick={this.handleBtnClick}>
                    Download
                </button>
            </div>
        );
    }
}

export default Content;