import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
	name: "tasks",
	initialState: {
		tasks: [],
		hideDoneTask: false,
		loading: false,
	},
	reducers: {
		addTask: ({ tasks }, { payload: task }) => {
			tasks.push(task);
		},
		toggleHideDoneTask: state => {
			state.hideDoneTask = !state.hideDoneTask;
		},
		toggleTaskDone: ({ tasks }, { payload: taskId }) => {
			const index = tasks.findIndex(({ id }) => id === taskId);
			tasks[index].done = !tasks[index].done;
		},
		removeTask: ({ tasks }, { payload: taskId }) => {
			const index = tasks.findIndex(({ id }) => id === taskId);
			tasks.splice(index, 1);
		},
		setAllDone: ({ tasks }) => {
			for (const task of tasks) {
				task.done = true;
			}
		},
		fetchExampleTasks: state => {
			state.loading = true;
		},
		fechExampleTasksSuccess: (state, { payload: tasks }) => {
			state.tasks = tasks;
			state.loading = false;
		},
		fetchExampleTasksError: state => {
			state.loading = false;
		},
	},
});

export const {
	addTask,
	toggleHideDoneTask,
	toggleTaskDone,
	removeTask,
	setAllDone,
	fetchExampleTasks,
	fechExampleTasksSuccess,
	fetchExampleTasksError,
} = tasksSlice.actions;

export const selectTasksState = state => state.tasks;

export const selectHaveAnyTasks = state => selectTasksState(state).tasks.length > 0;
export const selectIsEveryTaskDone = state => selectTasksState(state).tasks.every(({ done }) => done);
export const selectIsLoading = state => selectTasksState(state).loading;

export default tasksSlice.reducer;