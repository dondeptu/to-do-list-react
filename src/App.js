import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Container from "./Container";
import { useState } from "react";
import { useTasks } from "./useTasks";

function App() {
  const [hideDoneTask, setHideDoneTask] = useState(false);

  const toggleHideDoneTask = () => {
    setHideDoneTask(hideDoneTask => !hideDoneTask);
  };

  const {
    tasks,
    removeTask,
    toggleTaskDone,
    setAllDone,
    addNewTask,
  } = useTasks();

  return (
    <Container>
      <h1>Lista zadań</h1>
      <Section
        title="Dodaj nowe zadanie"
        body={<Form addNewTask={addNewTask} />}
      />

      <Section
        title="Lista zadań"
        body={
          <Tasks
            tasks={tasks}
            hideDoneTask={hideDoneTask}
            removeTask={removeTask}
            toggleTaskDone={toggleTaskDone}
          />}
        extraHeaderContent={
          <Buttons
            tasks={tasks}
            hideDoneTask={hideDoneTask}
            toggleHideDoneTask={toggleHideDoneTask}
            setAllDone={setAllDone}
          />}
      />
    </Container>
  );
}

export default App;
