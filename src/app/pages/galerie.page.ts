import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface GalleryImage {
  src: string;
  alt: string;
  id: number;
}

const BASE_IMAGES: Omit<GalleryImage, 'id'>[] = [
  { src: '/img/care-01.jpg', alt: 'Zâmbete și conversații în sala de zi' },
  { src: '/img/care-02.jpg', alt: 'Activități la masă alături de echipă' },
  { src: '/img/care-03.jpg', alt: 'Plimbare liniștită în curtea centrului' },
  { src: '/img/care-04.jpg', alt: 'Asistență dedicată și atenție la detalii' },
  { src: '/img/illustration-01.jpg', alt: 'Atmosferă caldă în spațiile comune' },
  { src: '/img/hero.jpg', alt: 'Căldură și grijă în fiecare cameră' },
];

@Component({
  selector: 'app-galerie',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './galerie.page.html',
  styleUrl: './galerie.page.scss',
})
export class GaleriePage {
  readonly galleryImages: GalleryImage[] = Array.from({ length: 45 }, (_, index) => {
    const image = BASE_IMAGES[index % BASE_IMAGES.length];
    return { ...image, id: index + 1 } satisfies GalleryImage;
  });
}
