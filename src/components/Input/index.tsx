import { ButtonAdd, MainContainer, Title } from "./styles";
import { NovaTask } from "./styles";
import { useState } from "react";

type Props = {
  addTask: (task: string) => void;
}
const InputTarefas = (props: Props) => {
  const [task, setTask] = useState("");

  const handleTask = () => {
    props.addTask(task);
    setTask("");
  };
  return (
    <MainContainer>
      <Title>Lista de Tarefas</Title>
      <NovaTask
        value={task}
        onChange={(e) => setTask(e.target.value)}
        type="text"
        placeholder="Digite sua tarefa aqui"
      ></NovaTask>
      <ButtonAdd onClick={handleTask} type="button">
        ADD
      </ButtonAdd>
    </MainContainer>
  );
};

export default InputTarefas;
