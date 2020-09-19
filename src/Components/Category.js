import React from 'react'

export default class Category extends React.Component {


  click = () => {
      this.props.clickHandler(this.props.cat)
      this.props.catSelect(this.props.cat)
    }

  render(){
    return <button onClick={this.click} className={this.props.selected} >{this.props.cat}</button>
  }

}