import { useState } from "react";
import Input from "./Input";

function HeaderForm({ onUpdate }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const handleUpdate = () => {
    onUpdate({ name, email, phone, address });
  };

  return (
    <div>
      <Input></Input>
      <Input></Input>
      <Input></Input>
      <Input></Input>
    </div>
  );
}
