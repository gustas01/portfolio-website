import { Component } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
})
export class EducationComponent {
  public education = [
    {
      name: $localize`Ciência da Computação`,
      period: $localize`Mar 2019/dez 2021`,
      university: `UNIFEI - Universidade Federal de Itajubá`,
      status: $localize`Incompleto`,
      side: 'left',
    },
    {
      name: $localize`Bacharel em Ciência e Tecnologia`,
      period: $localize`Mar 2013/set 2017`,
      university: `UFVJM - Universidade Federal dos Vales do Jequitinhonha e Mucuri`,
      status: $localize`Graduado`,
      side: 'right',
    },
    {
      name: $localize`Técnico em Informática`,
      period: $localize`Mar 2009/jul 2010`,
      university: `ETRL - Escola Técnica Rural Luterana`,
      status: $localize`Completo`,
      side: 'left',
    },
  ];
}
