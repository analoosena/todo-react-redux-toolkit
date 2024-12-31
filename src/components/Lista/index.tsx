import { Lista } from "./styles";

type Props = {
  tasks: string[];
};
const ListaRenderizada = (props: Props) => {
  //quando o checkbox for clicado eu quero que mude de cor
  //quando o checkbox for clicado passar a fazer parte das tafefas finalizadas
  return (
    <Lista>
      {props.tasks.map((item, index) => (
        <li>
          <input type="checkbox" key={index} /> {item}
        </li>
      ))}

    </Lista>
  );
};
export default ListaRenderizada;
