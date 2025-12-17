import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { GALLERY_ASSETS } from './gallery-assets';

interface GalleryImage {
  src: string;
  alt: string;
  id: number;
}

const galleryImages = GALLERY_ASSETS.map((asset, index) => ({
  src: `/img/gallery/${asset.fileName}`,
  id: index + 1,
  alt: asset.alt,
} satisfies GalleryImage));

@Component({
  selector: 'app-galerie',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './galerie.page.html',
  styleUrl: './galerie.page.scss',
})
export class GaleriePage {
  readonly galleryImages: GalleryImage[] = galleryImages;
  readonly totalImages = this.galleryImages.length;
}
