import { Guid } from "guid-typescript";
import {
  getRoleType,
  getWeight,
  getSkillLevel,
  getRoleAndSkill,
} from "../../utils/common";

import Skill, { SkillName, SkillLevel } from "../../types/skill";
import { EXECUTIVE_ASSISTANT } from "../../types/executiveAssistant";
import { HUMAN_RESOURCES } from "../../types/humanResources";
import { OPERATIONS } from "../../types/operation";

const createSkill = (
  id: string,
  level: SkillLevel,
  skill: SkillName,
  role: typeof EXECUTIVE_ASSISTANT | typeof HUMAN_RESOURCES | typeof OPERATIONS,
  weight: number
): Skill => {
  return {
    id,
    levelKey: level.key,
    levelValue: Number(level.value),
    nameKey: skill.key,
    nameValue: skill.value,
    roleKey: role.KEY,
    roleValue: role.VALUE,
    weight,
  } as Skill;
};

const getSkill = (): Skill => {
  const id: string = Guid.create().toString();
  const level = getSkillLevel();
  const key = getRoleType();
  const weight = getWeight();
  const { role, skill } = getRoleAndSkill(key);
  return createSkill(id, level, skill, role, weight);
};

const initSkills = (numberOfSkills: number = 100) => {
  const data: Skill[] = [];
  for (let i = 0; i < numberOfSkills; i++) {
    const skill: Skill = getSkill();
    data.push(skill);
  }
  return data;
};

export { initSkills };
