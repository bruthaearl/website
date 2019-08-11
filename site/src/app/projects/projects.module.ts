import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule, Title} from '@angular/platform-browser';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsDetailViewComponent } from './projects-detail-view/projects-detail-view.component';
import { ProjectsViewComponent } from './projects-view/projects-view.component';

import {MarkdownModule} from 'ngx-markdown';
import { HttpClientModule, HttpClient } from '@angular/common/http';



@NgModule({
  declarations: [ProjectsDetailViewComponent, ProjectsViewComponent],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    MarkdownModule.forRoot({loader: HttpClient}),
    ProjectsRoutingModule
  ],
  providers: [
    Title
  ]
})
export class ProjectsModule { }
