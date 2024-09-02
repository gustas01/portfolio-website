import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { RepositoryModel } from './repository-model';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  constructor(private httpClient: HttpClient) {}

  getRepos(url: string) {
    return this.httpClient.get<RepositoryModel[]>(url).pipe(
      tap((res: RepositoryModel[]) => {
        res.map((lan: RepositoryModel) => {
          this.httpClient.get(lan.languages_url).subscribe({
            next: (resp: Object) => {
              lan.languages = Object.keys(resp);
            },
          });
        });
      })
    );
  }
}
