import Form from "./Form";
import TaskList from "./TaskList";
import Buttons from "./Buttons";
import Section from "../../common/Section";
import { Wrapper } from "../../Wrapper";
import FetchExampleTasksButton from "./fetchExampleTasksButton";

function Tasks() {
  return (
    <Wrapper>
      <h1>Lista zadań</h1>
      <Section
        title="Dodaj nowe zadanie"
        extraHeaderContent={<FetchExampleTasksButton />}
        body={<Form />}
      />

      <Section
        title="Lista zadań"
        body={<TaskList />}
        extraHeaderContent={<Buttons />}
      />
    </Wrapper>
  );
}

export default Tasks;
