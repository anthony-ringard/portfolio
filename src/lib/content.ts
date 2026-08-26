import expertisesData from "../../data/expertises.json";
import missionsData from "../../data/missions.json";
import profileData from "../../data/profile.json";
import projectsData from "../../data/projects.json";
import proofsData from "../../data/proofs.json";
import siteData from "../../data/site.json";

export type Metric = {
  label: string;
  value: string;
};

export type Project = {
  id: string;
  name: string;
  type: string;
  status: string;
  statusTone: "done" | "progress";
  pitch: string;
  context: string;
  role: string;
  result: string;
  metrics: Metric[];
  impact: string[];
  stack: string[];
  note: string;
};

export type Mission = {
  title: string;
  summary: string;
  points: string[];
  outcome: string;
};

export const profile = profileData;
export const projects = projectsData as Project[];
export const expertises = expertisesData;
export const proofs = proofsData;
export const missions = missionsData as {
  items: Mission[];
  goodFit: string[];
  notFit: string[];
};
export const site = siteData;
