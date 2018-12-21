export class LanguageDetector {
  static type: string;
  constructor(services: any, ...args: any[]);
  type: any;
  detectors: any;
  addDetector(detector: any): void;
  cacheUserLanguage(req: any, res: any, lng: any, caches: any, ...args: any[]): void;
  detect(req: any, res: any, detectionOrder: any, ...args: any[]): any;
  init(services: any, ...args: any[]): void;
}
export function addRoute(
  i18next: any,
  route: any,
  lngs: any,
  app: any,
  verb: any,
  fc: any,
  ...args: any[]
): void;
export default _default;

export function getResourcesHandler(i18next: any, options: any): any;
export function handle(i18next: any, ...args: any[]): any;
export function missingKeyHandler(i18next: any, options: any): any;
