import { Component, OnInit, OnDestroy, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Particle {
  x: number;
  y: number;
  z: number;
  baseX: number;
  baseY: number;
  baseZ: number;
  vx: number;
  vy: number;
  vz: number;
}

@Component({
  selector: 'app-particle-sphere',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './particle-sphere.component.html',
  styleUrls: ['./particle-sphere.component.scss']
})
export class ParticleSphereComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('canvas', { static: false }) canvasRef!: ElementRef<HTMLCanvasElement>;
  
  private canvas!: HTMLCanvasElement;
  private ctx!: CanvasRenderingContext2D;
  private particles: Particle[] = [];
  private animationFrameId: number = 0;
  private mouseX: number = 0;
  private mouseY: number = 0;
  private rotation: number = 0;

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.canvas = this.canvasRef.nativeElement;
    this.ctx = this.canvas.getContext('2d')!;
    
    this.resizeCanvas();
    this.createParticles();
    this.animate();
    
    window.addEventListener('resize', this.resizeCanvas.bind(this));
    this.canvas.addEventListener('mousemove', this.onMouseMove.bind(this));
  }

  ngOnDestroy(): void {
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
    }
    window.removeEventListener('resize', this.resizeCanvas.bind(this));
    this.canvas.removeEventListener('mousemove', this.onMouseMove.bind(this));
  }

  private resizeCanvas(): void {
    const container = this.canvas.parentElement;
    if (container) {
      this.canvas.width = container.clientWidth;
      this.canvas.height = container.clientHeight;
    }
  }

  private createParticles(): void {
    const numParticles = 800;
    const radius = 280;

    for (let i = 0; i < numParticles; i++) {
      // Distribución uniforme en la superficie de una esfera
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      
      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);

      this.particles.push({
        x,
        y,
        z,
        baseX: x,
        baseY: y,
        baseZ: z,
        vx: 0,
        vy: 0,
        vz: 0
      });
    }
  }

  private onMouseMove(event: MouseEvent): void {
    const rect = this.canvas.getBoundingClientRect();
    this.mouseX = (event.clientX - rect.left - rect.width / 2);
    this.mouseY = (event.clientY - rect.top - rect.height / 2);
  }

  private animate(): void {
    this.ctx.fillStyle = 'rgba(10, 10, 10, 0.15)';
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    const centerX = this.canvas.width / 2;
    const centerY = this.canvas.height / 2;

    this.rotation += 0.2;

    this.particles.forEach((particle) => {
      // Calcular distancia al mouse
      const dx = particle.x - this.mouseX;
      const dy = particle.y - this.mouseY;
      const distance = Math.sqrt(dx * dx + dy * dy);
      const maxDistance = 150;

      // Aplicar fuerza de repulsión
      if (distance < maxDistance) {
        const force = (maxDistance - distance) / maxDistance;
        particle.vx += (dx / distance) * force * 3;
        particle.vy += (dy / distance) * force * 3;
        particle.vz += (Math.random() - 0.5) * force * 2;
      }

      // Aplicar gravedad hacia la posición original
      particle.vx += (particle.baseX - particle.x) * 0.02;
      particle.vy += (particle.baseY - particle.y) * 0.02;
      particle.vz += (particle.baseZ - particle.z) * 0.02;

      // Aplicar fricción
      particle.vx *= 0.92;
      particle.vy *= 0.92;
      particle.vz *= 0.92;

      // Actualizar posición
      particle.x += particle.vx;
      particle.y += particle.vy;
      particle.z += particle.vz;

      // Rotación automática
      const rotAngle = this.rotation * Math.PI / 180;
      const rotX = particle.x * Math.cos(rotAngle) - particle.z * Math.sin(rotAngle);
      const rotZ = particle.x * Math.sin(rotAngle) + particle.z * Math.cos(rotAngle);

      // Proyección 3D a 2D
      const scale = 600 / (600 + rotZ);
      const x2d = rotX * scale + centerX;
      const y2d = particle.y * scale + centerY;

      // Calcular tamaño y opacidad basados en Z
      const size = Math.max(1, scale * 2.5);
      const opacity = Math.max(0.2, Math.min(1, scale));

      // Dibujar partícula con gradiente dorado
      const gradient = this.ctx.createRadialGradient(x2d, y2d, 0, x2d, y2d, size);
      gradient.addColorStop(0, `rgba(255, 215, 100, ${opacity})`);
      gradient.addColorStop(0.4, `rgba(214, 163, 80, ${opacity * 0.8})`);
      gradient.addColorStop(1, `rgba(214, 163, 80, 0)`);

      this.ctx.fillStyle = gradient;
      this.ctx.beginPath();
      this.ctx.arc(x2d, y2d, size, 0, Math.PI * 2);
      this.ctx.fill();
    });

    this.animationFrameId = requestAnimationFrame(() => this.animate());
  }
}
