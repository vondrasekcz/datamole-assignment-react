/// <reference types="vite/client" />
import "styled-components";
import { olive, grass, blackA, redDark, greenDark } from "@radix-ui/colors";

interface ImportMetaEnv {
    readonly VITE_HTTP_LINK: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}

declare module "styled-components" {
    export interface DefaultTheme {
        colors: typeof olive & typeof grass & typeof blackA & typeof redDark & typeof greenDark;
    }
}
