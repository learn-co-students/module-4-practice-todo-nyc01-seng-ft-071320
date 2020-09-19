import React from 'react'
import Category from '../Components/Category'


export default class CategoryContainer extends React.Component {

  state = {
    selected: "All"
  }

  categories = () => {
    return this.props.categories.map(cat => <Category catSelect={this.selectCatagory} clickHandler={this.props.clickHandler} selected={this.state.selected === cat ? "selected" : ""} cat={cat}/>)
  }

  selectCatagory = (category) => {
    this.setState(()=>({selected: category}))
  }

  render(){
    return(
      <div className="categories">
        <h5>Category Filters</h5>
        {this.categories()}
      </div>
    )
  }

}