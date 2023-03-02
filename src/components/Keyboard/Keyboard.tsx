import EqualButton from "../EqualButton/EqualButton";
import Key from "../Button/Button";
import "./keyBoardStyled.css";
import ClearButton from "../Clearbutton/Clearbutton";
const Keyboard = (): JSX.Element => {
  return (
    <ul className="calculator__keyboard">
      <Key keyValue={0} />
      <Key keyValue={1} />
      <Key keyValue={2} />
      <Key keyValue={3} />
      <Key keyValue={4} />
      <Key keyValue={5} />
      <Key keyValue={6} />
      <Key keyValue={7} />
      <Key keyValue={8} />
      <Key keyValue={9} />
      <Key keyValue={"/"} />
      <Key keyValue={"*"} />
      <Key keyValue={"+"} />
      <Key keyValue={"-"} />
      <EqualButton />
      <ClearButton />
    </ul>
  );
};

export default Keyboard;
