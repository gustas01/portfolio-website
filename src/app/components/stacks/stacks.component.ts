import { Component } from '@angular/core';

@Component({
  selector: 'app-stacks',
  templateUrl: './stacks.component.html',
  styleUrls: ['./stacks.component.scss'],
})
export class StacksComponent {
  public stacks = [
    {
      name: 'Node',
      svgName: 'node',
      path: '../../../assets/icons/stacks/node_icon.svg',
    },
    {
      name: 'NestJS',
      svgName: 'nestjs',
      path: '../../../assets/icons/stacks/nestjs_icon.svg',
    },
    {
      name: 'Angular',
      svgName: 'angular',
      path: '../../../assets/icons/stacks/angular_icon.svg',
    },
    {
      name: 'React',
      svgName: 'react',
      path: '../../../assets/icons/stacks/react_icon.svg',
    },
    {
      name: 'Typescript',
      svgName: 'typescript',
      path: '../../../assets/icons/stacks/typescript_icon.svg',
    },
    {
      name: 'Javascript',
      svgName: 'javascript',
      path: '../../../assets/icons/stacks/javascript_icon.svg',
    },
    {
      name: 'Jest',
      svgName: 'jest',
      path: '../../../assets/icons/stacks/jest_icon.svg',
    },
    {
      name: 'PostgreSQL',
      svgName: 'postgreSQL',
      path: '../../../assets/icons/stacks/postgresql_icon.svg',
    },
    {
      name: 'MongoDB',
      svgName: 'mongodb',
      path: '../../../assets/icons/stacks/mongodb_icon.svg',
    },
  ];
}
