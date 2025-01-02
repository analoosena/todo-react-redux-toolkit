import { ButtonAdd, MainContainer, Title, Selecao } from "./styles";
import { NovaTask } from "./styles";
import { useState } from "react";

type Props = {
  addTask: (task: string) => void;
  changeFilter: string;
  newFilter: React.Dispatch<React.SetStateAction<string>>;
};
const InputTarefas = (props: Props) => {
  const [task, setTask] = useState("");

  const handleTask = () => {
    props.addTask(task);
    setTask("");
  };
  return (
    <>
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
        <Selecao value={props.changeFilter} onChange={(e)=> props.newFilter(e.target.value)}>
          <option value="all">Todas</option>
          <option value="pending">Pendentes</option>
          <option value="completed">Finalizadas</option>
        </Selecao>
      </MainContainer>
    </>
  );
};

export default InputTarefas;
