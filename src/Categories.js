import React from 'react'

export default class Categories extends React.Component {

    makeButtons = () => {
        return this.props.categories.map(el => <button className={this.props.pinkClick(el)} onClick={()=>{this.props.clickHandler(el)}}>{el}</button>)
    }
    
    render() {
        return(
            <div className="categories">
                <h5>Category Filters</h5>
                    {this.makeButtons()}
            </div>
        )
    }
}