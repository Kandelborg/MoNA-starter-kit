export = index;
declare class index {
  static type: string;
  constructor(services: any, ...args: any[]);
  backends: any;
  type: any;
  create(languages: any, namespace: any, key: any, fallbackValue: any): void;
  init(services: any, ...args: any[]): void;
  read(language: any, namespace: any, callback: any): void;
}
