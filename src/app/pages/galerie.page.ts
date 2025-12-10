import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

interface GalleryImage {
  src: string;
  optimizedSrc: string;
  alt: string;
  id: number;
}

const galleryFiles = import.meta.glob<string>(
  '../../../public/img/gallery/*.{jpg,JPG,jpeg,png,webp,avif,gif}',
  {
    eager: true,
    import: 'default',
  },
) satisfies Record<string, string>;

const normalizeToPublicPath = (src: string): string =>
  src.startsWith('/') ? src : `/${src.replace(/^\.\//, '')}`;

const buildNetlifyImageUrl = (src: string): string =>
  `/.netlify/images?url=${encodeURIComponent(src)}&w=1600&fit=cover&auto=compress`;

const galleryImages = Object.entries(galleryFiles)
  .sort(([a], [b]) => a.localeCompare(b, undefined, { sensitivity: 'base' }))
  .map(([, src], index) => {
    const publicPath = normalizeToPublicPath(src);

    return {
      src: publicPath,
      optimizedSrc: buildNetlifyImageUrl(publicPath),
      id: index + 1,
      alt: `Fotografie din galeria centrului #${index + 1}`,
    } satisfies GalleryImage;
  }) satisfies GalleryImage[];

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

  swapToOriginal(event: Event, image: GalleryImage): void {
    const target = event.target as HTMLImageElement | null;

    if (!target) {
      return;
    }

    target.src = image.src;
    target.srcset = '';
  }
}
