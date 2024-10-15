import { Button, Wrapper } from "./styled";

const Buttons = ({ tasks, hideDoneTask, toggleHideDoneTask, setAllDone }) => (
    <Wrapper>
        {tasks.length > 0 && (
            <>
                <Button onClick={toggleHideDoneTask}>
                    {hideDoneTask ? "Pokaż " : "Ukryj "}
                    ukończone
                </Button>
                <Button onClick={setAllDone} disabled={tasks.every(({ done }) => done)}>
                    Ukończ wszystkie
                </Button>
            </>
        )}
    </Wrapper>
);

export default Buttons;