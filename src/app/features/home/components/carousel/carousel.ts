import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface CarouselItem {
  image: string;
  title: string;
  category: string;
}

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel.html',
  styleUrl: './carousel.scss',
})
export class CarouselComponent implements OnInit, OnDestroy, AfterViewInit {
  items: CarouselItem[] = [
    {
      image: 'assets/images/eventos/thumbnail (29).jpg',
      title: 'Boda Elegante',
      category: 'Bodas'
    },
    {
      image: 'assets/images/eventos/thumbnail (4).jpg',
      title: '15 Años Glamourosos',
      category: 'Fiestas'
    },
    {
      image: 'assets/images/eventos/thumbnail (21).jpg',
      title: 'Egresos',
      category: 'Fiestas'
    },
    {
      image: 'assets/images/eventos/thumbnail (3).jpg',
      title: 'Ceremonia al Aire Libre',
      category: 'Bodas'
    }
  ];

  currentIndex = 0;
  intervalId: any;
  itemsPerView = 3;

  ngOnInit() {
    this.updateItemsPerView();
    this.startAutoplay();
    window.addEventListener('resize', this.updateItemsPerView.bind(this));
    this.handleImageErrors();
  }

  ngAfterViewInit() {
    this.apply3DEffect();
  }

  ngOnDestroy() {
    this.stopAutoplay();
    window.removeEventListener('resize', this.updateItemsPerView.bind(this));
  }

  startAutoplay() {
    this.intervalId = setInterval(() => {
      this.next();
    }, 4000);
  }

  stopAutoplay() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  updateItemsPerView() {
    if (window.innerWidth < 768) {
      this.itemsPerView = 1;
    } else if (window.innerWidth < 1024) {
      this.itemsPerView = 2;
    } else {
      this.itemsPerView = 3;
    }
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.items.length;
    this.apply3DEffect();
  }

  prev() {
    this.currentIndex = this.currentIndex === 0 ? this.items.length - 1 : this.currentIndex - 1;
    this.apply3DEffect();
  }

  getTransform(): string {
    const itemWidth = 100 / this.itemsPerView;
    return `translateX(-${this.currentIndex * itemWidth}%)`;
  }

  handleImageErrors() {
    setTimeout(() => {
      const images = document.querySelectorAll('.carousel-image img');
      images.forEach((img: any) => {
        img.onerror = () => {
          img.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800"%3E%3Cdefs%3E%3ClinearGradient id="g" x1="0%25" y1="0%25" x2="100%25" y2="100%25"%3E%3Cstop offset="0%25" style="stop-color:%23F5F1E1;stop-opacity:1"/%3E%3Cstop offset="50%25" style="stop-color:%23F0E1BD;stop-opacity:1"/%3E%3Cstop offset="100%25" style="stop-color:%23D6A350;stop-opacity:1"/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width="1200" height="800" fill="url(%23g)"/%3E%3Ctext x="50%25" y="50%25" text-anchor="middle" dy=".3em" fill="%23ffffff" font-size="48" font-family="Arial"%3EDelicias del Tandil%3C/text%3E%3C/svg%3E';
        };
      });
      this.apply3DEffect();
    }, 100);
  }

  apply3DEffect() {
    setTimeout(() => {
      const cards = document.querySelectorAll('.carousel-item');
      const centerIndex = Math.floor(this.itemsPerView / 2);
      
      cards.forEach((card: any, index) => {
        const position = index - this.currentIndex;
        const distance = Math.abs(position - centerIndex);
        
        let rotateY = 0;
        let translateZ = 0;
        let scale = 1;
        let opacity = 1;

        if (position < centerIndex) {
          // Cards a la izquierda
          rotateY = 25 - (distance * 5);
          translateZ = -100 * distance;
          scale = 1 - (distance * 0.1);
          opacity = 1 - (distance * 0.2);
        } else if (position > centerIndex) {
          // Cards a la derecha
          rotateY = -25 + (distance * 5);
          translateZ = -100 * distance;
          scale = 1 - (distance * 0.1);
          opacity = 1 - (distance * 0.2);
        } else {
          // Card central
          rotateY = 0;
          translateZ = 0;
          scale = 1.05;
          opacity = 1;
        }

        card.style.transform = `rotateY(${rotateY}deg) translateZ(${translateZ}px) scale(${scale})`;
        card.style.opacity = opacity;
        card.style.zIndex = 100 - distance;
      });
    }, 50);
  }
}
