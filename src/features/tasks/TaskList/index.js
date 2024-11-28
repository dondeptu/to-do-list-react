import { useDispatch, useSelector } from "react-redux";
import { List, Items, Content, Button } from "./styled";
import { selectTasksState, toggleTaskDone, removeTask } from "../tasksSlice";

const TaskList = () => {
    const { tasks, hideDoneTask } = useSelector(selectTasksState);
    const dispatch = useDispatch();
    return (
        <List>
            {tasks.map(({ id, content, done }) => (
                <Items
                    key={id}
                    hidden={done && hideDoneTask}
                >
                    <Button
                        $toggleDone
                        onClick={() => dispatch(toggleTaskDone(id))}
                    >
                        {done ? "✔" : ""}
                    </Button>
                    <Content $done={done}>
                        {content}
                    </Content>
                    <Button
                        $remove
                        onClick={() => dispatch(removeTask(id))}
                    >
                        🗑
                    </Button>
                </Items>
            ))}
        </List>
    )
};

export default TaskList;