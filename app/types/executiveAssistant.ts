export enum EXECUTIVE_ASSISTANT {
  KEY = "EXECUTIVE_ASSISTANT",
  VALUE = "Executive Assistant",
}

export enum EXECUTIVE_ASSISTANT_SKILL {
  CALENDERING = "Calendering",
  INBOX_MANAGEMENT = "Inbox Management",
  TRAVEL_AND_LOGISTICS = "Travel & Logistics",
  EVENT_PLANNING = "Event Planning",
  SERVICE_ORIENTED = "Service Oriented",
  PROBLEM_SOLVER = "Problem Solver",
  BOOKKEEPING = "Bookkeeping",
  DETAIL_ORIENTED = "Detail Oriented",
  DISCRETION = "Discretion" /* inconsistent listing */,
  TIME_MANAGEMENT = "Time Management" /* inconsistent listing */,
  SOCIAL_MEDIA_MANAGER = "Social Media Manager",
}

type TimeCommitment = {
  weeklyHoursMax: number;
  weeklyHoursMin: number;
  startDate?: Date;
  endDate?: Date;
};

type HourlyRate = {
  max: number;
  min: number;
};

type ExecutiveAssistant = {
  id: string;
  key: EXECUTIVE_ASSISTANT.KEY;
  label: EXECUTIVE_ASSISTANT.VALUE;
  skills: typeof EXECUTIVE_ASSISTANT_SKILL[];
  hourlyRate: number;
  weeklyHours: number;
};

export default ExecutiveAssistant;
