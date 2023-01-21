import { useEffect, useState } from "react";
import axios from "axios";

import TextBox from "./components/text-box/TextBox";
import Arrows from "./components/arrows/Arrows";
import Button from "./components/button/Button";
import Modal from "./components/modal/Modal";

const App = () => {
  const [inputLanguage, setInputLanguage] = useState("Turkish");
  const [outputLanguage, setOutputLanguage] = useState("English");
  const [languages, setLanguages] = useState(null);

  const [showModal, setShowModal] = useState(null);

  const [languageMap, setLanguageMap] = useState(new Map());

  const getLanguages = () => {
    const options = {
      method: "GET",
      url: "https://google-translate1.p.rapidapi.com/language/translate/v2/languages",
      headers: {
        "X-RapidAPI-Key": "6b5d9ea256msh2120b0d66e6f078p16642ejsn95a51d4014f3",
        "X-RapidAPI-Host": "google-translate1.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        response.data.data.languages.forEach((key) =>
          setLanguageMap(languageMap.set(`${key.name}`, `${key.language}`))
        );
        setLanguages([...languageMap.keys()]);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  useEffect(() => {
    getLanguages();
  }, []);

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
      {showModal && <Modal setShowModal={setShowModal} languages={languages} />}
    </div>
  );
};

export default App;
