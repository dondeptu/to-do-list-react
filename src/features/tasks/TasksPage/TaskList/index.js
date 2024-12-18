import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { List, Items, Content, Button } from "./styled";
import { toggleTaskDone, removeTask, selectTasksByQuery, selectHideDoneTask } from "../../tasksSlice";
import searchQueryParamName from "../searchQueryParamName";

const TaskList = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const query = searchParams.get(searchQueryParamName);

    const tasks = useSelector(state => selectTasksByQuery(state, query));
    const hideDoneTask = useSelector(selectHideDoneTask);

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
                        <Link to={`/zadania/${id}`}>{content}</Link>
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