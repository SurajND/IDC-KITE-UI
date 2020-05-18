import { Role } from './role.model';
import { Project } from './project.model';
import { Opco } from './opco.model';

export class User {
    id?: string;
    fName?: string;
    lName?: string;
    email?: string;
    phoneNumber?: number;
    operationalCompanyId?: string;
    operationalCompany?: Opco;
    isActive: boolean;
    token?: string;
    projectId?: string;
    project?: Project;
    roleId?: string;
    role? : Role;
    createdOn?: string;
    lastLogin?: string;

}