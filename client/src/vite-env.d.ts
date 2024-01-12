/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_HTTP_LINK: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
