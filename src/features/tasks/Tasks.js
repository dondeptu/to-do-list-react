import Form from "./Form";
import TaskList from "./TaskList";
import Buttons from "./Buttons";
import Section from "../../common/Section";
import { useState } from "react";
import { useTasks } from "../../useTasks";
import { Wrapper } from "../../Wrapper";

function Tasks() {
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
    <Wrapper>
      <h1>Lista zadań</h1>
      <Section
        title="Dodaj nowe zadanie"
        body={<Form addNewTask={addNewTask} />}
      />

      <Section
        title="Lista zadań"
        body={
          <TaskList
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
    </Wrapper>
  );
}

export default Tasks;
