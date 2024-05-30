import '@emotion/react';
import { EvanBrotherTheme } from '../src/themes';

declare module '@emotion/react' {
    export interface Theme extends EvanBrotherTheme {}
}
