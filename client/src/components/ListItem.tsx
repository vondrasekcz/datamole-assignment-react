import React from "react";
import styled from "styled-components";
import { Checkbox } from "./Checkbox";
import { CheckboxProps } from "@radix-ui/react-checkbox";
import { Pencil1Icon, TrashIcon } from "@radix-ui/react-icons";
import Button from "./Button";

const StyledDiv = styled.div`
    display: flex;
    align-items: center;
`;

const Label = styled.label`
    margin-left: 15px;
`;

export type LiteItemProp = CheckboxProps & {
    label: string;
    handleEdit: () => void;
    handleRemoval: () => void;
};

export const ListItem: React.FC<LiteItemProp> = ({ label, handleRemoval, handleEdit, ...checkboxProps }) => (
    <StyledDiv>
        <Checkbox {...checkboxProps} />
        <Label>{label}</Label>
        <Button variant="primary" onClick={() => handleEdit()}>
            <TrashIcon />
        </Button>
        <Button variant="error" onClick={() => handleRemoval()}>
            <Pencil1Icon />
        </Button>
    </StyledDiv>
);
