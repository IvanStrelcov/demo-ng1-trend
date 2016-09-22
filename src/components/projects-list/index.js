import ng from 'angular';

import ProjectsListComponent from './projects-list.component';
import ProjectService from './projects-list.service';

export default ng.module('app.components.project.list', [])
  .directive('projectsList', ProjectsListComponent)
  .service('ProjectService', ProjectService)
  .name;
