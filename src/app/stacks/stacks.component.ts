import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import { MatRippleModule } from '@angular/material/core';

@Component({
  selector: 'app-stacks',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatRippleModule],
  templateUrl: './stacks.component.html',
  styleUrl: './stacks.component.scss',
})
export class StacksComponent {
  public stacks = [
    {
      name: 'Node',
      svgName: 'node',
      path: 'assets/icons/stacks/node_icon.svg',
    },
    {
      name: 'NestJS',
      svgName: 'nestjs',
      path: 'assets/icons/stacks/nestjs_icon.svg',
    },
    {
      name: 'Angular',
      svgName: 'angular',
      path: 'assets/icons/stacks/angular_icon.svg',
    },
    {
      name: 'Typescript',
      svgName: 'typescript',
      path: 'assets/icons/stacks/typescript_icon.svg',
    },
    {
      name: 'Spring',
      svgName: 'spring',
      path: 'assets/icons/stacks/spring_icon.svg',
    },
    {
      name: 'Java',
      svgName: 'java',
      path: 'assets/icons/stacks/java_icon.svg',
    },
    {
      name: 'CSharp',
      svgName: 'csharp',
      path: 'assets/icons/stacks/csharp_icon.svg',
    },
    {
      name: 'Asp .Net Core',
      svgName: 'asp net',
      path: 'assets/icons/stacks/dotnet_icon.svg',
    },
    {
      name: 'Jest',
      svgName: 'jest',
      path: 'assets/icons/stacks/jest_icon.svg',
    },
    {
      name: 'JUnit',
      svgName: 'junit',
      path: 'assets/icons/stacks/junit_icon.svg',
    },
    {
      name: 'PostgreSQL',
      svgName: 'postgreSQL',
      path: 'assets/icons/stacks/postgresql_icon.svg',
    },
    {
      name: 'MongoDB',
      svgName: 'mongodb',
      path: 'assets/icons/stacks/mongodb_icon.svg',
    },
  ];
}
