import { useState } from "react";
import HeaderForm from "./components/sectionForms/HeaderForm";
import Header from "./components/sections/Header";
import ExperienceForm from "./components/sectionForms/ExperienceForm";
import Experience from "./components/sections/Experience";
import EducationForm from "./components/sectionForms/EducationForm";
import Education from "./components/sections/Education";

function App() {
  const [cvData, setCvData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    company: "",
    position: "",
    date: "",
    city: "",
    desc: "",
    school: "",
    majorDegree: "",
    schoolDate: "",
    schoolLocation: "",
    schoolDesc: "",
  });

  const handleUpdate = (data) => {
    setCvData({ ...cvData, ...data });
  };

  return (
    <div>
      <HeaderForm onUpdate={handleUpdate}></HeaderForm>
      <ExperienceForm onUpdate={handleUpdate}></ExperienceForm>
      <EducationForm onUpdate={handleUpdate}></EducationForm>
      <Header
        name={cvData.name}
        email={cvData.email}
        phone={cvData.phone}
        address={cvData.address}
      ></Header>
      <Experience
        company={cvData.company}
        position={cvData.position}
        date={cvData.date}
        city={cvData.city}
        desc={cvData.desc}
      ></Experience>
      <Education
        school={cvData.school}
        majorDegree={cvData.majorDegree}
        schoolDate={cvData.schoolDate}
        schoolLocation={cvData.schoolLocation}
        schoolDesc={cvData.schoolDesc}
      ></Education>
    </div>
  );
}

export default App;
