import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import TagItem from './components/TagItem'
import TaskItem from './components/TaskItem'
import './App.css'

// These are the lists used in the application. You can move them to any component needed.

const tagsList = [
  {
    optionId: 'HEALTH',
    displayText: 'Health',
  },
  {
    optionId: 'EDUCATION',
    displayText: 'Education',
  },
  {
    optionId: 'ENTERTAINMENT',
    displayText: 'Entertainment',
  },
  {
    optionId: 'SPORTS',
    displayText: 'Sports',
  },
  {
    optionId: 'TRAVEL',
    displayText: 'Travel',
  },
  {
    optionId: 'OTHERS',
    displayText: 'Others',
  },
]

// Replace your code here
class App extends Component {
  state = {
    activeTagId: tagsList[0].optionId,
    tasksList: [],
    taskName: '',
    activeFilterTag: '',
  }

  onChangeTask = event => {
    this.setState({taskName: event.target.value})
  }

  onChangeActiveTagId = event => {
    this.setState({activeTagId: event.target.value})
  }

  onAddTask = event => {
    event.preventDefault()
    const {activeTagId, taskName} = this.state
    const newTask = {
      id: uuidv4(),
      taskName,
      activeTagId,
    }
    this.setState(prevState => ({
      tasksList: [...prevState.tasksList, newTask],
      taskName: '',
      activeTagId: tagsList[0].optionId,
    }))
  }

  onToggleTag = id => {
    this.setState({activeFilterTag: id})
  }

  render() {
    const {activeTagId, tasksList, taskName, activeFilterTag} = this.state
    const filteredTasksList = tasksList.filter(each =>
      each.activeTagId.includes(activeFilterTag),
    )
    console.log('tasksList:', tasksList)
    console.log(filteredTasksList)
    return (
      <div className="bg-container">
        <div className="tasks-container">
          <h1 className="main-heading">Create a task!</h1>
          <form className="form-container" onSubmit={this.onSubmitTask}>
            <label htmlFor="task">Tasks</label>
            <input
              type="text"
              className="ip"
              placeholder="Enter the task here"
              onChange={this.onChangeTask}
              value={taskName}
              id="task"
            />
            <label htmlFor="tag">Tags</label>
            <select
              className="select-op"
              value={activeTagId}
              onChange={this.onChangeActiveTagId}
              id="tag"
            >
              {tagsList.map(eachTag => (
                <option
                  className="option-ip"
                  key={eachTag.optionId}
                  value={eachTag.optionId}
                >
                  {eachTag.displayText}
                </option>
              ))}
            </select>
            <button
              type="submit"
              className="add-task-btn"
              onClick={this.onAddTask}
            >
              Add Task
            </button>
          </form>
        </div>
        <div className="tasks-and-tags-container">
          <h1 className="tags-heading">Tags</h1>
          <ul className="tags-ul">
            {tagsList.map(eachTagItem => (
              <TagItem
                key={eachTagItem.optionId}
                tagDetails={eachTagItem}
                onToggleTag={this.onToggleTag}
                isActive={activeFilterTag === eachTagItem.optionId}
              />
            ))}
          </ul>
          <h1 className="tasks-heading">Tasks</h1>
          {tasksList.length > 0 ? (
            <ul className="tasks-ul">
              {filteredTasksList.map(eachTask => (
                <TaskItem taskDetails={eachTask} key={eachTask.id} />
              ))}
            </ul>
          ) : (
            <p className="no-tasks">No Tasks Added Yet</p>
          )}
        </div>
      </div>
    )
  }
}

export default App
