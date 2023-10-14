import { Component } from '@angular/core';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss'],
})
export class ExperiencesComponent {
  public experiences = [
    {
      role: 'Desenvolvedor Júnior',
      period: 'Mar 2022–Ago 2022',
      company: 'Luz - Soluções Financeiras',
      description: `Na Luz pude atuar tanto no backend quanto no frontend (com foco no frontend) onde trabalhei
      tecnologias modernas na construção da calculadora de renda fixa na nuvem da empresa.`,
      technologies: ['Angular', 'Jasmine', 'Selenium'],
      side: 'left',
    },
  ];
}
