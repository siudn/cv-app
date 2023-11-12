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
    <div className="min-h-screen min-w-full flex">
      <div className="flex flex-col justify-evenly content-center font-sans">
        <HeaderForm onUpdate={handleUpdate}></HeaderForm>
        <ExperienceForm onUpdate={handleUpdate}></ExperienceForm>
        <EducationForm onUpdate={handleUpdate}></EducationForm>
      </div>
      <div className="">
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
    </div>
  );
}

export default App;
