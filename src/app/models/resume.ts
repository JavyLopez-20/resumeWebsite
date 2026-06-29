import { Education } from "./education";
import { Learning } from "./learning";
import { Projects } from "./projects";
import { Skills } from "./skills";
import { WorkExperience } from "./work-experience";

export interface Resume {
    name: string;
    email: string;
    number: number;
    githubLink: string;
    linkedInLink: string;

    workExperience: WorkExperience[];
    education: Education[];
    skills: Skills;
    learning: Learning;
    projects: Projects[];
}
