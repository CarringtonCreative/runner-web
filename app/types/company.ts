import ExecutiveAssistant from "./executiveAssistant";
import HumanResources from "./humanResources";
import Operations from "./operation";

type Positions = {
  executiveAssistant?: ExecutiveAssistant[];
  humanResources?: HumanResources[];
  operations?: Operations[];
};

type Company = {
  id: string;
  avatar: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  description: string;
  positions: [ExecutiveAssistant | HumanResources | Operations];
};

export default Company;
