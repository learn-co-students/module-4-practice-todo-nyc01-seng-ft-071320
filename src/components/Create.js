import React from 'react'

class Create extends React.Component {

    state={
        task:""
    }

    change =(e)=>{
        e.persist()
        this.setState(()=>({[e.target.name]:e.target.value}))
    }

    submitHandle=(e)=>{
        e.preventDefault()
        this.props.submit(this.state.task)
        this.setState({tasks:""})
    }

    render=()=>{
        return (
            <form className="new-task-form" onSubmit={this.submitHandle}>
                <input type="text" name="task" placeholder="Add New Task To This Category" value={this.state.task} onChange={this.change}/>
                <input type="submit" value="Add"/>
            </form>
        )
        
    }
}

export default Create