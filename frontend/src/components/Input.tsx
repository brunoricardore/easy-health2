import { InputHTMLAttributes } from "react";
import { Control, Controller, FieldError, FieldValues, UseControllerProps } from "react-hook-form";
import styled from "styled-components";
import { VALIDATION_MESSAGES } from "../utils/ValidationMessages";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    control: Control<FieldValues, any>
    name: string;
    rules?: UseControllerProps['rules'];
    inputError?: FieldError
}


const InputGroup = styled.div`
    margin-top: 10px;
    width: 100%;

    label {
        width: 100%;
        font-family: 'Noto Sans Display', sans-serif;
        font-size: 14px;
        font-weight: 300;
        color: #82848d;
        margin-bottom: 12px;
    }

    input {
        width: 100%;
        height: 30px;
        border-radius: 5px;
        color: #333;
        border: 1px solid #ccc;
        transition: border-color .2s ease-in-out, box-shadow .2s ease-in-out;
        padding-left: 15px;
        font-family: 'Noto Sans Display', sans-serif;
        font-size: 14px;
        transition: border .2s ease-in-out;
    }

    &.input-invalid {

        label {
            color: red;
        }

        input {
            border: 1px solid red;
        }    
    }

`;

const InputErrorMessage = styled.small`
    color: red;
    font-size: 12px;
    font-family: 'Noto Sans Display', sans-serif;
`;

export const Input: React.FC<InputProps> = (props) => {
    return (
        <InputGroup className={`${props.inputError ? 'input-invalid' : 'input-valid'}`}>
            {props.label && <label htmlFor={props.id}>{props.label}</label>}

            <Controller
                defaultValue={''}
                control={props.control}
                name={props.name}
                rules={props.rules}
                render={({ field }) => (
                    <input

                        type={props.type || 'text'}
                        {...props}
                        {...field}
                    />
                )}
            />

            {
                props.inputError && <InputErrorMessage>{props.inputError?.message || `${props.label} ${VALIDATION_MESSAGES[props.inputError?.type + '']}`}</InputErrorMessage>
            }
        </InputGroup>
    )
};