import Display from "../Display/Display";
import Keyboard from "../Keyboard/Keyboard";
import "./calculatorStyled.css";
const Calculator = (): JSX.Element => {
  return (
    <div className="calculator">
      <Display />
      <Keyboard />
    </div>
  );
};

export default Calculator;
