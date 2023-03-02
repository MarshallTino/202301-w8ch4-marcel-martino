import { useAppSelector } from "../../features/hooks";
import "./displayStyled.css";
const Display = (): JSX.Element => {
  const display = useAppSelector((state) => {
    return state.calculator.display;
  });
  return <span className="calculator__display">{display}</span>;
};

export default Display;
