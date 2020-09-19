import React from 'react'


class Create extends React.Component {

    state = {
        text: "",
        category: 'Code'
    }


    submitted = (e) => {
        e.preventDefault()
        this.props.submitHandler({text: this.state.text, category: this.state.category})
    }

    changeTextHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    changeCategoryHandler = (e) => {
        this.setState({
            category: e.target.value
        })     
    }

    render () {
        return (
            <form className="new-task-form" onSubmit={this.submitted}>
                <input name="text" placeholder="New task details" type="text" onChange={this.changeTextHandler}></input>
                <select onChange={this.changeCategoryHandler} >
                    <option name="category"  value="Code">Code</option>
                    <option name="category"  value="Food">Food</option>
                    <option name="category"  value="Money">Money</option>
                    <option name="category" value="Misc">Misc</option>
                </select>
                <input type="submit" value="Add Task"></input>
            </form>
        )
    }
}

export default Create