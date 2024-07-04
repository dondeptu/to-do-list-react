import "./style.css";

const Tasks = ({ tasks, hideDoneTask }) => (
    <ul className="tasks">
        {tasks.map(({ id, content, done }) => (
            <li key={id} className={`tasks__items ${done && hideDoneTask ? "tasks__items--hidden" : ""}`}>
                <button className="tasks__button">
                    {done ? "✔" : ""}
                </button>
                <span className={`tasks__content ${done ? "tasks__content--done" : ""}`}>
                    {content}
                </span>
                <button className="tasks__button tasks__button--remove">
                    🗑
                </button>
            </li>
        ))}
    </ul>
);

export default Tasks;