import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface GalleryImage {
  src: string;
  alt: string;
  id: number;
}

const galleryFiles = import.meta.glob<string>(
  '../../../public/img/gallery/*.{jpg,jpeg,png,webp,avif,gif}',
  {
    eager: true,
    import: 'default',
  }
) satisfies Record<string, string>;

const galleryImages = Object.entries(galleryFiles)
  .sort(([a], [b]) => a.localeCompare(b, undefined, { sensitivity: 'base' }))
  .map(([, src], index) => ({
    src,
    id: index + 1,
    alt: `Fotografie din galeria centrului #${index + 1}`,
  })) satisfies GalleryImage[];

@Component({
  selector: 'app-galerie',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './galerie.page.html',
  styleUrl: './galerie.page.scss',
})
export class GaleriePage {
  readonly galleryImages: GalleryImage[] = galleryImages;
  readonly totalImages = this.galleryImages.length;
}
