import { createSlice } from "@reduxjs/toolkit";
import { FaFigma, FaGitAlt, FaGithubAlt, FaReact } from "react-icons/fa";
import {
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiJsonwebtokens,
  SiMongodb,
  SiReactrouter,
  SiTailwindcss,
  SiVercel,
} from "react-icons/si";

const dataSlice = createSlice({
  name: "datas",
  initialState: {
    color: "#65A8FA",
    skills: [
      { toolName: "Javascript", icon: <SiJavascript />, lavel: "Intermediate" },
      { toolName: "React", icon: <FaReact />, lavel: "Intermediate" },
      { toolName: "Express.js", icon: <SiExpress />, lavel: "Intermediate" },
      { toolName: "MongoDB", icon: <SiMongodb />, lavel: "Intermediate" },
      { toolName: "Firebase", icon: <SiFirebase />, lavel: "Intermediate" },
      { toolName: "Tailwind", icon: <SiTailwindcss />, lavel: "Advanced" },
      { toolName: "Figma", icon: <FaFigma />, lavel: "Intermediate" },
      { toolName: "React", icon: <SiReactrouter />, lavel: "Intermediate" },
      { toolName: "JWT", icon: <SiJsonwebtokens />, lavel: "Intermediate" },
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
