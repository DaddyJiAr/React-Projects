import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import { useState } from "react";

function App() {

  // let mgaBabyKo = [
  //       'Haerin',
  //       'Wonyoung'
  //   ];

  // const handleSelectItem = (item: string) => {
  //   console.log(item);
  // }
  const[alertVisible, setVisible] = useState(false);

  return (
    <div>
      {/* <ListGroup items={mgaBabyKo} heading={"Mga Baby Ko"} onSelectItem={handleSelectItem}/> */}
      {alertVisible && <Alert onClose={() => setVisible(false)}>
        <p>Hello <strong>Bitch</strong></p>
      </Alert>}
      <Button text="Button" value="wala" onClick={() => setVisible(true)}></Button>

    </div>
  );
}

export default App;
