import { ReactNode } from "react";

export type profileUser = {
  name: ReactNode;
  about: ReactNode;
  imgUrl: string;
  imgAlt: string;
};

export type workProduct = {
  title: ReactNode;
  tag: ReactNode;
  siteUrl: string;
  imgUrl: string;
  imgAlt: string;
};

export type aboutSkill = {
  skillName: ReactNode;
  className: string;
  imgUrl: string;
  imgAlt: string;
};
