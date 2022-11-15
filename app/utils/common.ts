import ExecutiveAssistant, {
  EXECUTIVE_ASSISTANT,
  EXECUTIVE_ASSISTANT_SKILL,
} from "../types/executiveAssistant";
import HumanResources, {
  HUMAN_RESOURCES,
  HUMAN_RESOURCES_SKILL,
} from "../types/humanResources";
import Operations, { OPERATIONS, OPERATIONS_SKILL } from "../types/operation";
import Skill from "../types/skill";
import { Guid } from "guid-typescript";

export const randomEnum = <T>(
  anEnum: T
): { index: number; key: T; value: string } => {
  const keys = Object.keys(anEnum as object);
  const values = Object.values(anEnum as object);
  const index = Math.floor(Math.random() * keys.length);
  const key = keys[index] as T;
  const value = values[index];

  return { index, key, value };
};

export const randomEnumNum = <T>(
  anEnum: T
): { index: number; key: T; value: number } => {
  const keys = Object.keys(anEnum as object).filter((n) => isNaN(Number(n)));
  const values = Object.values(anEnum as object).filter(
    (n) => !isNaN(Number(n))
  );
  const index = Math.floor(Math.random() * keys.length);
  const key = keys[index] as T;
  const value = Number(values[index]);
  return { index, key, value };
};

export const getRoleAndSkill = (
  key: typeof EXECUTIVE_ASSISTANT | typeof HUMAN_RESOURCES | typeof OPERATIONS
): {
  role: typeof EXECUTIVE_ASSISTANT | typeof HUMAN_RESOURCES | typeof OPERATIONS;
  skill: { index: number; key: any; value: string };
} => {
  switch (key.KEY) {
    case EXECUTIVE_ASSISTANT.KEY:
      let executiveAssistantSkill = randomEnum(EXECUTIVE_ASSISTANT_SKILL);
      return { role: EXECUTIVE_ASSISTANT, skill: executiveAssistantSkill };
    case HUMAN_RESOURCES.KEY:
      let humanResourcesSkill = randomEnum(HUMAN_RESOURCES_SKILL);
      return { role: HUMAN_RESOURCES, skill: humanResourcesSkill };
    case OPERATIONS.KEY:
      let operationsSkill = randomEnum(OPERATIONS_SKILL);
      return { role: OPERATIONS, skill: operationsSkill };
    default:
      executiveAssistantSkill = randomEnum(EXECUTIVE_ASSISTANT_SKILL);
      return { role: EXECUTIVE_ASSISTANT, skill: executiveAssistantSkill };
  }
};

export const getSkillLevel = () => {
  return randomEnumNum(SKILL_LEVEL);
};

export const getExecutiveAssistantSkills = () => {
  const output = {} as any;
  const keys = Object.keys(EXECUTIVE_ASSISTANT_SKILL);
  const randomLength = Math.round(Math.random() * 100) % keys.length;
  for (let i = 0; i < randomLength; i++) {
    const skill = getSkill(EXECUTIVE_ASSISTANT);
    if (!output[String(skill.nameKey)]) {
      output[String(skill.nameKey)] = skill;
    }
  }
  return output;
};

export const getHumanResourcesSkills = () => {
  const output = {} as any;
  const keys = Object.keys(HUMAN_RESOURCES_SKILL);
  const randomLength = Math.round(Math.random() * 100) % keys.length;

  for (let i = 0; i < randomLength; i++) {
    const skill = getSkill(HUMAN_RESOURCES);
    if (!output[String(skill.nameKey)]) {
      output[String(skill.nameKey)] = skill;
    }
  }
  return output;
};

export const getOperationsSkills = () => {
  const output = {} as any;
  const keys = Object.keys(OPERATIONS_SKILL);
  const randomLength = Math.round(Math.random() * 100) % keys.length;

  for (let i = 0; i < randomLength; i++) {
    const skill = getSkill(OPERATIONS);
    if (!output[String(skill.nameKey)]) {
      output[String(skill.nameKey)] = skill;
    }
  }
  return output;
};

export const getWeight = (precision: number = 2) => {
  const weight = roundTo(Math.random(), precision);
  return weight;
};

export const getSkill = (
  type: typeof EXECUTIVE_ASSISTANT | typeof HUMAN_RESOURCES | typeof OPERATIONS
): Skill => {
  const id: string = Guid.create().toString();
  const skillLevel = getSkillLevel();
  const { role, skill } = getRoleAndSkill(type);
  const data: Skill = {
    id: id,
    levelKey: skillLevel.key,
    levelValue: Number(skillLevel.value),
    nameKey: skill.key,
    nameValue: skill.value,
    roleKey: role.KEY,
    roleValue: role.VALUE,
    weight: getWeight(),
  };
  return data;
};

