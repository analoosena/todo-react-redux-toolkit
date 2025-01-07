import { useDispatch, useSelector } from "react-redux";
import { ButtonAdd, MainContainer, Title, Selecao, NovaTask } from "./styles";
import { useState } from "react";
import {
  addTaskBoolean,
  addTaskT,
  changeFilter,
} from "../../redux/task/reducer";
import { RootState } from "../../redux/store";

const InputTarefas = () => {
  const [newtask, setNewtask] = useState("");

  const { filter } = useSelector((state: RootState) => state.task);

  const dispatch = useDispatch();

  const hangleAddTask = () => {
    if (newtask.length > 0) {
      dispatch(addTaskT(newtask));
      dispatch(addTaskBoolean());
      setNewtask("");
    }
  };
  const hangleFilter = (value: string) => {
    dispatch(changeFilter(value));
  };

  return (
    <>
      <MainContainer>
        <Title>Lista de Tarefas</Title>
        <NovaTask
          value={newtask}
          onChange={(e) => setNewtask(e.target.value)}
          type="text"
          placeholder="Digite sua tarefa aqui"
        ></NovaTask>
        <ButtonAdd onClick={hangleAddTask} type="button">
          ADD
        </ButtonAdd>
        <Selecao value={filter} onChange={(e) => hangleFilter(e.target.value)}>
          <option value="all">Todas</option>
          <option value="pending">Pendentes</option>
          <option value="completed">Finalizadas</option>
        </Selecao>
      </MainContainer>
    </>
  );
};

export default InputTarefas;
