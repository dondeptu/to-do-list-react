import "./style.css";

const Buttons = ({ tasks, hideDoneTask, toggleHideDoneTask, setAllDone }) => (
    <div className="buttons">
        {tasks.length > 0 && (
            <>
                <button onClick={toggleHideDoneTask} className="buttons__button">
                    {hideDoneTask ? "Pokaż " : "Ukryj "}
                    ukończone
                </button>
                <button onClick={setAllDone} className="buttons__button" disabled={tasks.every(({ done }) => done)}>
                    Ukończ wszystkie
                </button>
            </>
        )}
    </div>
);

export default Buttons;