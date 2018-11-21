import React, { Component } from 'react';
import './Panel.css';

// Components
import Sidebar from '../../components/Sidebar/Sidebar';
import Content from '../../components/Content/Content';

import swal from 'sweetalert2';

class Panel extends Component {

    state = {
        color: '#001f3f',
        numberPix: 16,
        showGrid: true,
        isErase: false,
        isNew: false,
    }

    changeNumber = (number) => {
        const n = this.state.numberPix + number;
        if (n>=4 && n<=30) {
            this.setState({ numberPix: n})
        } else {
            swal({
                type: 'warning',
                title: 'Check limits',
                html: '<p>Number pixels should be between <b>4 (Min)</b> and <b>30 (Max)</b></p>'
            });
        }
    }

    changeColor = (color) => {
        const newColor = color.hex;
        this.setState({color: newColor});
    }

    isNewHandler = () => {
        this.setState({isNew: true});
        setTimeout(() => {
            this.setState({isNew: false});
        }, 500);
    }

    toggleGrid = () => {
        this.setState({showGrid: !this.state.showGrid});
    }

    toggleErase = () => {
        this.setState({isErase: !this.state.isErase});
    }

    render() {
        return (
            <div className='Panel'>
                <Sidebar 
                    number={this.state.numberPix}
                    color={this.state.color}
                    grid={this.state.showGrid}
                    erase={this.state.isErase}
                    changeNumber={this.changeNumber}
                    changeColor={this.changeColor} 
                    toggleGrid={this.toggleGrid}
                    toggleErase={this.toggleErase}
                    resetBtn={this.isNewHandler}
                />
                <Content 
                    color={this.state.color} 
                    number={this.state.numberPix}
                    grid={this.state.showGrid}
                    erase={this.state.isErase}
                    isNew={this.state.isNew}
                />
            </div>
        );
    }
}

export default Panel;