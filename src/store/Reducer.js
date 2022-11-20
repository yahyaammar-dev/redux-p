const INTIAL_STATE = {
  tasks: null, 
  isFetching: false,
  errorMessage: undefined
}

const sampleTasksReducer = (state = INTIAL_STATE, action) => {
  switch(action.type) {
    case "SAMPLE_TASKS_START":
        return {
          ...state, 
          isFetching: true
        }
    case "SAMPLE_TASKS_SUCCESS":
      return {
        ...state,
        isFetching: false, 
        tasks: action.playload
      }
    default: 
      return state;
  }
}

export default sampleTasksReducer