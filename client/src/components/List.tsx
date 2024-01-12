import React, { PropsWithChildren } from "react";
import styled from "styled-components";

const StyledDiv = styled.ul`
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
    list-style: none;
`;

export const List: React.FC<PropsWithChildren> = ({ children }) => <StyledDiv>{children}</StyledDiv>;
