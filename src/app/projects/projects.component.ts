import { Component, OnInit } from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';

import { RepositoryModel } from './repository-model';
import { ProjectsService } from './projects.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatChipsModule,
    MatSelectModule,
    FormsModule,
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent implements OnInit {
  constructor(private projectsService: ProjectsService) {}

  filteredLanguage: string = '';
  languages = new Set<string>();

  repos: RepositoryModel[] = [];
  filteredRepos: RepositoryModel[] = [];

  ngOnInit(): void {
    this.projectsService
      .getRepos('https://api.github.com/users/gustas01/repos')
      .subscribe({
        next: (res) => {
          this.repos = res;
          this.filteredRepos = this.repos;

          this.repos
            .map((el) => el.language)
            .forEach((lan) => {
              if (lan !== null) this.languages.add(lan);
            });
        },
      });
  }

  filterLanguage() {
    if (!this.filteredLanguage) {
      this.filteredRepos = this.repos;
      return;
    }

    this.filteredRepos = this.repos.filter(
      (lang) =>
        lang.language?.toLowerCase() === this.filteredLanguage?.toLowerCase()
    );
  }
}
