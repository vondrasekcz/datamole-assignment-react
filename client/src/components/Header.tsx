import React from "react";
import styled from "styled-components";
import { PlusIcon } from "@radix-ui/react-icons";
import Button from "./Button";

export type HeaderProps = {
    children: React.ReactNode;
    handleAddItem: () => void;
};

const StyledDiv = styled.header`
    display: flex;
`;

export const Header: React.FC<HeaderProps> = ({ handleAddItem, children }) => (
    <StyledDiv>
        <h1>{children}</h1>
        <Button variant="success" onClick={() => handleAddItem()}>
            <PlusIcon />
        </Button>
    </StyledDiv>
);
