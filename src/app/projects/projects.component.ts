import { Component, OnInit } from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';

import { RepositoryModel } from './repository-model';
import { ProjectsService } from './projects.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatChipsModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent implements OnInit {
  constructor(private projectsService: ProjectsService) {}

  repos: RepositoryModel[] = [];

  ngOnInit(): void {
    this.projectsService
      .getRepos('https://api.github.com/users/gustas01/repos')
      .subscribe({
        next: (res) => {
          this.repos = res;
        },
      });
  }
}
