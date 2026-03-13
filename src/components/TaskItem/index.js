import './index.css'

const TaskItem = props => {
  const {taskDetails} = props
  const {taskName, activeTagId} = taskDetails
  return (
    <li className="individual-task-item">
      <p className="task-name">{taskName}</p>
      <p className="tag-name">{activeTagId}</p>
    </li>
  )
}

export default TaskItem
