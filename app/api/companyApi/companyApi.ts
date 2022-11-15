import { faker } from "@faker-js/faker";
import { Guid } from "guid-typescript";
import Company from "../../types/company";
import { getPositions } from "../../utils/common";

const createCompany = () => {
  const id: string = Guid.create().toString();
  const company: Company = {
    id,
    avatar: faker.image.business(320, 320, true),
    name: faker.company.name(),
    email: faker.internet.email(),
    phone: faker.phone.number(),
    positions: [getPositions()],
    address: faker.address.streetAddress(),
    description: faker.company.bs(),
  };
  return company;
};

const initCompanies = (limit = 10) => {
  const data: Company[] = [];
  for (let i = 0; i < limit; i++) {
    const company: Company = createCompany();
    data.push(company);
  }
  return data;
};

export { initCompanies };
