import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Container from "./Container";

let hideDoneTask = false;

let tasks = [
  {
    id: 1,
    content: "lekcja pianina",
    done: true,
  },
  {
    id: 2,
    content: "spotkanie 16:30",
    done: false,
  },
];

function App() {
  return (
    <Container>
      <h1>Lista zadań</h1>
      <Section
        title="Dodaj nowe zadanie"
        body={<Form />}
      />

      <Section
        title="Lista zadań"
        body={<Tasks tasks={tasks} hideDoneTask={hideDoneTask} />}
        extraHeaderContent={<Buttons tasks={tasks} hideDoneTask={hideDoneTask} />}
      />
    </Container>
  );
}

export default App;
