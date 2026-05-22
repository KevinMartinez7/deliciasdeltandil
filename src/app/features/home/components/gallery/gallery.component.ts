import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

interface GalleryItem {
  title: string;
  category: string;
  image: string;
}

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {
  galleryItems: GalleryItem[] = [
    { title: 'Evento Especial', category: 'Eventos', image: 'assets/images/ultimos_eventos/thumbnail (7).jpg' },
    { title: 'Celebración Elegante', category: 'Bodas', image: 'assets/images/ultimos_eventos/thumbnail (1).jpg' },
    { title: 'Fiesta Premium', category: 'Social', image: 'assets/images/ultimos_eventos/thumbnail (2).jpg' },
    { title: 'Egreso', category: 'Evento', image: 'assets/images/ultimos_eventos/egreso.jpg' },
    { title: 'Banquete Gourmet', category: 'Bodas', image: 'assets/images/ultimos_eventos/thumbnail (9).jpg' },
    { title: 'Cocktail Premium', category: 'Cocktails', image: 'assets/images/ultimos_eventos/photo-1581927692308-be9e43b4d860.avif' },
    { title: 'Cena Privada', category: 'Social', image: 'assets/images/ultimos_eventos/cenaprivada.avif' },
    { title: 'Evento Especial', category: 'Eventos', image: 'assets/images/ultimos_eventos/thumbnail.jpg' }
  ];

  rotation = 0;
  isDragging = false;
  startX = 0;
  currentX = 0;
  velocity = 0;
  animationFrame: any;

  // Lightbox
  lightboxOpen = false;
  currentImageIndex = 0;

  getItemTransform(index: number): string {
    const angle = (360 / this.galleryItems.length) * index;
    const radius = 550; // Distance from center
    return `rotateY(${angle}deg) translateZ(${radius}px)`;
  }

  onMouseDown(event: MouseEvent): void {
    this.isDragging = true;
    this.startX = event.clientX;
    this.currentX = event.clientX;
    this.velocity = 0;
    
    if (this.animationFrame) {
      cancelAnimationFrame(this.animationFrame);
    }
  }

  onMouseMove(event: MouseEvent): void {
    if (!this.isDragging) return;
    
    const deltaX = event.clientX - this.currentX;
    this.velocity = deltaX;
    this.rotation += deltaX * 0.3;
    this.currentX = event.clientX;
  }

  onMouseUp(): void {
    if (!this.isDragging) return;
    
    this.isDragging = false;
    this.applyMomentum();
  }

  applyMomentum(): void {
    if (Math.abs(this.velocity) > 0.1) {
      this.rotation += this.velocity * 0.3;
      this.velocity *= 0.95; // Friction
      this.animationFrame = requestAnimationFrame(() => this.applyMomentum());
    }
  }

  openLightbox(index: number): void {
    if (!this.isDragging) {
      this.currentImageIndex = index;
      this.lightboxOpen = true;
      document.body.style.overflow = 'hidden';
    }
  }

  closeLightbox(): void {
    this.lightboxOpen = false;
    document.body.style.overflow = '';
  }

  nextImage(event: Event): void {
    event.stopPropagation();
    this.currentImageIndex = (this.currentImageIndex + 1) % this.galleryItems.length;
  }

  previousImage(event: Event): void {
    event.stopPropagation();
    this.currentImageIndex = this.currentImageIndex === 0 ? this.galleryItems.length - 1 : this.currentImageIndex - 1;
  }

  @HostListener('window:keydown', ['$event'])
  handleKeyboard(event: KeyboardEvent): void {
    if (!this.lightboxOpen) return;
    
    if (event.key === 'Escape') {
      this.closeLightbox();
    } else if (event.key === 'ArrowRight') {
      this.nextImage(event);
    } else if (event.key === 'ArrowLeft') {
      this.previousImage(event);
    }
  }
}
