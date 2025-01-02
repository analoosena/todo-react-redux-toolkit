import { useState } from "react";
import GlobalStyle from ".";
import InputTarefas from "./components/Input";
import ListaRenderizada from "./components/Lista";

function App() {
  const [listaTask, setListaTask] = useState<string[]>([]);
  const [completedTask, setCompletedTask] = useState<boolean[]>([]);
  const [filter, setFilter] = useState("all");

  const addTask = (newTask: string) => {
    if (newTask) {
      setListaTask((prevTasks) => [...prevTasks, newTask]);
      setCompletedTask((prev) => [...prev, false]);
    }
  };

  const getCompletedTask = () => {
    const filteredTasks = listaTask.filter((_, index) => completedTask[index]);
    const filteredBooleans = completedTask.filter(
      (_, index) => completedTask[index]
    );
    return { tasks: filteredTasks, booleans: filteredBooleans };
  };
  const getPendingTask = () => {
    const filteredTasks = listaTask.filter((_, index) => !completedTask[index]);
    const filteredBooleans = completedTask.filter(
      (_, index) => !completedTask[index]
    );
    return { tasks: filteredTasks, booleans: filteredBooleans };
  };
  const FilteredTasks = () => {
    switch (filter) {
      case "completed":
        return getCompletedTask();
      case "pending":
        return getPendingTask();
      default:
        return { tasks: listaTask, booleans: completedTask};
    }
  };
  return (
    <>
      <GlobalStyle />
      <InputTarefas
        changeFilter={filter}
        addTask={addTask}
        newFilter={setFilter}
      />
      <ListaRenderizada
        tasks={FilteredTasks().tasks}
        completedTask={FilteredTasks().booleans}
        setCompletedTask={setCompletedTask}
      />
    </>
  );
}

export default App;
