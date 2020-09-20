import React from 'react'
import CategoryButton from '../Components/CategoryButton'

function categoryButtons(props) {
    return props.categories.map(category => <CategoryButton getSelected={props.getSelected} appClickHandler={props.appClickHandler} category={category} />)
}

function Categories(props) {
    return (
        < div className="categories" >
            <h5>Category filters</h5>
            {categoryButtons(props)}
        </div>
    )
}

export default Categories