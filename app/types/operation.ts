export enum OPERATIONS {
  KEY = "OPERATIONS",
  VALUE = "Operations",
}

export enum OPERATIONS_SKILL {
  PROJECT_MANAGER = "Project Manager",
  PRODUCT_MANAGER = "Product Manager",
  CRITICAL_THINKER = "Critical Thinker",
  DATA_ANALYSIS = "Data Analysis",
  PROGRAM_MANAGEMENT = "Program Management",
  RESULTS_FOCUSED = "Results Focused",
  TECH_SAVVY = "Tech Savvy",
  SYSTEMS_THINKER = "Systems Thinker",
  RISK_MANAGEMENT_FOCUSED = "Risk Management Focused",
  BUSINESS_OPERATIONS = "Business Operations",
  CORPORATE_COMMUNICATION = "Corporate Communication",
  MARKETING = "Marketing",
}

type Operations = {
  id: string;
  key: OPERATIONS.KEY;
  label: OPERATIONS.VALUE;
  skills: typeof OPERATIONS_SKILL[];
  hourlyRate: number;
  weeklyHours: number;
};

export default Operations;
