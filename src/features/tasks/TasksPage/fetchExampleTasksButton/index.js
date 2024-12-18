import { useDispatch, useSelector } from "react-redux";
import { Button } from "../Button";
import { fetchExampleTasks, selectIsLoading } from "../../tasksSlice";


const FetchExampleTasksButton = () => {
    const dispatch = useDispatch();
    const loading = useSelector(selectIsLoading);

    return (
        <Button disabled={loading} onClick={() => dispatch(fetchExampleTasks())}>
            {loading ? "Ładowanie..." : "Pobierz przykładowe zadania"}
        </Button>
    );
};

export default FetchExampleTasksButton;