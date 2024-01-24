import { useState } from "react";
import Form from "./components/Form";
import Logo from "./components/Logo";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";

function App() {
  let [items, setItems] = useState([]);
  return (
    <>
      <Logo />
      <Form items={items} setItems={setItems} />
      <PackingList items={items} setItems={setItems} />
      <Stats items={items} />
    </>
  );
}

export default App;
