import React, { Component } from 'react';
import './Panel.css';

// Components
import Sidebar from '../../components/Sidebar/Sidebar';
import Content from '../../components/Content/Content';

class Panel extends Component {

    state = {
        color: '#001f3f',
        numberPix: 16,
        showGrid: true,
        isErase: false
    }

    changeNumber = (e) => {
        const n = parseInt(e.target.value);
        if (n>=4 && n<=50) {
            this.setState({ numberPix: n})
        }
    }

    changeColor = (color) => {
        const newColor = color.hex;
        this.setState({color: newColor});
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
                />
                <Content 
                    color={this.state.color} 
                    number={this.state.numberPix}
                    grid={this.state.showGrid}
                    erase={this.state.isErase}
                />
            </div>
        );
    }
}

export default Panel;