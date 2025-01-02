import { Lista } from "./styles";

type Props = {
  tasks: string[];

  completedTask: boolean[];
  setCompletedTask: React.Dispatch<React.SetStateAction<boolean[]>>; // Função para atualizar o estado
};
const ListaRenderizada = ({tasks, completedTask, setCompletedTask}: Props) => {

//confere se o checkbox foi clicado
  const isItCompleted = (index: number) => {
    setCompletedTask((prev) => {
      const updatedTasks = prev.map((completed, i) =>
        i === index ? !completed : completed
      );
      console.log(`Estado atualizado:`, updatedTasks);
      return updatedTasks;
    });
  };

  //quando o checkbox for clicado passar a fazer parte das tafefas finalizadas

  return (
    <Lista>
      {tasks.map((item, index) => (
        <li
          key={index}
          className={completedTask[index] ? "completed" : "pending"}
        >
          <input
            type="checkbox"
            checked={completedTask[index]}
            onChange={() => isItCompleted(index)}
          />
          {item}
        </li>
      ))}
    </Lista>
  );
};
export default ListaRenderizada;
