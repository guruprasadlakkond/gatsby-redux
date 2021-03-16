import React from "react"
import { addTask } from "../store/actions/task"

import { connect } from "react-redux"
import {Link} from 'gatsby';

class Task extends React.Component {

  state = {
    task:''
  }

  handleInput = (e)=>{
    console.log(e.target.value);
    this.setState({task:e.target.value});
  }

  render() {
      console.log(this.state.task);
      console.log(this.props.tasks);
    return (
      <div>
        <input type='text' onChange={this.handleInput} />
        <button type='button' onClick={()=> this.props.addTask(this.state.task)}>Submit</button>
        <div>
        {/* Tasks List:
            <ul>
            {this.props.tasks.map(t => {
              return <li>{t}</li>
            })}
        </ul> */}
        <Link to='/listTask'>
         View Task Lists
        </Link>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    tasks: state.task.tasks,
  }
}

const mapDispatchToProps = {
  addTask
}

export default connect(mapStateToProps, mapDispatchToProps)(Task)
