import {
  addToOperationActionCreator,
  updateDisplayActionCreator,
} from "../../features/calculatorSlice/calculatorSlice";
import { useAppDispatch } from "../../features/hooks";
import "./buttonStyled.css";
interface KeyProps {
  keyValue: number | string;
}
const Key = ({ keyValue }: KeyProps): JSX.Element => {
  const dispatch = useAppDispatch();

  const action = () => {
    dispatch(updateDisplayActionCreator(keyValue));
    dispatch(addToOperationActionCreator(keyValue));
  };

  return (
    <li>
      <button className="keyboard__button" onClick={action}>
        {keyValue}
      </button>
    </li>
  );
};

export default Key;
