import { Injectable } from '@angular/core';
import { StyleFontSettings, StyleSettings } from 'app/interfaces';

@Injectable({
  providedIn: 'root'
})
export class StyleSettingsService {
  constructor() {
    // not to do
  }

  private applyColors(settings: StyleSettings): any {
    const { colors } = settings;

    let bucketColors = null;

    ['theme', 'error', 'warning', 'success', 'question'].forEach((color: string) => {
      Object.entries(colors[color] as any).forEach(([paletteKey, paletteValue]) => {
        if (paletteKey === 'contrast') {
          Object.entries(paletteValue).forEach(([paletteContrastKey, paletteContrastValue]) => {
            document.documentElement.style.setProperty(
              `--timely-color-${color}-contrast-${paletteContrastKey}`,
              `${paletteContrastValue}`
            );
            bucketColors = {
              ...bucketColors,
              [`--timely-color-${color}-contrast-${paletteContrastKey}`]: `${paletteContrastValue}`
            };
          });
        } else {
          document.documentElement.style.setProperty(
            `--timely-color-${color}-${paletteKey}`,
            `${paletteValue}`
          );
          bucketColors = {
            ...bucketColors,
            [`--timely-color-${color}-${paletteKey}`]: `${paletteValue}`
          };
        }
      });
    });

    return bucketColors;
  }

  private applyFonts(settings: StyleSettings) {
    const font: StyleFontSettings = {
      url:
        'https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&display=swap',
      name: 'Work Sans',
      ...settings.font
    };

    document.documentElement.style.setProperty('--timely-font-name', `${font.name}`);

    const link: HTMLLinkElement = document.createElement('link');
    link.setAttribute('rel', 'stylesheet');
    link.setAttribute('type', 'text/css');
    link.setAttribute('href', `${font.url}`);
    document.head.appendChild(link);
  }

  private applyTheme(settings: StyleSettings) {
    const { theme } = settings;
    document.title = `${theme.title}`;

    const link: HTMLLinkElement = document.createElement('link');
    link.setAttribute('rel', 'icon');
    link.setAttribute('type', 'image/x-icon');
    link.setAttribute('href', `${theme.favicon}`);
    document.head.appendChild(link);
  }

  public apply(config: StyleSettings, callback?: Function) {
    const bucketColors = this.applyColors(config);
    this.applyFonts(config);
    this.applyTheme(config);
    setTimeout(() => {
      if (callback) {
        callback({
          bucketColors
        });
      }
    }, 500);
  }
}
