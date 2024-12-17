import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
	name: "tasks",
	initialState: {
		tasks: [],
		hideDoneTask: false,
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
		fetchExampleTasks: () => { },
		setTasks: (state, { payload: tasks }) => {
			state.tasks = tasks;
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
	setTasks,
} = tasksSlice.actions;

export const selectTasksState = state => state.tasks;

export const selectHaveAnyTasks = state => selectTasksState(state).tasks.length > 0;
export const selectIsEveryTaskDone = state => selectTasksState(state).tasks.every(({ done }) => done);

export default tasksSlice.reducer;