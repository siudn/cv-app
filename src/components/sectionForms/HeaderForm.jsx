import { useState } from "react";
import Input from "../Input";

function HeaderForm({ onUpdate }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const handleUpdate = (key, value) => {
    const newFormData = {
      ...formData,
      [key]: value,
    };
    setFormData(newFormData);
    onUpdate(newFormData);
  };

  return (
    <div className="bg-gray-300 flex flex-col gap-1 p-4 rounded-2xl">
      <Input
        id="name"
        type="text"
        value={formData.name}
        onChange={(e) => handleUpdate("name", e.target.value)}
        labelText="Name"
      ></Input>
      <Input
        id="email"
        type="text"
        value={formData.email}
        onChange={(e) => handleUpdate("email", e.target.value)}
        labelText="Email"
      ></Input>
      <Input
        id="phone"
        type="text"
        value={formData.phone}
        onChange={(e) => handleUpdate("phone", e.target.value)}
        labelText="Phone"
      ></Input>
      <Input
        id="address"
        type="text"
        value={formData.address}
        onChange={(e) => handleUpdate("address", e.target.value)}
        labelText="Address"
      ></Input>
    </div>
  );
}

export default HeaderForm;
