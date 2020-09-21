import React, { Component } from 'react'
import Button from '../components/Button'


class ButtonContainer extends Component {
    
    makeButtons = () => {
        return this.props.categories.map(cat => <Button cat={cat} clickHandler={this.props.clickHandler} selected={this.props.selected}/>)
    }

    render() {  
      return (               
        <div class='categories'>     
            <h5>Category filters</h5>
            {this.makeButtons()}
        </div>
    )}
}

export default ButtonContainer
