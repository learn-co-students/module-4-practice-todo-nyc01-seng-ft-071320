import React from 'react'
import CatButton from '../components/CatButton'

export default class CategoryContainer extends React.Component {

    renderCatButtons = () => {
        return this.props.cats.map(category => <CatButton key={category} name={category} selectHandler={this.props.catSelectHandler} selectedCategory={this.props.selectedCategory} />)
    }

    render(){
        return(
            <div className="categories">
                {this.renderCatButtons()}
            </div>
        )
    }
}