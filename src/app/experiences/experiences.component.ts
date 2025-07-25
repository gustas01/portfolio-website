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
      period: $localize`Out 2024 – até o momento`,
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
  ];
}
