export type StringToNumber<T extends string> =
    T extends `${infer Result extends number}` ? Result : never;
