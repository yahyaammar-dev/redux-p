import { takeLatest, put } from "redux-saga/effects";
import { sampleTasksSuccess } from "./Actions";
import { sampleTasksError } from "./Actions";
function* sampleTasksSaga() {
	try {
		const taskResponse = yield fetch("https://jsonplaceholder.typicode.com/todos");
		const tasks = yield taskResponse.json();
		yield put(sampleTasksSuccess(tasks));
	} catch (error) {
		yield put(sampleTasksError(error.message));
	}
}
export default function* sampleSaga() {
	yield takeLatest("SAMPLE_TASKS_START", sampleTasksSaga);
}
