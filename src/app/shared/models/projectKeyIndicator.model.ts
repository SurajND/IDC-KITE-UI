import { KeyIndicator } from './keyIndicator.model';
import { Project } from './project.model';

export class ProjectKeyIndicator{
    id?: string;
    percentage?: number;
    actual?: number;
    year: number;
    month: number;
    comment: string;
    keyIndicatorId: string;
    keyIndicator: KeyIndicator;
    projectId: string;
    project: Project;
    updatedBy?: string;
    updatedOn?: string;
}