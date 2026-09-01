import { links } from "./data";

export type SectionName = (typeof links)[number]["name"];

export type mousePosType = {
  x: number;
  y: number;
  pageY: number;
  pageX: number;
};

type localMousePosProps = {
  x: number;
  y: number;
};

export type FromtProps = {
  localMousePos: localMousePosProps;
  setisHidden: React.Dispatch<React.SetStateAction<any>>;
  isHidden: boolean;
};

export type hiddenProps = {
  isHidden: boolean;
};

export type projectObject = {
  src: string;
  description: string;
  title: string;
  category: string;
  link: string;
  gitLink: string;
};
