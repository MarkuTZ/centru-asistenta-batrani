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
  readonly slides = [
    {
      src: '/img/care-01.jpg',
      alt: 'Îngrijitoare care discută cu o persoană adultă într-un spațiu luminos',
      caption: 'Oferim sprijin zilnic și conversații calde pentru fiecare persoană din grijă.',
    },
    {
      src: '/img/care-02.jpg',
      alt: 'Specialist care ajută un beneficiar cu exerciții de mobilitate',
      caption:
        'Programele de recuperare sunt adaptate nivelului de mobilitate și obiectivelor fiecărui beneficiar.',
    },
    {
      src: '/img/care-04.jpg',
      alt: 'Beneficiari care participă la o activitate de socializare',
      caption:
        'Activitățile de socializare creează prietenii și un sentiment puternic de comunitate.',
    },
    {
      src: '/img/illustration-01.jpg',
      alt: 'Ilustrație cu persoane care se bucură de sprijin din partea echipei People for People',
      caption:
        'Împreună cu familiile construim un plan de îngrijire echilibrat și plin de empatie.',
    },
  ];

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
