import "./style.css";

import DropDown from "../drop-down/DropDown";

const TextBox = ({ selectedLanguage, style }) => {
  return (
    <div className={style}>
      <DropDown selectedLanguage={selectedLanguage} />
      <textarea
        placeholder={style === "input" ? "Enter Text" : "Translation"}
        disabled={style === "output"}
      />
    </div>
  );
};

export default TextBox;
