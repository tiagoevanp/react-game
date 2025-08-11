/**
 * Converts a string literal type to a number literal type.
 *
 * @example
 * type A = StringToNumber<"42">; // 42
 * type B = StringToNumber<"hello">; // never
 */

export type StringToNumber<T extends string> =
  T extends `${infer Result extends number}` ? Result : never;
