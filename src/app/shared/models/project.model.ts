import {ProfileModel} from './profile.model';

export enum ProjectVisibilityEnum {
  PUBLIC = 'public',
  DRAFT = 'draft',
  ARCHIVED = 'archived',
}

export interface ProjectModel {
  slug: string;
  title: string;
  // resume: string;
  content: string;
  thumb: string;
  cityName: string;
  challenge: string;
  category: string;
  site: string;
  repositoryUrl: string;
  visibility: ProjectVisibilityEnum;
  authorId: string;
  createdAt: Date;
  team?: ProfileModel[];
}
