import { useLocalStorageState } from "./useLocalStorageState";
import exampleTasks from "./sampleTasks";

export const useTasks = () => {
    const [tasks, setTasks] = useLocalStorageState("tasks", exampleTasks);

    const removeTask = (id) => {
        setTasks(tasks => tasks.filter(task => task.id !== id));
    };

    const toggleTaskDone = (id) => {
        setTasks(tasks => tasks.map(task => {
            if (task.id === id) {
                return { ...task, done: !task.done };
            }

            return task;
        }));
    };

    const setAllDone = () => {
        setTasks(tasks => tasks.map(task => (
            { ...task, done: true }
        )));
    };

    const addNewTask = (content) => {
        setTasks(tasks => [
            ...tasks,
            {
                content,
                done: false,
                id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
            },
        ]);
    };

    return {
        tasks,
        removeTask,
        toggleTaskDone,
        setAllDone,
        addNewTask,
    };
};