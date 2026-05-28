import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Testimonial {
  name: string;
  role: string;
  content: string;
  rating: number;
  avatar: string;
  date: string;
}

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent implements OnInit {
  testimonials: Testimonial[] = [
    {
      name: 'María González',
      role: 'Boda en Tandil',
      content: 'El catering de nuestra boda fue simplemente espectacular. Cada plato fue una obra de arte y nuestros invitados no dejaron de elogiar la comida. ¡Gracias por hacer nuestro día tan especial!',
      rating: 5,
      avatar: 'https://ui-avatars.com/api/?name=Maria+Gonzalez&background=D6A350&color=fff&size=80',
      date: 'Hace 2 semanas'
    },
    {
      name: 'Roberto Martínez',
      role: 'Aniversario 50 años',
      content: 'Celebramos el aniversario de mis padres y fue todo perfecto. Delicias del Tandil superó nuestras expectativas con su profesionalismo, calidad y atención al detalle.',
      rating: 5,
      avatar: 'https://ui-avatars.com/api/?name=Roberto+Martinez&background=D6A350&color=fff&size=80',
      date: 'Hace 1 mes'
    },
    {
      name: 'Laura Fernández',
      role: 'Cumpleaños de 15',
      content: 'Increíble servicio para los 15 de mi hija. Se adaptaron perfectamente a nuestro presupuesto sin comprometer la calidad. Todo estuvo delicioso y hermoso.',
      rating: 5,
      avatar: 'https://ui-avatars.com/api/?name=Laura+Fernandez&background=D6A350&color=fff&size=80',
      date: 'Hace 3 semanas'
    },
    {
      name: 'Carlos Rodríguez',
      role: 'Evento Corporativo',
      content: 'Organizamos nuestro evento anual de la empresa con ellos y fue un éxito rotundo. La presentación de los platos fue impecable y el servicio de primera.',
      rating: 5,
      avatar: 'https://ui-avatars.com/api/?name=Carlos+Rodriguez&background=D6A350&color=fff&size=80',
      date: 'Hace 1 semana'
    },
    {
      name: 'Ana Suárez',
      role: 'Fiesta de Egreso',
      content: 'La mejor decisión para la fiesta de egreso de mi hijo. Todo salió perfecto, desde la decoración hasta el último bocado. Súper recomendables.',
      rating: 5,
      avatar: 'https://ui-avatars.com/api/?name=Ana+Suarez&background=D6A350&color=fff&size=80',
      date: 'Hace 2 meses'
    },
    {
      name: 'Diego Peralta',
      role: 'Boda al aire libre',
      content: 'Nuestro casamiento fue un sueño hecho realidad gracias a Delicias del Tandil. La comida exquisita y el servicio impecable. ¡Mil gracias!',
      rating: 5,
      avatar: 'https://ui-avatars.com/api/?name=Diego+Peralta&background=D6A350&color=fff&size=80',
      date: 'Hace 3 meses'
    },
    {
      name: 'Sofía Morales',
      role: 'Cumpleaños 40',
      content: 'Celebré mis 40 con un evento que quedará en la memoria de todos. La atención, la calidad de la comida y la decoración fueron excepcionales.',
      rating: 5,
      avatar: 'https://ui-avatars.com/api/?name=Sofia+Morales&background=D6A350&color=fff&size=80',
      date: 'Hace 1 mes'
    },
    {
      name: 'Martín López',
      role: 'Aniversario',
      content: 'Excelente servicio de catering para nuestro aniversario. Todo estuvo delicioso y la presentación fue de revista. Definitivamente los volveré a contratar.',
      rating: 5,
      avatar: 'https://ui-avatars.com/api/?name=Martin+Lopez&background=D6A350&color=fff&size=80',
      date: 'Hace 2 semanas'
    },
    {
      name: 'Valentina Castro',
      role: 'Fiesta de 15',
      content: 'Mis 15 fueron perfectos gracias a este equipo. Se encargaron de todo y no tuve que preocuparme por nada. La comida estuvo divina.',
      rating: 5,
      avatar: 'https://ui-avatars.com/api/?name=Valentina+Castro&background=D6A350&color=fff&size=80',
      date: 'Hace 1 mes'
    },
    {
      name: 'Fernando Díaz',
      role: 'Boda íntima',
      content: 'Organizamos una boda pequeña pero muy especial. Delicias del Tandil hizo que cada detalle fuera perfecto. Altamente recomendado.',
      rating: 5,
      avatar: 'https://ui-avatars.com/api/?name=Fernando+Diaz&background=D6A350&color=fff&size=80',
      date: 'Hace 2 meses'
    }
  ];

  firstRowTestimonials: Testimonial[] = [];
  secondRowTestimonials: Testimonial[] = [];

  ngOnInit() {
    // Dividir testimonios en dos filas
    const mid = Math.ceil(this.testimonials.length / 2);
    this.firstRowTestimonials = [...this.testimonials.slice(0, mid), ...this.testimonials.slice(0, mid)]; // Duplicar para loop infinito
    this.secondRowTestimonials = [...this.testimonials.slice(mid), ...this.testimonials.slice(mid)]; // Duplicar para loop infinito
  }
}
