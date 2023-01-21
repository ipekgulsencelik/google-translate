import "./style.css";

import DropDown from "../drop-down/DropDown";

const TextBox = ({ selectedLanguage, style, setShowModal }) => {
  return (
    <div className={style}>
      <DropDown
        style={style}
        setShowModal={setShowModal}
        selectedLanguage={selectedLanguage}
      />
      <textarea
        placeholder={style === "input" ? "Enter Text" : "Translation"}
        disabled={style === "output"}
      />
    </div>
  );
};

export default TextBox;
