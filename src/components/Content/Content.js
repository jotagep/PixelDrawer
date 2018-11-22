import React, { Component } from 'react';
import './Content.css';

import swal from 'sweetalert2';

import Canvas from '../Canvas/Canvas';

class Content extends Component {

    canvasComponent = React.createRef();

    handleBtnClick = () => {
        this.canvasComponent.current.downloadCanvas()
            .then(dataURL => {           
                swal({
                    title: 'Name your draw:',
                    input: "text",
                    type: 'info',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Download it!'
                  }).then((result) => {
                    if (result.value) {
                        const link = document.createElement('a');
                        link.download = `${result.value}.png`;
                        link.href = dataURL;
                        link.click();
                    }
                  })
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
                    Download <i className="fas fa-download"></i>
                </button>
            </div>
        );
    }
}

export default Content;