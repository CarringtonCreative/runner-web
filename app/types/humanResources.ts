export enum HUMAN_RESOURCES {
  KEY = "HUMAN_RESOURCES",
  VALUE = "Human Resources",
}

export enum HUMAN_RESOURCES_SKILL {
  RECRUITING = "Recruiting",
  HR_COMPLIANCE = "HR Compliance",
  TALENT_MANAGEMENT = "Talent Management",
  COMPENSATION_AND_BENEFITS = "Compensation & Benefits",
  GENERALIST = "Generalist",
  DIVERSITY_EQUITY_INCLUSION_AND_ACCESS = "Diversity, Equity, Inclusion & Access",
  ACTIVE_LISTENER = "Active Listener",
  RELATIONSHIP_BUILDER = "Relationship Builder",
  ABILITY_TO_INFLUENCE = "Ability to Influence",
  PEOPLE_PROCESSES = "People Processes",
  TRAINING_AND_DEVELOPMENT = "Training & Development",
  WORKPLACE_SAFETY = "Workplace Safety",
}

type HumanResources = {
  id: string;
  key: HUMAN_RESOURCES.KEY;
  label: HUMAN_RESOURCES.VALUE;
  skills: typeof HUMAN_RESOURCES_SKILL[];
  hourlyRate: number;
  weeklyHours: number;
};

export default HumanResources;
