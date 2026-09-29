import { useState } from "react";
import Header from "./assets/components/Header.jsx";
import Entry from "./assets/components/Entry.jsx";
// @ts-ignore
import "./index.css";

function App() {
  return (
    <>
      <Header />
      <Entry />
      <Entry />
      <Entry />
      <Entry />
    </>
  );
}

export default App;
