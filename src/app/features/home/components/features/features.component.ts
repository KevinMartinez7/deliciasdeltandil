import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Feature {
  title: string;
  description: string;
  icon: string;
}

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent {
  hoveredIndex: number | null = null;

  onCardHover(index: number): void {
    this.hoveredIndex = index;
    const cards = document.querySelectorAll('.feature-card');
    
    cards.forEach((card: Element, i: number) => {
      const distance = Math.abs(i - index);
      const htmlCard = card as HTMLElement;
      
      if (distance === 0) {
        htmlCard.style.transform = 'translateY(-20px) scale(1.05)';
      } else if (distance === 1) {
        htmlCard.style.transform = 'translateY(-12px) scale(1.02)';
      } else if (distance === 2) {
        htmlCard.style.transform = 'translateY(-6px) scale(1.01)';
      }
    });
  }

  onCardLeave(): void {
    this.hoveredIndex = null;
    const cards = document.querySelectorAll('.feature-card');
    
    cards.forEach((card: Element) => {
      const htmlCard = card as HTMLElement;
      htmlCard.style.transform = 'translateY(0) scale(1)';
    });
  }
  features: Feature[] = [
    {
      icon: '',
      title: 'Menús personalizados',
      description: 'Creamos propuestas gastronómicas únicas adaptadas a tus gustos, presupuesto y el tipo de evento que imaginas.'
    },
    {
      icon: '',
      title: 'Equipo profesional',
      description: 'Chefs, meseros y coordinadores con años de experiencia en bodas, cumpleaños y celebraciones.'
    },
    {
      icon: '',
      title: 'Montaje completo',
      description: 'Nos encargamos de la decoración, vajilla premium, cristalería y mantelería para eventos elegantes.'
    },
    {
      icon: '',
      title: 'Servicio puntual',
      description: 'Coordinación eficiente y montaje rápido sin sacrificar ningún detalle de calidad.'
    },
    {
      icon: '',
      title: 'Compromiso sustentable',
      description: 'Ingredientes locales, prácticas eco-friendly y reducción activa de desperdicios.'
    },
    {
      icon: '',
      title: 'Asesoría gratuita',
      description: 'Consultoría personalizada para ayudarte a planificar cada aspecto de tu evento perfecto.'
    }
  ];
}
