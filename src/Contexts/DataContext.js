import { useContext, createContext, useState, useEffect } from "react";

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

const initialExperienceData = [
  {
    title: "Stamford University Bangladesh",
    platform: "(Student)",
    time: "January 2019 To Present",
  },
  {
    title: "Web Development",
    platform: "(Self)",
    time: "January 2022 To Present",
  },
  {
    title: "Problem Solving [C++ , Java]",
    platform: "(Hackerrank)",
    time: "January 2020 To Present",
  },
];

const initialEducationData = [
  {
    title: "Stamford University Bangladesh",
    platform: "Bachalor Of Science (Cse)",
    gpa: "CGPA : 3.75 (Approx)",
    time: "January 2019 To Present",
  },
  {
    title: "Dr. Mahbubur Rahman Mollah Collage, Dhaka",
    platform: "Higher School Certificate(Hsc)",
    gpa: "GPA : 4.83",
    time: "2016 - 2018",
  },
  {
    title: "Mohiuddin Badal Collegiate School, Dhaka",
    platform: "Secondary School Certificate(Ssc)",
    gpa: "GPA: 4.94",
    time: "2005 - 2016",
  },
];

const initialProjectData = [
  {
    imageUrl: "./Project.png",
    url: "https://polinkhan.github.io/freechat/",
    update: "working on",
    title: "Realtime Chat Application",
    link: "https://github.com/Polinkhan/freechat.git",
    using: "Html, Css, Bootstrap, JavaScript, Jquery, Nodejs(Socket) ",
  },
  {
    imageUrl: "./Project.png",
    url: "https://memo-app-react.herokuapp.com/",
    update: "new",
    title: "Shop Stock Maintenance",
    link: "https://github.com/Polinkhan/freechat.git",
    using: "Html, Css, React, Firebase ",
  },
  {
    imageUrl: "./Project.png",
    update: "new",
    title: "Bangla Licence Plate Detection Using Machine Learning",
    link: "https://github.com/Polinkhan/",
    using: "Computer Vision, Python, Machine Learning & Deep learning",
  },
  {
    imageUrl: "./Project.png",
    update: "new",
    title: "Sample Project",
    link: "https://github.com/Polinkhan/",
    using: ".....",
  },
];

const DataContext = createContext();
export const useDataContex = () => useContext(DataContext);

function DataContextProvider(props) {
  const [isPassBool, setPassBool] = useState(false);
  const [skillsData, setSkillsData] = useState(initialSkillsData);
  const [experienceData, setExperienceData] = useState(initialExperienceData);
  const [educationData, setEducationData] = useState(initialEducationData);
  const [projectsData, setProjectsData] = useState(initialProjectData);

  const value = {
    isPassBool,
    setPassBool,
    skillsData,
    setSkillsData,
    experienceData,
    setExperienceData,
    educationData,
    setEducationData,
    projectsData,
    setProjectsData,
  };

  return <DataContext.Provider value={value}>{props.children}</DataContext.Provider>;
}

export default DataContextProvider;
