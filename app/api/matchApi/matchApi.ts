import Company from "../../types/company";
import Talent from "../../types/talent";

const capitalizeWords = (words: string) => {
  const data = words.split(" ");
  return data
    .map((word: string) => {
      return word[0].toUpperCase() + word.substring(1);
    })
    .join(" ");
};

const initCompanyMatches = (companies: Company[]) => {
  const matches: any = { companies: {} };
  for (let company of companies) {
    if (!matches.companies[company.id]) {
      const { name, email, positions, description, avatar, phone, address } =
        company;
      const skills = Object.values(positions[0].skills);
      const updatedDescription = capitalizeWords(description);
      matches.companies[company.id] = {
        candidates: {},
        name,
        email,
        position: positions[0].label,
        skills,
        description: updatedDescription,
        avatar,
        phone,
        address,
      };
    }
  }
  return matches;
};

const findMatches = (companies: Company[], talents: Talent[]) => {
  const matches = initCompanyMatches(companies);
  for (let company of companies) {
    const positions = company.positions;
    for (let position of positions) {
      const { key: positionKey, skills: positionSkills } = position;
      for (let talent of talents) {
        const { key: roleKey, skills: talentSkills } = talent.role;
        if (positionKey === roleKey) {
          const positionsSkillsKeys = Object.keys(positionSkills);
          const talentSkillsKeys = Object.keys(talentSkills);
          for (let positionsSkillsKey of positionsSkillsKeys) {
            for (let talentSkillsKey of talentSkillsKeys) {
              if (positionsSkillsKey == talentSkillsKey) {
                const {
                  id: talentId,
                  name: talentName,
                  email: emailName,
                  hourlyRateUsd,
                  weeklyAvailability,
                } = talent;

                if (!matches.companies[company.id].candidates[talentId]) {
                  matches.companies[company.id].candidates[talentId] = {
                    id: talentId,
                    name: talentName,
                    email: emailName,
                    hourlyRateUsd,
                    weeklyAvailability,
                    skills: [],
                  };
                }
                matches.companies[company.id].candidates[talentId].skills.push(
                  talentSkills[talentSkillsKey as any]
                );
              }
            }
          }
        }
      }
    }
  }
  return matches as any;
};

export { findMatches };
