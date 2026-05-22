import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { CarouselComponent } from './components/carousel/carousel';
import { StatsComponent } from './components/stats/stats.component';
import { ServicesComponent } from './components/services/services.component';
import { FeaturesComponent } from './components/features/features.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ParticleSphereComponent } from './components/particle-sphere/particle-sphere.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { CtaComponent } from './components/cta/cta.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HeroComponent,
    AboutComponent,
    CarouselComponent,
    StatsComponent,
    ServicesComponent,
    FeaturesComponent,
    GalleryComponent,
    ParticleSphereComponent,
    TestimonialsComponent,
    CtaComponent
  ],
  template: `
    <app-hero />
    <app-about />
    <app-carousel />
    <app-stats />
    <app-services />
    <app-features />
    <app-gallery />
    <app-particle-sphere />
    <app-testimonials />
    <app-cta />
  `
})
export class HomeComponent {}