export const getRoles = () => {
  const index = Math.floor(Math.random() * 100) % 3;
  switch (index) {
    case 0:
      return {
        executiveAssistant: [getExecutiveAssistant()],
      };
    case 1:
      return {
        humanResources: [getHumanResources()],
      };
    case 2:
      return {
        operations: [getOperations()],
      };
    default:
      return {
        executiveAssistant: [getExecutiveAssistant()],
      };
  }
};

export const getRole = () => {
  const index = Math.floor(Math.random() * 100) % 3;
  switch (index) {
    case 0:
      const executiveAssistant: ExecutiveAssistant = getExecutiveAssistant();
      return executiveAssistant;
    case 1:
      const humanResources: HumanResources = getHumanResources();
      return humanResources;
    case 2:
      const operations: Operations = getOperations();
      return operations;
    default:
      const defaultRole: ExecutiveAssistant = getExecutiveAssistant();
      return defaultRole;
  }
};

export const getRoleType = ():
  | typeof EXECUTIVE_ASSISTANT
  | typeof HUMAN_RESOURCES
  | typeof OPERATIONS => {
  let id: Guid = Guid.create();
  const index = Math.floor(Math.random() * 100) % 3;
  switch (index) {
    case 0:
      return EXECUTIVE_ASSISTANT;
    case 1:
      return HUMAN_RESOURCES;
    case 2:
      return OPERATIONS;
    default:
      return EXECUTIVE_ASSISTANT;
  }
};

export enum SKILL_LEVEL {
  ONE = 1,
  TWO = 2,
  THREE = 3,
  FOUR = 4,
  FIVE = 5,
}

export const getHourlyRate = (min = 20, max = 200, step = 5) => {
  const rates = [];
  for (let i = min; i < max; i += step) {
    rates.push(i);
  }
  const index = Math.floor(Math.random() * 100) % rates.length;
  return rates[index];
};

export const getWeeklyHours = (min = 10, max = 50, step = 5) => {
  const hours = [];
  for (let i = min; i < max; i += step) {
    hours.push(i);
  }
  const index = Math.floor(Math.random() * 100) % hours.length;
  return hours[index];
};

export const getExecutiveAssistant = () => {
  let id: string = Guid.create().toString();
  const skills = getExecutiveAssistantSkills();
  const executiveAssistant: ExecutiveAssistant = {
    id,
    key: EXECUTIVE_ASSISTANT.KEY,
    label: EXECUTIVE_ASSISTANT.VALUE,
    skills,
    hourlyRate: getHourlyRate(),
    weeklyHours: getWeeklyHours(),
  };
  return executiveAssistant;
};

export const getHumanResources = () => {
  let id: string = Guid.create().toString();
  const skills = getHumanResourcesSkills();
  const humanResources: HumanResources = {
    id,
    key: HUMAN_RESOURCES.KEY,
    label: HUMAN_RESOURCES.VALUE,
    skills,
    hourlyRate: getHourlyRate(),
    weeklyHours: getWeeklyHours(),
  };
  return humanResources;
};

export const getOperations = () => {
  let id: string = Guid.create().toString();
  const skills = getOperationsSkills();
  const humanResources: Operations = {
    id,
    key: OPERATIONS.KEY,
    label: OPERATIONS.VALUE,
    skills,
    hourlyRate: getHourlyRate(),
    weeklyHours: getWeeklyHours(),
  };
  return humanResources;
};

export const getPositions = () => {
  const index = Math.floor(Math.random() * 100) % 3;
  switch (index) {
    case 0:
      return getExecutiveAssistant();
    case 1:
      return getHumanResources();
    case 2:
      return getOperations();
    default:
      return getExecutiveAssistant();
  }
};

export const roundTo = (n: number, digits: number) => {
  let negative = false;
  if (digits === undefined) {
    digits = 0;
  }
  if (n < 0) {
    negative = true;
    n = n * -1;
  }
  let multiplicator = Math.pow(10, digits);
  n = parseFloat((n * multiplicator).toFixed(11));
  n = Number((Math.round(n) / multiplicator).toFixed(digits));
  if (negative) {
    n = Number((n * -1).toFixed(digits));
  }
  return n;
};
