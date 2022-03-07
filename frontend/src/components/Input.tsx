import { InputHTMLAttributes, useDebugValue } from "react";
import {
  Control,
  Controller,
  FieldError,
  FieldValues,
  UseControllerProps,
} from "react-hook-form";
import InputMask, { InputState } from "react-input-mask";
import styled from "styled-components";
import { VALIDATION_MESSAGES } from "../utils/ValidationMessages";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  control: Control<FieldValues, any>;
  name: string;
  rules?: UseControllerProps["rules"];
  inputError?: FieldError;
  mask?: string | (string | RegExp)[];
  beforeMaskEvent?: (currentState: InputState, nextState: InputState) => void;
}

export const InputGroup = styled.div`
  margin-top: 10px;
  width: 100%;

  label {
    width: 100%;
    font-family: "Noto Sans Display", sans-serif;
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
    transition: border-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
    padding-left: 15px;
    font-family: "Noto Sans Display", sans-serif;
    font-size: 14px;
    transition: border 0.2s ease-in-out;
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

export const InputErrorMessage = styled.small`
  color: red;
  font-size: 12px;
  font-family: "Noto Sans Display", sans-serif;
`;

export const Input: React.FC<InputProps> = (props) => {
  return (
    <InputGroup
      className={`${props.inputError ? "input-invalid" : "input-valid"}`}
    >
      {props.label && (
        <label htmlFor={props.id}>
          {props.label} {props.required ? " *" : ""}
        </label>
      )}

      <Controller
        defaultValue={""}
        control={props.control}
        name={props.name}
        rules={props.rules}
        render={({ field }) => {
          return props.mask ? (
            <InputMask
              maskPlaceholder={null}
              mask={props.mask}
              value={field.value}
              onChange={field.onChange}
              beforeMaskedStateChange={({ currentState, nextState }) => {
                if (props.beforeMaskEvent && currentState) {
                  props.beforeMaskEvent(currentState, nextState);
                  return {
                    ...nextState,
                    selection: {
                      end: currentState?.value.length + 1,
                      start: currentState?.value.length + 1,
                    },
                    value: currentState?.value,
                  };
                }
                return nextState;
              }}
            />
          ) : (
            <input
              type={props.type}
              value={field.value}
              onChange={field.onChange}
            />
          );
        }}
      />

      {props.inputError && (
        <InputErrorMessage>
          {props.inputError?.message ||
            `${props.label} ${
              VALIDATION_MESSAGES[props.inputError?.type + ""]
            }`}
        </InputErrorMessage>
      )}
    </InputGroup>
  );
};
