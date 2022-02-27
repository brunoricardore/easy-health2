import { InputHTMLAttributes } from "react";
import styled from "styled-components";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
}

const InputGroup = styled.div`
    margin-top: 10px;

    label {
        width: 100%;
        font-family: 'Noto Sans Display', sans-serif;
    }

    input {
        width: 100%;
        height: 30px;
        border-radius: 5px;
        color: #333;
        border: 1px solid #ccc;
        transition: border-color .2s ease-in-out, box-shadow .2s ease-in-out ;
    }

`;



export const Input: React.FC<InputProps> = (props) => (
    <InputGroup>
        {props.label && <label htmlFor={props.id}>{props.label}</label>}
        <input
            id={props.id}
            name={props.name}
            type={props.type || 'text'}
            value={props.value}
            onChange={props.onChange}
        />
    </InputGroup>
);