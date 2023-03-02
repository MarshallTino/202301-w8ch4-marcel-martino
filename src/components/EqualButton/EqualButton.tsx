import {
  clearDisplayActionCreator,
  updateDisplayActionCreator,
} from "../../features/calculatorSlice/calculatorSlice";
import { useAppDispatch, useAppSelector } from "../../features/hooks";

const EqualButton = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const operation = useAppSelector((state) => {
    return state.calculator.operation;
  });

  function resolve(expression: string) {
    const tokens = expression.split(/\b/);
    let result = parseInt(tokens[0]);
    for (let i = 1; i < tokens.length; i += 2) {
      const operator = tokens[i].trim();
      const operand = parseInt(tokens[i + 1]);
      if (operator === "+") {
        result += operand;
      } else if (operator === "-") {
        result -= operand;
      } else if (operator === "*") {
        result *= operand;
      } else if (operator === "/") {
        result /= operand;
      }
    }
    return result;
  }

  const equalButtonAction = () => {
    dispatch(updateDisplayActionCreator(resolve(operation)));
    dispatch(clearDisplayActionCreator);
  };

  return (
    <button className="keyboard__equal-button" onClick={equalButtonAction}>
      =
    </button>
  );
};

export default EqualButton;
