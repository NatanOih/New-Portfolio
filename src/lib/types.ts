import { links } from "./data";

export type SectionName = (typeof links)[number]["name"];

export type mousePosType = { x: number; y: number };
