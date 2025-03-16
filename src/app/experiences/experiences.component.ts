import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss',
})
export class ExperiencesComponent {
  public experiences = [
    {
      role: $localize`Desenvolvedor fullstack júnior`,
      period: $localize`Jan 2025 – até o momento`,
      company: $localize`BTG Pactual`,
      description: $localize`Desenvolvimento e manutenção de aplicações de larga escala do mercado financeiro.`,
      technologies: ['.NET', 'C#', 'Angular', 'Typescript'],
      side: 'left',
    },
    {
      role: $localize`Trainee de desenvolvimento fullstack`,
      period: $localize`Abr 2024 – até o momento`,
      company: $localize`FCAMARA - Consultoria e formação em Informática`,
      description: $localize`Estudo desenvolvimento fullstack para me aprimorar e contribuir no desenvolvimento de soluções
      funcionais, escaláveis e consistentes.`,
      technologies: ['.NET', 'C#', 'Angular', 'Typescript'],
      side: 'right',
    },
    {
      role: $localize`Desenvolvedor Júnior`,
      period: $localize`Mar 2022 – Ago 2022`,
      company: $localize`Luz - Soluções Financeiras`,
      description: $localize`Na Luz pude atuar tanto no backend quanto no frontend (com foco no frontend) onde trabalhei
      tecnologias modernas na construção da calculadora de renda fixa na nuvem da empresa.`,
      technologies: ['Angular', 'Jasmine', 'Selenium'],
      side: 'left',
    },
  ];
}
