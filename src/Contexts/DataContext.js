import { useContext, createContext, useState } from "react";

const initialSkillsData = [
  {
    name: "C",
    src: "./C.png",
  },
  {
    name: "C++",
    src: "./C++.png",
  },
  {
    name: "Java",
    src: "Java.png",
  },
  {
    name: "Python",
    src: "Python.png",
  },
  {
    name: "Git",
    src: "Git.png",
  },
  {
    name: "BootStrap",
    src: "BootStrap.png",
  },
  {
    name: "JavaScript",
    src: "JavaScript.png",
  },
  {
    name: "JQuery",
    src: "JQuery.png",
  },
  {
    name: "FireBase",
    src: "FireBase.png",
  },
  {
    name: "ReactJs",
    src: "ReactJs.png",
  },
  {
    name: "NodeJs",
    src: "NodeJs.png",
  },
  {
    name: "PHP",
    src: "PHP.png",
  },
  {
    name: "Mysql",
    src: "Mysql.png",
  },
];

const DataContext = createContext();
export const useDataContex = () => useContext(DataContext);

function DataContextProvider(props) {
  const [skillsData, setSkillsData] = useState(initialSkillsData);
  const [experienceData, setExperienceData] = useState();
  const [educationData, setEducationData] = useState();
  const [projectsData, setProjectsData] = useState();

  const value = {
    skillsData,
    setSkillsData,
    experienceData,
    setExperienceData,
    educationData,
    setEducationData,
    projectsData,
    setProjectsData,
  };

  return (
    <DataContext.Provider value={value}>{props.children}</DataContext.Provider>
  );
}

export default DataContextProvider;
