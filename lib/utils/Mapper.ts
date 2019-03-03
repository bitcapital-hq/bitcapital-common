export function mapAttributes<T = any>(obj: T, mapper: MapperType<T>): any {
  const result: any = {};
  Object.keys(obj).forEach((key: string) => {
    if (!(<any>mapper)[key]) {
      result[key] = (<any>obj)[key];
    } else {
      result[(<any>mapper)[key]] = (<any>obj)[key];
    }
  });

  return result;
}

export function revertMapAttributes<T = any>(obj: any, mapper: MapperType<T>): T {
  const revertMap: any = {};
  Object.keys(mapper).forEach((key: string) => {
    revertMap[(mapper as any)[key]] = key;
  });

  return mapAttributes(obj, revertMap);
}

export type MapperType<T> = { readonly [P in keyof T]?: string };
