import { useDispatch, useSelector } from "react-redux";
import { List, Items, Content, Button, StyledLink } from "./styled";
import { toggleTaskDone, removeTask, selectTasksByQuery, selectHideDoneTask } from "../../tasksSlice";
import searchQueryParamName from "../searchQueryParamName";
import { useQueryParameter } from "../queryParameters";
import { toTask } from "../../../../routes";

const TaskList = () => {
    const query = useQueryParameter(searchQueryParamName);

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
                        <StyledLink to={toTask({ id: id })}>{content}</StyledLink>
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