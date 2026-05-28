import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface ServiceDetail {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  icon: string;
  image: string;
}

interface ComplementaryService {
  title: string;
  description: string;
  icon: string;
  category: string;
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
  mainServices: ServiceDetail[] = [
    {
      title: 'Catering para Bodas',
      subtitle: 'Tu día perfecto merece un menú excepcional',
      description: 'Diseñamos experiencias gastronómicas únicas para el día más importante de tu vida. Desde la degustación inicial hasta el último brindis, cuidamos cada detalle.',
      features: [
        'Menú degustación personalizado',
        'Coordinación integral del evento',
        'Servicio de mesa completo',
        'Barra de tragos y sommelier',
        'Decoración y ambientación',
        'Atención VIP a novios'
      ],
      icon: '💍',
      image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&h=600&fit=crop&q=80'
    },
    {
      title: 'Cumpleaños y Aniversarios',
      subtitle: 'Celebraciones únicas para momentos especiales',
      description: 'Desde cumpleaños infantiles hasta celebraciones de aniversarios, creamos experiencias memorables con catering gourmet y organización completa.',
      features: [
        'Menús personalizados por edad',
        'Decoración temática completa',
        'Opciones para niños y adultos',
        'Tortas y postres especiales',
        'Animación y entretenimiento',
        'Coordinación total del evento'
      ],
      icon: '🎂',
      image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&h=600&fit=crop&q=80'
    },
    {
      title: 'Fiestas y Eventos Privados',
      subtitle: 'Celebra tus momentos especiales',
      description: 'Organizamos todo tipo de celebraciones privadas con servicio integral: catering, ambientación, logística y coordinación completa.',
      features: [
        'Menús temáticos personalizados',
        'Servicio de meseros profesional',
        'Decoración de espacios',
        'Barra de tragos especializada',
        'Sonido e iluminación',
        'Coordinación integral'
      ],
      icon: '🎉',
      image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&h=600&fit=crop&q=80'
    }
  ];

  complementaryServices: ComplementaryService[] = [
    {
      title: 'Salones',
      description: 'Espacios elegantes y versátiles para eventos de cualquier tamaño',
      icon: '🏛️',
      category: 'Infraestructura'
    },
    {
      title: 'Carpas y Entelados',
      description: 'Estructuras premium para eventos al aire libre con máxima elegancia',
      icon: '⛺',
      category: 'Infraestructura'
    },
    {
      title: 'Decoración y Ambientación',
      description: 'Diseño personalizado de espacios según la temática de tu evento',
      icon: '🎨',
      category: 'Ambientación'
    },
    {
      title: 'Sonido e Iluminación',
      description: 'Equipos profesionales de audio e iluminación para crear la atmósfera perfecta',
      icon: '🎵',
      category: 'Técnico'
    },
    {
      title: 'Pantallas Gigantes',
      description: 'Proyección y pantallas LED para presentaciones y entretenimiento',
      icon: '📺',
      category: 'Técnico'
    },
    {
      title: 'Barra de Tragos',
      description: 'Bartenders profesionales y coctelería de autor personalizada',
      icon: '🍸',
      category: 'Gastronomía'
    },
    {
      title: 'Coordinación Integral',
      description: 'Gestión completa de todos los aspectos del evento de principio a fin',
      icon: '📋',
      category: 'Organización'
    },
    {
      title: 'Logística General',
      description: 'Mobiliario, baños, escenarios y todo lo necesario para tu evento',
      icon: '🔧',
      category: 'Logística'
    },
    {
      title: 'Transporte',
      description: 'Servicio de traslados y logística de transporte para invitados',
      icon: '🚐',
      category: 'Logística'
    },
    {
      title: 'Alojamiento',
      description: 'Coordinación de hospedaje para eventos de varios días',
      icon: '🏨',
      category: 'Logística'
    }
  ];

  serviceCategories = [
    { name: 'Infraestructura', color: '#D6A350' },
    { name: 'Ambientación', color: '#E4B969' },
    { name: 'Técnico', color: '#8B7355' },
    { name: 'Gastronomía', color: '#C4941F' },
    { name: 'Organización', color: '#B89968' },
    { name: 'Logística', color: '#A67C52' }
  ];
}
