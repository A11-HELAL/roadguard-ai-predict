export type Severity = 0 | 1 | 2;

export type Prediction = {
  class: Severity;
  slight: number;
  serious: number;
  fatal: number;
};

export function simulatePrediction(): Prediction {
  const rand = Math.random();
  if (rand < 0.8) return { class: 0, slight: 0.78, serious: 0.17, fatal: 0.05 };
  if (rand < 0.95) return { class: 1, slight: 0.22, serious: 0.68, fatal: 0.1 };
  return { class: 2, slight: 0.08, serious: 0.24, fatal: 0.68 };
}

export const severityMeta = {
  0: {
    badge: "SLIGHT INJURY",
    title: "Low Severity Detected",
    subtitle: "Minor injuries expected. Prompt medical check recommended.",
    icon: "⚠️",
    color: "var(--slight)",
  },
  1: {
    badge: "SERIOUS INJURY",
    title: "High Severity Detected",
    subtitle: "Serious injuries likely. Immediate medical attention required.",
    icon: "🚨",
    color: "var(--serious)",
  },
  2: {
    badge: "FATAL INJURY",
    title: "Critical Severity Detected",
    subtitle: "Life-threatening. Emergency response needed immediately.",
    icon: "🔴",
    color: "var(--fatal)",
  },
} as const;

export const dayOptions = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

export const areaOptions = [
  "Residential areas",
  "Office areas",
  "Market areas",
  "Rural areas",
  "Hospital areas",
  "School areas",
  "Recreational areas",
  "Industrial areas",
  "Unknown",
];

export const ageOptions = ["Under 18", "18-30", "31-50", "Over 51"];

export const experienceOptions = [
  "No Licence",
  "Below 1yr",
  "1-2yr",
  "2-5yr",
  "5-10yr",
  "Above 10yr",
];

export const vehicleOptions = [
  "Automobile",
  "Lorry (7-10Q)",
  "Lorry (11-14Q)",
  "Bajaj",
  "Turbo",
  "Motorcycle",
  "Bicycle",
  "Pickup",
  "Small Lorry",
  "Other",
];

export const movementOptions = [
  "Going straight",
  "Turning left",
  "Turning right",
  "U-Turn",
  "Parked",
];

export const surfaceTypeOptions = ["Asphalt roads", "Earth roads", "Gravel roads", "Other"];

export const surfaceConditionOptions = ["Dry", "Wet or damp", "Snow", "Flood over 3cm"];

export const lightOptions = [
  "Daylight",
  "Darkness - lights lit",
  "Darkness - lights unlit",
  "Dawn",
];

export const weatherOptions = [
  "Normal",
  "Raining",
  "Raining and Windy",
  "Cloudy",
  "Windy",
  "Fog or mist",
  "Snow",
  "Other",
];

export const junctionOptions = [
  "No junction",
  "Y Shape",
  "T Shape",
  "O Shape",
  "Other",
  "Unknown",
];

export const collisionOptions = [
  "Collision with roadside-parked vehicles",
  "With pedestrians",
  "Rear-end collision",
  "Rollover",
  "Fall from vehicle",
  "Collision with animals",
  "Other",
];

export const causeOptions = [
  "Moving Backward",
  "Overtaking",
  "Changing lane to the left",
  "Changing lane to the right",
  "No priority to vehicle",
  "No priority to pedestrian",
  "No distancing",
  "Driving carelessly",
  "Driving at high speed",
  "Overspeed",
  "Improper parking",
  "Other",
];

export type FormData = {
  time: string;
  day: string;
  area: string;
  age: string;
  sex: string;
  experience: string;
  vehicle: string;
  movement: string;
  surfaceType: string;
  surfaceCondition: string;
  light: string;
  weather: string;
  junction: string;
  vehicles: number;
  casualties: number;
  collision: string;
  cause: string;
};

export const initialFormData: FormData = {
  time: "18:30",
  day: "Friday",
  area: "Residential areas",
  age: "18-30",
  sex: "Male",
  experience: "2-5yr",
  vehicle: "Automobile",
  movement: "Going straight",
  surfaceType: "Asphalt roads",
  surfaceCondition: "Dry",
  light: "Daylight",
  weather: "Normal",
  junction: "No junction",
  vehicles: 2,
  casualties: 1,
  collision: "Rear-end collision",
  cause: "Driving carelessly",
};

export const fieldLabels: Record<keyof FormData, string> = {
  time: "Time of Accident",
  day: "Day of Week",
  area: "Area Type",
  age: "Age Band",
  sex: "Sex of Driver",
  experience: "Driving Experience",
  vehicle: "Vehicle Type",
  movement: "Vehicle Movement",
  surfaceType: "Road Surface Type",
  surfaceCondition: "Road Surface Conditions",
  light: "Light Conditions",
  weather: "Weather",
  junction: "Junction Type",
  vehicles: "Vehicles Involved",
  casualties: "Casualties",
  collision: "Type of Collision",
  cause: "Cause of Accident",
};
