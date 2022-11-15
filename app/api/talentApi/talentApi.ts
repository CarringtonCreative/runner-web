import { faker } from "@faker-js/faker";
import { Guid } from "guid-typescript";

import { getRole, getHourlyRate, getWeeklyHours } from "../../utils/common";

import Talent from "../../types/talent";

const createTalent = () => {
  const id: string = Guid.create().toString();

  const talent: Talent = {
    id,
    name: faker.name.fullName(),
    email: faker.internet.email(),
    role: getRole(),
    hourlyRateUsd: getHourlyRate(),
    weeklyAvailability: getWeeklyHours(),
  };
  return talent;
};

const initTalent = (limit = 10) => {
  const data: Talent[] = [];
  for (let i = 0; i < limit; i++) {
    const talent: Talent = createTalent();
    data.push(talent);
  }
  return data;
};

export { initTalent };
