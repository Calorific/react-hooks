import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import {
  titleChanged,
  taskDeleted,
  completeTask,
  loadTasks,
  getTasks,
  getTasksLoadingStatus,
  addTask
} from './store/task'
import configureStore from './store/store'
import { Provider, useSelector, useDispatch } from 'react-redux'
import { getError } from './store/errors'


const store = configureStore()

const App = () => {
  const state = useSelector(getTasks())
  const isLoading = useSelector(getTasksLoadingStatus())
  const error = useSelector(getError())
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadTasks())
  }, [dispatch])


  const addNewTask = () => {
    const newTask = {
      userId: 1,
      title: 'New added task',
      completed: false
    }
    dispatch(addTask(newTask))
  }

  if (isLoading)
    return <h3>Loading...</h3>

  if (error)
    return <h3>{error}</h3>

  return (
    <>
      <h1>App</h1>
      <button onClick={addNewTask}>Add task</button>
      <ul>
        {state.map(el => (
            <li key={el.id}>
              <p>{el.title}</p>
              <p>Completed: {`${el.completed}`}</p>
              <button onClick={() => dispatch(completeTask(el.id))}>Complete task</button>
              <button onClick={() => dispatch(titleChanged(el.id))}>Change title</button>
              <button onClick={() => dispatch(taskDeleted(el.id))}>Delete task</button>
              <hr />
            </li>
        ))}
      </ul>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>

    </React.StrictMode>
)
