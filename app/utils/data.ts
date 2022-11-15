import { initCompanies } from "../api/companyApi/companyApi";
import { initTalent } from "../api/talentApi/talentApi";
import { findMatches } from "../api/matchApi/matchApi";

const getData = () => {
  const companies = initCompanies(10);
  const talent = initTalent(10);
  const matches = findMatches(companies, talent);
  return { matches };
};

const data = getData();
export default data;
