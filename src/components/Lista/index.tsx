import { useDispatch, useSelector } from "react-redux";
import { Lista } from "./styles";
import { RootState } from "../../redux/store";
import { changeCheckbox } from "../../redux/task/reducer";

const ListaRenderizada = () => {
  const { tasks, taskboolean, filter } = useSelector(
    (state: RootState) => state.task
  );

  const dispatch = useDispatch();

  const handleCheckbox = (index: number) => {
    dispatch(changeCheckbox(index));
  };
  const tasksMapFilter = tasks.map((task, index) => ({
    task,
    isChecked: taskboolean[index],
    index,
  }));
  const taskFiltered = tasksMapFilter.filter(({ isChecked }) =>
    filter === "all" ? true : filter === "completed" ? isChecked : !isChecked
  );

  return (
    <Lista>
      {taskFiltered.map(({task, isChecked, index}) => (
        <li key={index}>
          <input
            type="checkbox"
            checked={isChecked}
            onChange={() => handleCheckbox(index)}
          />
          {task}
        </li>
      ))}
    </Lista>
  );
};
export default ListaRenderizada;
