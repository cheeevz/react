import Header from "./assets/components/Header.jsx";
import Entry from "./assets/components/Entry.jsx";
import data from "./assets/data.js";
// @ts-ignore
import "./index.css";

const entryElements = data.map((entry) => {
  return <Entry key={entry.id} {...entry} />;
});

function App() {
  return (
    <>
      <Header />
      {entryElements}
    </>
  );
}

export default App;
