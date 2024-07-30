import { List, Items, Content, Button } from "./styled";

const Tasks = ({ tasks, hideDoneTask, removeTask, toggleTaskDone }) => (
    <List>
        {tasks.map(({ id, content, done }) => (
            <Items
                key={id}
                hidden={done && hideDoneTask}
            >
                <Button
                    $toggleDone
                    onClick={() => toggleTaskDone(id)}
                >
                    {done ? "✔" : ""}
                </Button>
                <Content $done={done}>
                    {content}
                </Content>
                <Button
                    $remove
                    onClick={() => removeTask(id)}
                >
                    🗑
                </Button>
            </Items>
        ))}
    </List>
);

export default Tasks;