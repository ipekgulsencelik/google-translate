import TextBox from "./components/text-box/TextBox";
import Arrows from "./components/arrows/Arrows";
import Button from "./components/button/Button";
import Modal from "./components/modal/Modal";

const App = () => {
  return (
    <div className="App">
      <TextBox style="input" />
      <div className="arrow-container">
        <Arrows />
      </div>
      <TextBox style="output" />
    </div>
  );
};

export default App;
