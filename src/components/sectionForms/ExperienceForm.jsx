import { useState } from "react";
import Input from "../Input";

function ExperienceForm({ onUpdate }) {
  const [formData, setFormData] = useState({
    company: "",
    position: "",
    date: "",
    city: "",
    desc: "",
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
        id="company"
        type="text"
        value={formData.company}
        onChange={(e) => handleUpdate("company", e.target.value)}
        labelText="Company"
      ></Input>
      <Input
        id="position"
        type="text"
        value={formData.position}
        onChange={(e) => handleUpdate("position", e.target.value)}
        labelText="Position"
      ></Input>
      <Input
        id="date"
        type="text"
        value={formData.date}
        onChange={(e) => handleUpdate("date", e.target.value)}
        labelText="Date"
      ></Input>
      <Input
        id="city"
        type="text"
        value={formData.city}
        onChange={(e) => handleUpdate("city", e.target.value)}
        labelText="Location"
      ></Input>
      <Input
        id="desc"
        type="text"
        value={formData.desc}
        onChange={(e) => handleUpdate("desc", e.target.value)}
        labelText="Description"
      ></Input>
    </div>
  );
}

export default ExperienceForm;
