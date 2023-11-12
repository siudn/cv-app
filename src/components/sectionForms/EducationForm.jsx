import { useState } from "react";
import Input from "../Input";

function EducationForm({ onUpdate }) {
  const [formData, setFormData] = useState({
    school: "",
    majorDegree: "",
    schoolDate: "",
    schoolLocation: "",
    schoolDesc: "",
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
        id="school"
        type="text"
        value={formData.school}
        onChange={(e) => handleUpdate("school", e.target.value)}
        labelText="School"
      ></Input>
      <Input
        id="majorDegree"
        type="text"
        value={formData.majorDegree}
        onChange={(e) => handleUpdate("majorDegree", e.target.value)}
        labelText="Major/Degree"
      ></Input>
      <Input
        id="schoolDate"
        type="text"
        value={formData.schoolDate}
        onChange={(e) => handleUpdate("schoolDate", e.target.value)}
        labelText="Start/End Date"
      ></Input>
      <Input
        id="schoolLocation"
        type="text"
        value={formData.schoolLocation}
        onChange={(e) => handleUpdate("schoolLocation", e.target.value)}
        labelText="Location"
      ></Input>
      <Input
        id="schoolDesc"
        type="text"
        value={formData.schoolDesc}
        onChange={(e) => handleUpdate("schoolDesc", e.target.value)}
        labelText="Description (optional)"
      ></Input>
    </div>
  );
}

export default EducationForm;
