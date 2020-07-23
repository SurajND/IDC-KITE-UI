import { Project } from './project.model';

export class ProjectKeyIndicatorYear {
    id: string;
    value: number;
    year: number;
    comment: string;
    keyIndicatorId: string;
    projectId: string;
    project: Project = new Project();
    updatedBy: string;
    updatedOn: string;
}

export class OpcosForYear{
    opco: string;
    operationalCompanyName : string;
    value: ProjectKeyIndicatorYear[] = [];
}

export class AllOpcosForYear{
    opcos: OpcosForYear[] = []
}