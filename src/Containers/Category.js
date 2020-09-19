import React from 'react'
import TaskCard from '../Components/TaskCard'
import Create from '../Components/Create'

class Category extends React.Component {


    state = {
        category: "All",
        tasks: this.props.tasks
    }

    clickHandler = (e) => {
        this.setState({
            category: e.target.value
        })
    }

    filteredTasks = () => {
        return this.deleteFilter().filter(task => {
            return task.category === this.state.category
        })
    }

    renderTasks = () => {
        if(this.state.category === 'All'){
            return this.deleteFilter().map(task => {
                return <TaskCard task={task} deleteHandler={this.deleteHandler}/>
            })    
        } else {
            return this.filteredTasks().map(task => {
                return <TaskCard task={task} deleteHandler={this.deleteHandler}/>
            })
        }

    }

    deleteHandler = (taskObj) => {
        let newArray = [...this.state.tasks]
        let foundObj = newArray.find(task => task === taskObj)
        foundObj.deleted = true
        this.setState({
            tasks: newArray
        })
    }

    deleteFilter = () => {
        return this.state.tasks.filter(task => {
            return !task['deleted']
        })
    }

    submitHandler = (newTask) => {
        let newArray = [newTask, ...this.state.tasks]
        this.setState({
            tasks: newArray
        })
    }

    render() {
        console.log(this.deleteFilter())
        console.log(this.state.tasks)
        return (
        <React.Fragment>
            <div className="categories">{this.props.categories.map(category => {
                return <button value={category} onClick={this.clickHandler}>{category}</button>
            })}
            </div>
            <div className="tasks">
            <h5>Tasks</h5>
            <Create submitHandler={this.submitHandler}/>
            <div>
                {this.renderTasks()}
            </div>
            </div>

        </React.Fragment>)
    
    } 


}

export default Category 