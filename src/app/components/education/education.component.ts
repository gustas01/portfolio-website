import { Component } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
})
export class EducationComponent {
  public education = [
    {
      course: 'Bacharel em Ciência e Tecnologia',
      period: 'Mar 2013/set 2017',
      university:
        'UFVJM - Universidade Federal dos Vales do Jequitinhonha e Mucuri',
      status: `Graduado`,
      side: 'left',
    },
    {
      course: 'Ciência da Computação',
      period: 'Mar 2019/dez 2021',
      university: 'UNIFEI - Universidade Federal de Itajubá',
      status: `Incompleto`,
      side: 'right',
    },
    {
      course: 'Técnico em Informática',
      period: 'Mar 2009/jul 2010',
      university: 'ETRL - Escola Técnica Rural Luterana',
      status: `Completo`,
      side: 'left',
    },
  ];
}
