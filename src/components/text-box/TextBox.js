import DropDown from "../drop-down/DropDown";

const TextBox = ({ style }) => {
  return (
    <div>
      <DropDown />
      <textarea
        placeholder={style === "input" ? "Enter Text" : "Translation"}
        disabled={style === "output"}
      />
    </div>
  );
};

export default TextBox;
