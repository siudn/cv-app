import { useState, useEffect } from "react";
import HeaderForm from "./components/HeaderForm";
import Header from "./components/Header";

function App() {
  const [cvData, setCvData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const handleUpdate = (data) => {
    setCvData({ ...cvData, ...data });
  };

  return (
    <div>
      <HeaderForm onUpdate={handleUpdate}></HeaderForm>
      <Header
        name={cvData.name}
        email={cvData.email}
        phone={cvData.phone}
        address={cvData.address}
      ></Header>
    </div>
  );
}

export default App;
