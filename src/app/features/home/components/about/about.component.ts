import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface TeamMember {
  name: string;
  role: string;
  image?: string;
}

interface Service {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  teamMembers: TeamMember[] = [
    {
      name: 'Braian',
      role: '  Co-fundador & Director de Operaciones'
    },
    {
      name: 'Fabián',
      role: 'Co-fundador & Director Creativo'
    }
  ];

  services: Service[] = [
    {
      icon: '🍽️',
      title: 'Catering Gourmet',
      description: 'Menús personalizados con ingredientes frescos y de calidad'
    },
    {
      icon: '�️',
      title: 'Salones',
      description: 'Espacios elegantes para eventos de cualquier tamaño'
    },
    {
      icon: '⛺',
      title: 'Carpas & Entelado',
      description: 'Estructuras premium para eventos al aire libre'
    },
    {
      icon: '🎨',
      title: 'Decoración Integral',
      description: 'Diseño y ambientación completa de espacios'
    },
    {
      icon: '🎵',
      title: 'Sonido & Iluminación',
      description: 'Equipos de audio e iluminación profesional'
    },
    {
      icon: '🍸',
      title: 'Barra de Tragos',
      description: 'Bartenders profesionales y coctelería de autor'
    }
  ];

  currentYear = new Date().getFullYear();
  yearsOfExperience = 12; // 12 años de experiencia
}
