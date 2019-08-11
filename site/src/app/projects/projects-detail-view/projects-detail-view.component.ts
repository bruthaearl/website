import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';

import { Routes, RouterModule, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-projects-detail-view',
  templateUrl: './projects-detail-view.component.html',
  styleUrls: ['./projects-detail-view.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProjectsDetailViewComponent implements OnInit, OnDestroy {

  private sub: Subscription;
  project: string;
  projectUrl: string;

  constructor(private route: ActivatedRoute, private titleService: Title) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.project = params['id'];
      this.projectUrl = './assets/projects/' + this.project + '/' + this.project + '.md';
    });
    this.titleService.setTitle(this.project + ' | Oak St. Electronics');

  }

  ngOnDestroy(){
    if (this.sub){
      this.sub.unsubscribe();
    }
  }

}
