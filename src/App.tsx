import { useState } from "react";
import GlobalStyle from ".";
import InputTarefas from "./components/Input";
import ListaRenderizada from "./components/Lista";

function App() {
  const [ listaTask, setListaTask ] = useState<string[]>([]);
  console.log(listaTask);

  const addTask = (newTask: string) => {
    if (newTask) {
      setListaTask((prevTasks) => [...prevTasks, newTask])
    }
  }
  return (
    <>
      <GlobalStyle/>
      <InputTarefas addTask={addTask} />
      <ListaRenderizada tasks={listaTask}/>
    </>
  );
}

export default App;
