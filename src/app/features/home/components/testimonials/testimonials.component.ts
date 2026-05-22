import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
}

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent {
  testimonials: Testimonial[] = [
    {
      name: 'María González',
      role: 'Novia',
      company: 'Boda en Tandil',
      content: 'El catering de nuestra boda fue simplemente espectacular. Cada plato fue una obra de arte y nuestros invitados no dejaron de elogiar la comida. ¡Gracias por hacer nuestro día tan especial!',
      rating: 5
    },
    {
      name: 'Roberto Martínez',
      role: 'Padre de familia',
      company: 'Aniversario 50 años',
      content: 'Celebramos el aniversario de mis padres y fue todo perfecto. Delicias del Tandil superó nuestras expectativas con su profesionalismo, calidad y atención al detalle.',
      rating: 5
    },
    {
      name: 'Laura Fernández',
      role: 'Mamá',
      company: 'Cumpleaños de 15',
      content: 'Increíble servicio para los 15 de mi hija. Se adaptaron perfectamente a nuestro presupuesto sin comprometer la calidad. Todo estuvo delicioso y hermoso.',
      rating: 5
    }
  ];
}
