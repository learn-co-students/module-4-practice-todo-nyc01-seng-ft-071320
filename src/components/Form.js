import React, { Component } from 'react' 

class Form extends Component {

    state = {
        text: '',
        category: ''
    }

    makeOptions = () => {
        return this.props.categories.slice(1, 6).map(cat => <option value={cat}>{cat}</option>)
    }

    changeCategory = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    submitHandler = (e) => {
        e.preventDefault()
        this.props.submitHandler(this.state)
        this.setState({
            text: '',
            category: ''
        })
    }

    render() {
        return (
            <form class={'new-task-form'} onSubmit={this.submitHandler}>
                <input type='text' name="text" value={this.state.text} onChange={this.changeCategory} placeholder="New task details"/>
                <select name="category" onChange={this.changeCategory}>
                    {this.makeOptions()}
                </select>        
                <input type='submit' value="Add task"/>
            </form>
        )
    }
}

export default Form