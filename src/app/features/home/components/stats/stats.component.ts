import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Stat {
  value: string;
  label: string;
  suffix?: string;
}

@Component({
  selector: 'app-stats',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent {
  stats: Stat[] = [
    { value: '+2500', label: 'Eventos realizados' },
    { value: '+50K', label: 'Invitados atendidos' },
    { value: '15', label: 'Años de experiencia', suffix: '+' },
    { value: '98', label: 'Satisfacción del cliente', suffix: '%' }
  ];
}
