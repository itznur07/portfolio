import { createSlice } from "@reduxjs/toolkit";
import { FaFigma, FaGitAlt, FaGithubAlt, FaReact } from "react-icons/fa";
import {
  SiAndroidstudio,
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiMongodb, SiNextdotjs, SiTailwindcss, SiVercel
} from "react-icons/si";

const dataSlice = createSlice({
  name: "datas",
  initialState: {
    color: "#8CD7FE",
    skills: [
      { toolName: "Javascript", icon: <SiJavascript />, lavel: "Intermediate" },
      { toolName: "React", icon: <FaReact />, lavel: "Intermediate" },
      { toolName: "Nextjs", icon: <SiNextdotjs />, lavel: "Junior" },
      { toolName: "Express.js", icon: <SiExpress />, lavel: "Junior" },
      { toolName: "MongoDB", icon: <SiMongodb />, lavel: "Junior" },
      { toolName: "React Native", icon: <SiAndroidstudio />, lavel: "Junior" },
      { toolName: "Firebase", icon: <SiFirebase />, lavel: "Junior" },
      {
        toolName: "Tailwindcss",
        icon: <SiTailwindcss />,
        lavel: "Advanced",
      },
      { toolName: "Figma", icon: <FaFigma />, lavel: "Intermediate" },
      { toolName: "Git", icon: <FaGitAlt />, lavel: "Intermediate" },
      { toolName: "Vercel", icon: <SiVercel />, lavel: "Intermediate" },
      { toolName: "Github", icon: <FaGithubAlt />, lavel: "Advanced" },
    ],
  },
  reducers: {
    changeColor: (state, action) => {
      state.color = action.payload;
    },
  },
});

export const { changeColor, changeSkills } = dataSlice.actions;

export default dataSlice.reducer;
