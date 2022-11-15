import ExecutiveAssistant from "./executiveAssistant";
import HumanResources from "./humanResources";
import Operations from "./operation";

type Roles = {
  executiveAssistant?: ExecutiveAssistant;
  humanResources?: HumanResources;
  operations?: Operations;
};

type Talent = {
  id: string;
  name: string;
  email: string;
  hourlyRateUsd: number;
  weeklyAvailability: number;
  role: ExecutiveAssistant | HumanResources | Operations;
};

export default Talent;
