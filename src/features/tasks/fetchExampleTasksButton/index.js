import { useDispatch } from "react-redux";
import { Button } from "../Button";
import { fetchExampleTasks } from "../tasksSlice";


const FetchExampleTasksButton = () => {
    const dispatch = useDispatch();

    return (
        <Button onClick={() => dispatch(fetchExampleTasks())}>
            Pobierz przykładowe zadania
        </Button>
    );
};

export default FetchExampleTasksButton;