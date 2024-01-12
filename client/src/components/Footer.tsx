import React from "react";
import styled from "styled-components";

const StyledDiv = styled.footer`
    display: flex;
    margin-top: auto;
    padding-top: 15px;
    border-top: 1px solid;
    border-color: ${(props) => props.theme.colors.olive6};
`;

export type FooterProps = {
    todoItems?: number;
    doneItems?: number;
};
export const Footer: React.FC<FooterProps> = ({ todoItems = 0, doneItems = 0 }) => (
    <StyledDiv>
        Todo: {todoItems}, Done: {doneItems}
    </StyledDiv>
);
