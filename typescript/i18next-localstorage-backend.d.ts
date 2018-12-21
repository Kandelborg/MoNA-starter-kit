export = index;
declare class index {
  static type: string;
  constructor(services: any, ...args: any[]);
  type: any;
  init(services: any, ...args: any[]): void;
  read(language: any, namespace: any, callback: any): any;
  save(language: any, namespace: any, data: any): void;
}
