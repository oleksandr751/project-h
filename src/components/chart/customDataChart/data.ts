import { IRatioBarData } from "../../../interfaces";

export const data = [
  {
    id: 0,
    type: "aircraft",
    colors: { colorA: "#D24F4F", colorB: "#4F54D2" },
    values: { a: 3000, b: 3000 },
  },
  {
    id: 1,
    type: "tanks",
    colors: { colorA: "#D24F4F", colorB: "#4F54D2" },
    values: { a: 20000, b: 23000 },
  },
  {
    id: 2,
    type: "troops",
    colors: { colorA: "#D24F4F", colorB: "#4F54D2" },
    values: { a: 200000, b: 150000 },
  },
] as IRatioBarData[];
