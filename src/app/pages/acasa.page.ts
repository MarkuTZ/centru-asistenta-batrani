import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-acasa',
  imports: [CommonModule, RouterLink],
  standalone: true,
  templateUrl: './acasa.page.html',
  styleUrl: './acasa.page.scss',
})
export class AcasaPage {
  private readonly galleryImageNames = [
    'IMG (10).jpg',
    'IMG (12).jpg',
    'IMG (14).jpg',
    'IMG (22).JPG',
  ];

  readonly slides = this.galleryImageNames.map((imageName, index) => ({
    src: `/img/gallery/${imageName}`,
    alt: `Fotografie ${index + 1} din galeria People for People`,
    caption: `Moment ${index + 1} din galeria centrului.`,
  }));

  currentSlide = 0;

  get carouselTransform(): string {
    return `translateX(-${this.currentSlide * 100}%)`;
  }

  previousSlide(): void {
    this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
  }

  nextSlide(): void {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }

  goToSlide(index: number): void {
    if (index < 0 || index >= this.slides.length) {
      return;
    }

    this.currentSlide = index;
  }
}
