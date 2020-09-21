import React from 'react'

class CatButton extends React.Component {
    
    inButtonHandler = (event) => {
        // event.target.className = "selected"
        this.props.selectHandler(this.props)
    }
    
    render(){
        return(
            <button onClick={this.inButtonHandler} className={this.props.name === this.props.selectedCategory ? 'selected' : null} >
                {this.props.name}
            </button>
        )
    }
}
    


export default CatButton