import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Container from "./Container";
import exampleTask from "./sampleTasks";
import { useState } from "react";

function App() {
  const [hideDoneTask, setHideDoneTask] = useState(false);
  const [tasks, setTask] = useState(exampleTask);

  const toggleHideDoneTask = () => {
    setHideDoneTask(hideDoneTask => !hideDoneTask);
  };

  const removeTask = (id) => {
    setTask(tasks => tasks.filter(task => task.id !== id));
  };

  return (
    <Container>
      <h1>Lista zadań</h1>
      <Section
        title="Dodaj nowe zadanie"
        body={<Form />}
      />

      <Section
        title="Lista zadań"
        body={<Tasks tasks={tasks} hideDoneTask={hideDoneTask} removeTask={removeTask} />}
        extraHeaderContent={<Buttons tasks={tasks} hideDoneTask={hideDoneTask} toggleHideDoneTask={toggleHideDoneTask} />}
      />
    </Container>
  );
}

export default App;
