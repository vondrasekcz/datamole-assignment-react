import styled from "styled-components";

interface Props {
    variant?: "primary" | "error" | "success";
}

const Button = styled.button<Props>`
    display: inline-flex;
    justify-content: center;

    padding: 4px;

    border-radius: 2px;
    border-width: 1px;
    border-style: solid;

    font-size: 1rem;

    ${({ variant = "primary", theme }) =>
        variant === "primary"
            ? `
                color: ${theme.colors.olive12};
                background-color: ${theme.colors.olive2};
                border-color: ${theme.colors.olive12};
                &:hover, &:focus {
                    background-color: ${theme.colors.olive5};
                }
                &:active {
                    background-color: ${theme.colors.olive8};
                }
            `
            : variant === "error"
            ? `
                color: ${theme.colors.red12};
                background-color: ${theme.colors.red5};
                border-color: ${theme.colors.red12};
                &:hover, &:focus {
                    background-color: ${theme.colors.red7};
                }
                &:active {
                    background-color: ${theme.colors.red9};
                }
            `
            : variant === "success"
            ? `
                color: ${theme.colors.green12};
                background-color: ${theme.colors.green5};
                border-color: ${theme.colors.green12};
                &:hover, &:focus {
                    background-color: ${theme.colors.green7};
                }
                &:active {
                    background-color: ${theme.colors.green9};
                }
            `
            : ""}
`;

export default Button;
