export declare function mapAttributes<T = any>(obj: T, mapper: MapperType<T>): any;
export declare function revertMapAttributes<T = any>(obj: any, mapper: MapperType<T>): T;
export declare type MapperType<T> = {
    readonly [P in keyof T]?: string;
};
