import {ProjectModel, ProjectVisibilityEnum} from '../models/project.model';

export const projectData: ProjectModel[] = [
  {
    slug: 'proj-1',
    title: 'Projet 1',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque dicta earum error excepturi magni nobis pariatur' +
      ' perspiciatis quas quo, quod recusandae reiciendis reprehenderit sequi, sint temporibus, totam voluptate. Ipsum, omnis!',
    thumb: 'https://d1o50x50snmhul.cloudfront.net/wp-content/gallery/abandoned-nasa-projects/a1x30nationalaerospaceplane.jpg',
    cityName: 'Foz do Iguaçu',
    challenge: 'Encontrar aguá',
    category: 'Discovery',
    site: 'https://sitedemo.com',
    repositoryUrl: 'https://github.com/gdgfoz/space',
    visibility: ProjectVisibilityEnum.PUBLIC,
    authorId: '1',
    createdAt: new Date(),
  },
  {
    slug: 'proj-2',
    title: 'Projet 2',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    thumb: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTevl9C-fjW_PZiMcyMdWwPmVvoD4Z6rTPaZvfvPFh2A8MQWN6',
    cityName: 'Foz do Iguaçu',
    challenge: 'Encontrar aguá',
    category: 'Discovery',
    site: 'https://sitedemo.com',
    repositoryUrl: 'https://github.com/gdgfoz/space',
    visibility: ProjectVisibilityEnum.PUBLIC,
    authorId: '1',
    createdAt: new Date(),
  },
  {
    slug: 'proj-3',
    title: 'Projet 3',
    content: 'project 3 teste,,,, Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    thumb: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHz_gGISq66xxAh4PhLrxcQEmDjmlaH20GyIoLf5cG3mB0zgLHOA',
    cityName: 'Foz do Iguaçu',
    challenge: 'Encontrar aguá',
    category: 'Discovery',
    site: 'https://sitedemo.com',
    repositoryUrl: 'https://github.com/gdgfoz/space',
    visibility: ProjectVisibilityEnum.PUBLIC,
    authorId: '1',
    createdAt: new Date(),
  }
];
