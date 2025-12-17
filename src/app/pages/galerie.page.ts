import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { GALLERY_ASSETS } from './gallery-assets';

interface GalleryImage {
  src: string;
  optimizedSrc: string;
  alt: string;
  id: number;
}

const buildNetlifyImageUrl = (src: string): string =>
  `/.netlify/images?url=${encodeURIComponent(src)}&w=1600&fit=cover&auto=compress`;

const galleryImages = GALLERY_ASSETS.map((asset, index) => {
  const publicPath = `/img/gallery/${asset.fileName}`;

  return {
    src: publicPath,
    optimizedSrc: buildNetlifyImageUrl(publicPath),
    id: index + 1,
    alt: asset.alt,
  } satisfies GalleryImage;
});

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
