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

const InputContainer = styled.div`
    flex-shrink: 0;
`;

const Label = styled.label`
    margin-left: 15px;
    margin-right: 15px;
    word-break: break-word;
`;

const Actions = styled.div`
    display: flex;
    margin-left: auto;
    gap: 2px;
`;

export type LiteItemProp = CheckboxProps & {
    label: string;
    handleEdit: () => void;
    handleRemoval: () => void;
};

export const ListItem: React.FC<LiteItemProp> = ({ label, handleRemoval, handleEdit, ...checkboxProps }) => (
    <StyledDiv>
        <InputContainer>
            <Checkbox {...checkboxProps} />
        </InputContainer>
        <Label>{label}</Label>
        <Actions>
            <Button variant="primary" onClick={() => handleEdit()}>
                <Pencil1Icon />
            </Button>
            <Button variant="error" onClick={() => handleRemoval()}>
                <TrashIcon />
            </Button>
        </Actions>
    </StyledDiv>
);
