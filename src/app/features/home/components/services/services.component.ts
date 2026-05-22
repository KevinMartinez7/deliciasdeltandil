import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface Service {
  title: string;
  description: string;
  icon: string;
  link: string;
  category: string;
  backgroundImage: string;
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit, OnDestroy {
  currentServiceIndex = 0;
  showNavigation = false;
  autoplayInterval: any;

  services: Service[] = [
    {
      title: 'Catering para Bodas',
      description: 'Celebra tu día especial con menús elegantes y servicio impecable que hará de tu boda un momento inolvidable.',
      icon: '💍',
      link: '/servicios',
      category: 'BODAS',
      backgroundImage: 'assets/images/services/bodas.jpg'
    },
    {
      title: 'Cumpleaños y Aniversarios',
      description: 'Celebra tus momentos especiales con menús deliciosos y servicio personalizado que sorprenderá a todos.',
      icon: '🎂',
      link: '/servicios',
      category: 'CELEBRACIONES',
      backgroundImage: 'assets/images/services/thumbnail (19).jpg'
    },
    {
      title: 'Fiestas Privadas',
      description: 'Desde cumpleaños hasta aniversarios, creamos experiencias gastronómicas perfectas para tus celebraciones.',
      icon: '🎉',
      link: '/servicios',
      category: 'FIESTAS',
      backgroundImage: 'assets/images/services/thumbnaill.jpg'
    },
    {
      title: 'Buffet & Cocktails',
      description: 'Variedad y elegancia en cada bocado. Buffets completos y cocktails sofisticados para eventos.',
      icon: '🍸',
      link: '/servicios',
      category: 'BUFFET',
      backgroundImage: 'assets/images/services/thumbnail.jpg'
    },
    {
      title: 'Catering a Domicilio',
      description: 'Disfruta de nuestro servicio en la comodidad de tu hogar con menús personalizados.',
      icon: '🏠',
      link: '/servicios',
      category: 'DOMICILIO',
      backgroundImage: 'assets/images/services/thumbnail1.jpg'
    },
    {
      title: 'Menús Temáticos',
      description: 'Cocina internacional, regional o temática adaptada a la visión de tu evento.',
      icon: '🌎',
      link: '/servicios',
      category: 'TEMÁTICOS',
      backgroundImage: 'assets/images/services/thumbnail2.jpg'
    }
  ];

  ngOnInit() {
    this.startAutoplay();
    this.handleImageErrors();
  }

  ngOnDestroy() {
    this.stopAutoplay();
  }

  startAutoplay() {
    this.autoplayInterval = setInterval(() => {
      this.nextService();
    }, 5000);
  }

  stopAutoplay() {
    if (this.autoplayInterval) {
      clearInterval(this.autoplayInterval);
    }
  }

  nextService() {
    this.currentServiceIndex = (this.currentServiceIndex + 1) % this.services.length;
    this.resetAutoplay();
  }

  prevService() {
    this.currentServiceIndex = this.currentServiceIndex === 0 ? this.services.length - 1 : this.currentServiceIndex - 1;
    this.resetAutoplay();
  }

  goToService(index: number) {
    this.currentServiceIndex = index;
    this.resetAutoplay();
  }

  resetAutoplay() {
    this.stopAutoplay();
    this.startAutoplay();
  }

  handleImageErrors() {
    setTimeout(() => {
      const images = document.querySelectorAll('.service-slide-background img');
      images.forEach((img: any) => {
        img.onerror = () => {
          img.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080"%3E%3Cdefs%3E%3ClinearGradient id="grad" x1="0%25" y1="0%25" x2="100%25" y2="100%25"%3E%3Cstop offset="0%25" style="stop-color:%23F5F1E1;stop-opacity:1"/%3E%3Cstop offset="50%25" style="stop-color:%23F0E1BD;stop-opacity:1"/%3E%3Cstop offset="100%25" style="stop-color:%23D6A350;stop-opacity:1"/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width="1920" height="1080" fill="url(%23grad)"/%3E%3C/svg%3E';
        };
      });
    }, 100);
  }
}
