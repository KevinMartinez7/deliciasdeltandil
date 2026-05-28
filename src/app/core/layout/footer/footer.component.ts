import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface FooterLink {
  label: string;
  route?: string;
  href?: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  footerSections: FooterSection[] = [
    {
      title: 'Servicios',
      links: [
        { label: 'Bodas', route: '/servicios' },
        { label: 'Cumpleaños y Fiestas', route: '/servicios' },
        { label: 'Celebraciones Familiares', route: '/servicios' },
        { label: 'Buffet y Cocktails', route: '/servicios' },
        { label: 'Menús Personalizados', route: '/servicios' }
      ]
    },
    {
      title: 'Nosotros',
      links: [
        { label: 'Sobre Nosotros', href: '#nosotros' },
        { label: 'Nuestro Equipo', href: '#nosotros' },
        { label: 'Galería de Eventos', href: '#galeria' },
        { label: 'Testimonios', href: '#testimonios' },
        { label: 'Blog', route: '/blog' }
      ]
    },
    /* {
      title: 'Recursos',
      links: [
        { label: 'Calculadora de Invitados', route: '/recursos' },
        { label: 'Guía de Planificación', route: '/recursos' },
        { label: 'Preguntas Frecuentes', route: '/faq' },
        { label: 'Políticas de Servicio', route: '/politicas' },
        { label: 'Términos y Condiciones', route: '/terminos' }
      ]
    }, */
    {
      title: 'Contacto',
      links: [
        { label: 'Solicitar Cotización', route: '/contacto' },
        { label: '+54 9 2494 681600', href: 'tel:+542494681600' },
        { label: 'deliciasdeltandileventos2@gmail.com', href: 'mailto:deliciasdeltandileventos2@gmail.com' },
        { label: 'Tandil, Buenos Aires', href: '#mapa' }
      ]
    }
  ];

  socialLinks = [
   /*  { name: 'Facebook', icon: 'facebook', url: 'https://facebook.com/deliciasdeltandil' }, */
    { name: 'Instagram', icon: 'instagram', url: 'https://www.instagram.com/deliciasdeltandilok/' },
    { name: 'TikTok', icon: 'tiktok', url: 'https://www.tiktok.com/@deliciasdeltandilok' },
    { name: 'WhatsApp', icon: 'whatsapp', url: 'https://wa.me/5492494681600' }
  ];
}
