import { InputHTMLAttributes, ReactNode } from "react";
import styled from "styled-components";

interface ButtonProps extends InputHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary';
    children?: string;
    disabled?: boolean;
    type?: 'button' | 'submit' | 'reset';
}


const StyledButton = styled.button<ButtonProps>`
    color: #FFF;
    margin-top: 20px;
    width: 100%;
    background-color: ${
        props => props.variant === 'primary' ? '#c1ab60' :
                 props.variant === 'secondary' ? '#f0f321'
                 : 'black'    
    };
    padding: 0 40px;
    border-radius: 5px;
    height: 30px;
    text-align: center;
    font-family: 'Noto Sans Display', sans-serif;
    font-size: 13px;

    transition: all .2s ease-in-out;

    :hover {
        cursor: pointer;
    }

    :disabled {
        pointer-events: none;
        background-color: #ccc;
    }

`;

export const Button: React.FC<ButtonProps> = (props) => (
    <StyledButton disabled={props.disabled} onClick={props.onClick} variant={props.variant} {...props} >
        {props.children}
    </StyledButton>
);
