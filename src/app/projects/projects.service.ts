import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { RepositoryModel } from './repository-model';

import * as envs from '../../assets/envs.json';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  constructor(private httpClient: HttpClient) {}

  getRepos(url: string) {
    return this.httpClient
      .get<RepositoryModel[]>(url, {
        headers: {
          Authorization: `Bearer ${envs.TOKEN_GITHUB}`,
        },
      })
      .pipe(
        tap((res: RepositoryModel[]) => {
          res.map((lan: RepositoryModel) => {
            this.httpClient
              .get(lan.languages_url, {
                headers: {
                  Authorization: `Bearer ${envs.TOKEN_GITHUB}`,
                },
              })
              .subscribe({
                next: (resp: Object) => {
                  lan.languages = Object.keys(resp);
                },
              });
          });
        })
      );
  }
}
