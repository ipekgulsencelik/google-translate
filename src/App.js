import { useEffect, useState } from "react";

import TextBox from "./components/text-box/TextBox";
import Arrows from "./components/arrows/Arrows";
import Button from "./components/button/Button";
import Modal from "./components/modal/Modal";

const App = () => {
  const [inputLanguage, setInputLanguage] = useState("Turkish");
  const [outputLanguage, setOutputLanguage] = useState("English");

  const [showModal, setShowModal] = useState(null);

  const handleClick = () => {
    setInputLanguage(outputLanguage);
    setOutputLanguage(inputLanguage);
  };

  return (
    <div className="App">
      {!showModal && (
        <>
          <TextBox
            selectedLanguage={inputLanguage}
            style="input"
            setShowModal={setShowModal}
          />
          <div className="arrow-container" onClick={handleClick}>
            <Arrows />
          </div>
          <TextBox
            selectedLanguage={outputLanguage}
            style="output"
            setShowModal={setShowModal}
          />
        </>
      )}
      {showModal && <Modal />}
    </div>
  );
};

export default App;
