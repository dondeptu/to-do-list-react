import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import Section from "../../../common/Section";
import { Wrapper } from "../../../Wrapper";
import { useSelector } from "react-redux";
import { getTasksById } from "../tasksSlice";

function TaskPage() {
    const { id } = useParams();
    const task = useSelector(state => getTasksById(state, id));

    return (
        <Wrapper>
            <h1>Szczegóły zadania</h1>
            <Section
                title={task ? task.content : "Nie znaleziono zadania 😢"}
                body={
                    !!task && (
                        <>
                            <strong>Ukończono:</strong> {task.done ? "Tak" : "Nie"}
                        </>
                    )
                }
            />
        </Wrapper>
    );
}

export default TaskPage;
