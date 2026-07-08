import { Education } from "./education";
import { Learning } from "./learning";
import { Projects } from "./projects";
import { Resume } from "./resume";
import { Skills } from "./skills";
import { WorkExperience } from "./work-experience";

export class WorkExperienceData implements WorkExperience {
    constructor(
        public companyName: string,
        public title: string,
        public startDate: string,
        public endDate: string,
        public description: string,
        public reasonForLeaving?: string,
    ) {}
}
export class SkillsData implements Skills {
constructor(
    public languages: string[],
    public frameworks: string[],
    public tools: string[],
    public databases: string[],
) {}
}
export class ProjectsData implements Projects {
    constructor(
    public name: string,
    public techStack: string[],
    public shortDescription: string,
    public githubLink: string,
    public liveLink?: string,
    ) {}
}
export class LearningData implements Learning {
    constructor(
    public languages: string[],
    public tools: string[],
    ) {}
}
export class EducationData implements Education {
    constructor(
    public schoolName: string,
    public degree: string,
    public fieldOfStudy: string,
    public graduationYear: number,
    ) {}
}
export class ResumeData implements Resume {
    constructor(
    public name: string,
    public email: string,
    public number: string,
    public githubLink: string,
    public linkedInLink: string,

    public workExperience: WorkExperience[],
    public education: Education[],
    public skills: Skills,
    public learning: Learning,
    public projects: Projects[],
    ) {}
}