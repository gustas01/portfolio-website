import { Component, OnInit } from '@angular/core';
import { RepositoryModel } from 'src/app/models/repository-model';
import { ProjectsService } from './projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  constructor(private projectsService: ProjectsService) {}

  repos: RepositoryModel[] = [];

  ngOnInit(): void {
    this.projectsService.getRepos('https://api.github.com/users/gustas01/repos').subscribe({
      next: (res) => {
        this.repos = res;
      },
    });
  }
}
