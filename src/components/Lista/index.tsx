import { useState } from "react";
import { Lista } from "./styles";

type Props = {
  tasks: string[];
};
const ListaRenderizada = (props: Props) => {
  //quando o checkbox for clicado eu quero que mude de cor
  const [completedTask, setCompletedTask] = useState<boolean[]>(
    props.tasks.map(() => true)
  );

  const checkTask = (index: number) => {
    console.log(`Checkbox clicado no índice: ${index}`);
    setCompletedTask((prev) =>
      prev.map((completed, i) => i===index? !completed : completed)
    );
  };


  //quando o checkbox for clicado passar a fazer parte das tafefas finalizadas
  return (
    <Lista>
      {props.tasks.map((item, index) => (
        <li
          key={index}
          className={completedTask[index] ? "completed" : "pending"}
        >
          <input
            type="checkbox"
            checked={completedTask[index]}
            onChange={() => checkTask(index)}
          />
          {item}
        </li>
      ))}
    </Lista>
  );
};
export default ListaRenderizada;
