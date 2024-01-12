import React, { PropsWithChildren } from "react";
import { olive, grass, blackA, redDark, greenDark } from "@radix-ui/colors";
import { DefaultTheme, ThemeProvider as ThemeProviderStyled } from "styled-components";
import { GlobalStyle } from "./Global";

const theme: DefaultTheme = {
    colors: {
        ...olive,
        ...grass,
        ...blackA,
        ...redDark,
        ...greenDark,
    },
};

export const ThemeProvider: React.FC<PropsWithChildren> = ({ children }) => (
    <ThemeProviderStyled theme={theme}>
        <GlobalStyle />
        {children}
    </ThemeProviderStyled>
);
