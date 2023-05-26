import { taskUpdate, taskDeleted } from './actionTypes'

export function taskReducer(state = [], action) {
  switch (action.type) {
    case taskUpdate: {
      const newArray = [...state]
      const eltmentIndex = newArray.findIndex(
        (el) => el.id === action.payload.id
      )
      newArray[eltmentIndex] = { ...newArray[eltmentIndex], ...action.payload }
      return newArray
    }
    case taskDeleted: {
      const newArray = [...state]
      const eltmentDelete = newArray.filter((el) => el.id !== action.payload.id)

      return eltmentDelete
    }
    default:
      return state
  }
}
