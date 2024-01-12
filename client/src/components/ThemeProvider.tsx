import React, { PropsWithChildren } from "react";
import { olive, grass, blackA, red, green } from "@radix-ui/colors";
import { DefaultTheme, ThemeProvider as ThemeProviderStyled } from "styled-components";
import { GlobalStyle } from "./Global";

const theme: DefaultTheme = {
    colors: {
        ...olive,
        ...grass,
        ...blackA,
        ...red,
        ...green,
    },
};

export const ThemeProvider: React.FC<PropsWithChildren> = ({ children }) => (
    <ThemeProviderStyled theme={theme}>
        <GlobalStyle />
        {children}
    </ThemeProviderStyled>
);
