import { TagProps } from "./Tag";
import { TagsProps } from "./Tags";

export const tag = {
  primary: true,
  label: "Operations",
  color: "#fff",
  backgroundColor: "#D64933",
} as TagProps;

export const tags = [
  {
    primary: true,
    label: "Operations",
    color: "#fff",
    backgroundColor: "#D64933",
  },
  {
    primary: true,
    label: "Product Manager",
    color: "#fff",
    backgroundColor: "#FF7777",
  },
  {
    primary: true,
    label: "Project Manager",
    color: "#fff",
    backgroundColor: "#FF7777",
  },
  {
    primary: true,
    label: "Tech Savy",
    color: "#fff",
    backgroundColor: "#FF7777",
  },
  {
    primary: true,
    label: "Risk Management Focused",
    color: "#fff",
    backgroundColor: "#FF7777",
  },
  {
    primary: true,
    label: "Marketing",
    color: "#fff",
    backgroundColor: "#FF7777",
  },
];

export const companyRoles = [
  {
    primary: true,
    label: "Operations",
    color: "#fff",
    backgroundColor: "#D64933",
  },
  {
    primary: true,
    label: "Executive Assistant",
    color: "#fff",
    backgroundColor: "#186254",
  },
  {
    primary: true,
    label: "Human Resouces",
    color: "#fff",
    backgroundColor: "#194A7A",
  },
];

export const companyRolesTags = {
  tags: companyRoles,
  title: "Roles",
} as TagsProps;

export const tagSection = {
  tags,
  title: "Roles + Skills",
} as TagsProps;
