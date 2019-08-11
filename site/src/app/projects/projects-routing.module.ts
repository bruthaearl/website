import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectsViewComponent} from './projects-view/projects-view.component';
import {ProjectsDetailViewComponent} from './projects-detail-view/projects-detail-view.component';


const routes: Routes = [
{path: 'projects', component: ProjectsViewComponent},
{path: 'projects/:id', component: ProjectsDetailViewComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
