import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import { initiateStore } from './store/store'
import * as actions from './store/actions'
// import { pipe, compose } from 'lodash/fp'

const store = initiateStore()

const App = () => {
  const [state, setState] = useState(store.getState())

  useEffect(() => {
    store.subscribe(() => {
      setState(store.getState())
    })
  }, [])

  const comletedTask = (taskId) => {
    store.dispacth(actions.taskComplete(taskId))
  }
  const changeTitle = (taskId) => {
    store.dispacth(actions.titleChange(taskId))
  }
  const deleteTask = (taskId) => {
    store.dispacth(actions.deleteTask(taskId))
  }

  return (
    <>
      <h1>App</h1>

      <ul>
        {state.map((el) => (
          <li key={el.id}>
            <p>{el.title}</p>
            <p>{`Completed: ${el.completed}`}</p>
            <button onClick={() => comletedTask(el.id)}>comleted</button>
            <button onClick={() => changeTitle(el.id)}>ChangeTitle</button>
            <button onClick={() => deleteTask(el.id)}>Delete</button>
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
    <App />
  </React.StrictMode>
)
