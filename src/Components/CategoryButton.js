import React from 'react'

class CategoryButton extends React.Component {

    clickHandler = () => {
        this.props.appClickHandler(this.props.category)
    }

    render() {
        return <button className={this.props.getSelected(this.props.category)} onClick={this.clickHandler} > {this.props.category}</button >
    }
}

export default CategoryButton