import { useSelector, useDispatch } from "react-redux";
import { Button, Wrapper } from "./styled";
import { selectTasksState, toggleHideDoneTask, setAllDone, selectHaveAnyTasks, selectIsEveryTaskDone } from "../tasksSlice";

const Buttons = () => {
    const { hideDoneTask } = useSelector(selectTasksState);
    const haveAnyTasks = useSelector(selectHaveAnyTasks);
    const isEveryTaskDone = useSelector(selectIsEveryTaskDone);

    const dispatch = useDispatch();
    return (
        <Wrapper>
            {haveAnyTasks && (
                <>
                    <Button onClick={() => dispatch(toggleHideDoneTask())}>
                        {hideDoneTask ? "Pokaż " : "Ukryj "}
                        ukończone
                    </Button>
                    <Button onClick={() => dispatch(setAllDone())} disabled={isEveryTaskDone}>
                        Ukończ wszystkie
                    </Button>
                </>
            )}
        </Wrapper>
    )
};

export default Buttons;