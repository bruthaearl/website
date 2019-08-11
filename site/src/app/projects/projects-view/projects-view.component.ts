import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-projects-view',
  templateUrl: './projects-view.component.html',
  styleUrls: ['./projects-view.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProjectsViewComponent implements OnInit {

  constructor(private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle('Projects | Oak St. Electronics');
  }

}
