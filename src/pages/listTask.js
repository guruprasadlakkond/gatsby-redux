import React from "react"
import { deleteTask } from "../store/actions/task"

import { connect } from "react-redux"
import { Link } from "gatsby"

class ListTask extends React.Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.tasks.map(t => {
            return <li>{t}</li>
          })}
        </ul>

        <Link to='/addTask'>
         Add Task
        </Link>
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
  deleteTask,
}

export default connect(mapStateToProps, mapDispatchToProps)(ListTask)
