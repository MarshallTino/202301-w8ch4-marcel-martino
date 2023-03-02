import { clearDisplayActionCreator } from "../../features/calculatorSlice/calculatorSlice";
import { useAppDispatch } from "../../features/hooks";
import "./clearButtonStyled.css";
const ClearButton = (): JSX.Element => {
  const dispatch = useAppDispatch();

  const clearButtonAction = () => {
    dispatch(clearDisplayActionCreator());
  };

  return (
    <button className="keyboard__clear-button" onClick={clearButtonAction}>
      Clear
    </button>
  );
};

export default ClearButton;
