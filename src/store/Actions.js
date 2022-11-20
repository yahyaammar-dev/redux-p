export const sampleTaskStarted = () => ({
    type: 'SAMPLE_TASKS_START'
})

export const sampleTasksSuccess = (tasks) => ({
	type: "SAMPLE_TASKS_SUCCESS",
	payload: tasks,
});

export const sampleTasksError = errorMessage => ({
  type: "SAMPLE_TASKS_ERROR",
  payload: errorMessage
})