import React, { Component } from 'react' 

class Button extends Component {


    render() {
        return (
            <button 
                class={(this.props.selected === this.props.cat) ? "selected" : ""} 
                onClick={() => this.props.clickHandler(this.props.cat)}>
                    {this.props.cat}
            </button>
        )
    }
}

export default Button