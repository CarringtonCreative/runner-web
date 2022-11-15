import { Guid } from "guid-typescript";
import { SKILL_LEVEL } from "../utils/common";

import {
  EXECUTIVE_ASSISTANT,
  EXECUTIVE_ASSISTANT_SKILL,
} from "./executiveAssistant";
import { HUMAN_RESOURCES, HUMAN_RESOURCES_SKILL } from "./humanResources";
import { OPERATIONS, OPERATIONS_SKILL } from "./operation";

export type SkillLevel = {
  key: typeof SKILL_LEVEL;
  value: number;
};

export type SkillName = {
  key:
    | typeof EXECUTIVE_ASSISTANT_SKILL
    | typeof HUMAN_RESOURCES_SKILL
    | typeof OPERATIONS_SKILL;
  value: string;
};

type Skill = {
  id: string;
  levelKey: typeof SKILL_LEVEL;
  levelValue: number;
  nameKey:
    | typeof EXECUTIVE_ASSISTANT_SKILL
    | typeof HUMAN_RESOURCES_SKILL
    | typeof OPERATIONS_SKILL;
  nameValue: string;
  roleKey: EXECUTIVE_ASSISTANT.KEY | HUMAN_RESOURCES.KEY | OPERATIONS.KEY;
  roleValue:
    | EXECUTIVE_ASSISTANT.VALUE
    | HUMAN_RESOURCES.VALUE
    | OPERATIONS.VALUE;
  weight: number;
};

export default Skill;
