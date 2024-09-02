import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { MatTabsModule } from '@angular/material/tabs';

import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { StacksComponent } from './stacks/stacks.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { EducationComponent } from './education/education.component';
import { ProjectsComponent } from './projects/projects.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatTabsModule,
    HeaderComponent,
    AboutComponent,
    StacksComponent,
    ExperiencesComponent,
    EducationComponent,
    ProjectsComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'portfolio-website';
}
